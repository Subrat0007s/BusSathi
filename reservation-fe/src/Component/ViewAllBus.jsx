import axios from 'axios';
import React, { useEffect, useState } from 'react'
import "../Style/viewbus.css"
import { useNavigate } from 'react-router-dom';
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
    let navigate=useNavigate()
    let e=JSON.parse(localStorage.getItem("Admin"));
    function removeBus(id){
        axios.delete(`http://localhost:8088/api/bus/${e.id}/${id}`)
    }
    function editBus(id){
        navigate(`/adminhomepage/editbus/${id}`)
    }
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
                    <button type="button" className='btn btn-warning' onClick={(e)=>{editBus(buses.id)}}>Edit</button>
                    <button className='btn btn-danger' onClick={() => { removeBus(buses.id,buses.busno); }}>Delete</button>
                </div>
            )
        })}
    </div>
  )
}

export default ViewAllBus