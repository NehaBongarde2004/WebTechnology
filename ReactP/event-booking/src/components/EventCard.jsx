function EventCard({ event, addBooking }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "10px",
        padding: "15px",
        width: "220px",
        margin: "10px",
        textAlign: "center"
      }}
    >
      <h3>{event.title}</h3>
      <p>Date: {event.date}</p>
      <p>Price: ₹{event.price}</p>

      <button
        onClick={() => addBooking(event)}
        style={{
          padding: "6px 10px",
          background: "green",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer"
        }}
      >
        Book
      </button>
    </div>
  );
}

export default EventCard;