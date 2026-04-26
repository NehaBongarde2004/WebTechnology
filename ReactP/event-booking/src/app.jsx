import { useState, useEffect } from "react";
import Home from "./pages/Home";
import Bookings from "./pages/Bookings";


function App() {
  const [page, setPage] = useState("home");
  const [bookings, setBookings] = useState([]);
  const [message, setMessage] = useState(""); 

  // Load from localStorage
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("bookings"));
    if (saved) setBookings(saved);
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("bookings", JSON.stringify(bookings));
  }, [bookings]);

  const addBooking = (event) => {
    const exists = bookings.find((b) => b.id === event.id);
    if (!exists) {
      setBookings([...bookings, event]);
      setMessage("Booking successful!");
    } else {
      setMessage("Already booked!");
    }

    setTimeout(() => setMessage(""), 2000); // auto hide
  };

  const removeBooking = (id) => {
    setBookings(bookings.filter((b) => b.id !== id));
    setMessage("Booking cancelled!");

    setTimeout(() => setMessage(""), 2000);
  };

  return (
    <div>
      <h1>Event Booking App</h1>

      
      {message && <div className="toast">{message}</div>}

      <button onClick={() => setPage("home")}>Home</button>
      <button onClick={() => setPage("bookings")}>My Bookings</button>

      {page === "home" && <Home addBooking={addBooking} />}
      {page === "bookings" && (
        <Bookings bookings={bookings} removeBooking={removeBooking} />
      )}
    </div>
  );
}

export default App;