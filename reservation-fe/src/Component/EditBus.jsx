import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const EditBus = () => {
    let [name,setName]=useState("");
    let [departure_date,setDate]= useState("")
    let [busno,setBusno]=useState("")
    let [fromLoc, setFrom]=useState("")
    let [toLoc,setTo]=useState("")
    let [noOfSeats,setNoOfSeats]=useState("")
    
    let BusData={name,departure_date,fromLoc,toLoc,noOfSeats,busno}
    
    let params=useParams()
    
    useEffect(()=>{
        axios.get(`http://localhost:8088/api/bus/${params.id}`)
        .then((res)=>{
            console.log(res.data.data);
            setName(res.data.data.name)
            setDate(res.data.data.departure_date)
            setBusno(res.data.data.busno)
            setFrom(res.data.data.fromLoc)
            setTo(res.data.data.setTo)
            setNoOfSeats(res.data.data.noOfSeats)
        })
        .catch((err)=>{
            console.log(err);
        })
    })
    function editBus(e){
        e.preventDefault();
        axios.put(`http://localhost:8088/api/bus/${params.id}`,BusData)
        .then((res)=>{
            console.log(res);
            alert("Bus Details Updated Successfully");
        })
        .catch((err)=>{alert("Error Failed to Add !")})
    }
  return (
    <div className='editbus'onSubmit={editBus}>
        <form action="">
                <label htmlFor="">Bus Name: </label>
                <input type="text" name="" id="" placeholder='Enter Bus Name' value={name} onChange={(e)=>{setName(e.target.value)}} required/>
                <label htmlFor="">From : </label>
                <input type="text" name="" id="" placeholder='From Location' value={fromLoc} onChange={(e)=>{setFrom(e.target.value)}}required/>
                <label htmlFor="">To: </label>
                <input type="text" name="" id="" placeholder='To Location' value={toLoc} onChange={(e)=>{setTo(e.target.value)}} required/>
                <label htmlFor="">Date Of Deprature: </label>
                <input type="date" name="" id="" placeholder='Enter Date of Deprature' value={departure_date} onChange={(e)=>{setDate(e.target.value)}} required />
                <label htmlFor="">Number of Seats: </label>
                <input type="number" name="" id="" placeholder='Enter Bus Seats' value={noOfSeats} onChange={(e)=>{setNoOfSeats(e.target.value)}} required />
                <label htmlFor="">Bus Number: </label>
                <input type="text" name="" id="" placeholder='Enter Bus Number' value={busno} onChange={(e)=>{setBusno(e.target.value)}} required />
                <input type="submit" value="Update" />
        </form>
        </div>
  )
}

export default EditBus