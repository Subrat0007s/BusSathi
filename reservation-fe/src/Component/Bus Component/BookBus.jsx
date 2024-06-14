import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const BookBus = () => {
  let [bus, setbus] = useState("")
  let params = useParams()
  useEffect(() => {
    axios.get(`http://localhost:8080/api/buses/${params.id}`)
      .then((res) => {
        console.log(res);
        setbus(res.data.data)
      })
      .catch((err) => {
        console.log(err);
      })
  })

  let seats = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  return (
    <div className='diplay_book'>
      <h1>{bus.name}</h1>
      <b>From:</b><span>{bus.fromLoc}</span> <br /><br />
      <b>To:</b><span>{bus.toLoc}</span><br /><br />
      <b>Coach Type : </b>
      <select >
        <option >AC</option>
        <option >Non/Ac</option>
        <option >Sleeper Ac</option>
        <option >Sleeper Non/Ac</option>

      </select>
      <br /><br />
      <b>Number Of Seats Available : </b><big><b>{bus.numberOfSeats}</b></big>
      <br /><br />
      <b>Select Number Of Seats :</b><select >
        {seats.map((seat) => {
          return (
            <option >{seat}</option>
          )
        })}
      </select>

      <h3>Date Of Departure : <i>{bus.departure_date_time}</i></h3>
      <button className='btn btn-danger my-2 mx-5'>Book Bus</button>
    </div>
  )
}

export default BookBus