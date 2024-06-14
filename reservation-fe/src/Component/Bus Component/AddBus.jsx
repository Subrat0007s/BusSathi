import axios from 'axios';
import React, { useState } from 'react'

function AddBus() {
    let [name, setName] = useState("");
    let [departure_date_time, setDate] = useState("")
    let [busno, setBusno] = useState("")
    let [fromLoc, setFrom] = useState("")
    let [toLoc, setTo] = useState("")
    let [noOfSeats, setNoOfSeats] = useState("")
    let [cost,setCost]=useState("")
    let BusData = {
        name, departure_date_time, fromLoc, toLoc, noOfSeats, busno,cost
    }
    let admin = JSON.parse(localStorage.getItem("Admin"))
    console.log(admin);
    console.log(typeof (admin));
    function addBus(e) {
        e.preventDefault();
        axios.post(`http://localhost:8088/api/bus/${admin.id}`, BusData)
            .then((res) => {
                console.log(res);
                alert("Bus Added Successfully");
            })
            .catch((err) => { alert("Error Failed to Add !") })
    }
    return (
        <div className='addBus'>
            <form action="" onSubmit={addBus}>
                <label htmlFor="">Bus Name: </label>
                <input type="text" name="" id="" placeholder='Enter Bus Name' value={name} onChange={(e) => { setName(e.target.value) }} />
                <label htmlFor="">From : </label>
                <input type="text" name="" id="" placeholder='From Location' value={fromLoc} onChange={(e) => { setFrom(e.target.value) }} />
                <label htmlFor="">To: </label>
                <input type="text" name="" id="" placeholder='To Location' value={toLoc} onChange={(e) => { setTo(e.target.value) }} />
                <label htmlFor="">Deprature Date & Time : </label>
                <input type="datetime-local" name="" id="" placeholder='Enter Date of Deprature' value={departure_date_time} onChange={(e) => { setDate(e.target.value) }} />
                <label htmlFor="">Number of Seats: </label>
                <input type="number" name="" id="" placeholder='Enter Bus Seats' value={noOfSeats} onChange={(e) => { setNoOfSeats(e.target.value) }} />
                <label htmlFor="">Bus Number: </label>
                <input type="text" name="" id="" placeholder='Enter Bus Number' value={busno} onChange={(e) => { setBusno(e.target.value) }} />
                <label htmlFor="">Price</label>
                <input type="tel" name="" id="" placeholder='Enter Price per Ticket' value={cost} onChange={(e)=>{setCost(e.target.value)}}/>
                <input type="submit" value="Add" />
            </form>
        </div>
    )
}

export default AddBus
