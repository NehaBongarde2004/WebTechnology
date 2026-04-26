function EventCard({ event, addBooking }) {
  return (
    <div className="card">
      <h3>{event.title}</h3>
      <p>Date: {event.date}</p>
      <p>Price: ₹{event.price}</p>
      <button onClick={() => addBooking(event)}>Book</button>
    </div>
  );
}

export default EventCard;