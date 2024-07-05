import React from 'react';
import { useLocation } from 'react-router-dom';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

const Bookings = () => {
  const location = useLocation();
  const { bus, noOfSeatsBooked } = location.state;

  const handleDownloadTicket = () => {
    const doc = new jsPDF();
    doc.text('Ticket Details', 20, 20);
    doc.autoTable({
      startY: 30,
      head: [['Name','From', 'To' ,'Bus Type', 'Date', 'Seats', 'Total Price']],
      body: [
        [bus.name,bus.fromLoc, bus.toLoc,bus.typeofbus, bus.departure_date_time, noOfSeatsBooked, bus.cost],
      ],
    });
    doc.save('ticket.pdf');
  };

  return (
    <div>
      <h1>Booking Details</h1>
      <div>
        <p><b>From:</b> {bus.fromLoc}</p>
        <p><b>To:</b> {bus.toLoc}</p>
        <p><b>Date:</b> {bus.departure_date_time}</p>
        <p><b>Seats:</b> {noOfSeatsBooked}</p>
        <p><b>Total Price:</b> &#8377; {bus.cost}</p>
      </div>
      <button onClick={handleDownloadTicket}>Download Ticket as PDF</button>
    </div>
  );
};

export default Bookings;
