import React from "react";

function EventInfo({ events }) {
  return (
    <div className="eventinfo-section">
      <h2>Upcoming Events</h2>
      <ul className="event-list">
        {events.map((event, index) => (
          <li key={index} className="event-item">
            <h3>{event.name}</h3>
            <p>Date: {event.date}</p>
            <p>Time: {event.time}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EventInfo;
