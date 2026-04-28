import events from "../data/events";
import EventCard from "../components/EventCard";

function Home({ addBooking }) {
  return (
    <div>
      <h2>All Events</h2>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center"
        }}
      >
        {events.map((event) => (
          <EventCard key={event.id} event={event} addBooking={addBooking} />
        ))}
      </div>
    </div>
  );
}

export default Home;