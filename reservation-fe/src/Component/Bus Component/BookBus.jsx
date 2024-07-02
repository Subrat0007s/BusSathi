import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './bookbus.module.css'; 

const BookBus = () => {
  const [bus, setBus] = useState("");
  const [selectedSeats, setSelectedSeats] = useState(1);
  const params = useParams();
  const navigate = useNavigate();
  
  useEffect(() => {
    axios.get(`http://localhost:8088/api/bus/${params.id}`)
      .then((res) => {
        console.log(res);
        setBus(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [params.id]);

  const seats = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const totalPrice = bus.cost * selectedSeats; // Calculate total price based on selected seats

  let user = JSON.parse(localStorage.getItem("User"))
  const handleBookBus = () => {
    axios.post(`http://localhost:8088/api/book-ticket/${user.id}/${params.id}/${selectedSeats}`)
      .then((res) => {
        console.log(res);
        navigate('/bookings', { state: { bus, selectedSeats, totalPrice } });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div className={styles.bodyBackground}></div>
      <div className={styles.ticketbook}>
        <h1>{bus.name}</h1>
        <div className={styles.ticketbookContent}>
          <div>
            <b>From:</b><span>{bus.fromLoc}</span>
          </div>
          <div>
            <b>To:</b><span>{bus.toLoc}</span>
          </div>
          <div>
            <b>Bus Type : </b>
            <select>
              <option>AC</option>
              <option>Non/Ac</option>
              <option>Sleeper Ac</option>
              <option>Sleeper Non/Ac</option>
            </select>
          </div>
          <div>
            <b>Number Of Seats Available : </b><big><b>{bus.noOfSeats}</b></big>
          </div>
          <div>
            <b>Select Number Of Seats :</b>
            <select value={selectedSeats} onChange={(e) => setSelectedSeats(Number(e.target.value))}>
              {seats.map((seat) => (
                <option key={seat} value={seat}>{seat}</option>
              ))}
            </select>
          </div>
        </div>
        <p>Date Of Departure : <i>{bus.departure_date_time}</i></p>
        <p>Price: &#8377; <b>{totalPrice}</b></p>
        <button className='btn btn-danger my-2 mx-5'onClick={handleBookBus}>Book Bus</button>
      </div>
    </div>
  );
};

export default BookBus;
