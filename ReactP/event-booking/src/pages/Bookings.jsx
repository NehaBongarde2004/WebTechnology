function Bookings({ bookings, removeBooking }) {
  return (
    <div>
      <h2>My Bookings</h2>

      {bookings.length === 0 ? (
        <p>No bookings yet</p>
      ) : (
        bookings.map((event) => (
          <div key={event.id} className="card">
            <h3>{event.title}</h3>
            <p>{event.date}</p>
            <button onClick={() => removeBooking(event.id)}>
                Cancel
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default Bookings;