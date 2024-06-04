import axios from 'axios';
import React, { useEffect, useState } from 'react'

const ViewAllBus = () => {
    let [bus,setBus]=useState([]);
    useEffect(()=>{
        axios.get(`http://localhost:8088/api/bus`)
        .then((res)=>{
            console.log(res.data.data);
            setBus(res.data.data)
        })
        .catch((err)=>{
            console.error(err);
        })
    },[])
  return (
    <div className="viewbus">
        {bus.map((buses)=>{
            return(
                <div className="busdetails">
                    <h3>{buses.name}</h3>
                    <i>Seats: {buses.noOfSeats}</i>
                    <p>From: {buses.fromLoc}</p>
                    <p>To: {buses.toLoc}</p>
                    <p>Date: {buses.departure_date}</p>
                    <span>Bus Number: {buses.busno}</span>
                    <button type="button">Book Seats</button>
                </div>
            )
        })}
    </div>
  )
}

export default ViewAllBus