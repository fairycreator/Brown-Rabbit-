import React, { useState, useEffect } from "react";
import Article from "../Article/Article";
import EventInfo from "../EventInfo/EventInfo";
import Scoreboard from "../Scoreboard/Scoreboard";
import Sponsors from "../Sponsors/Sponsors";

function Home() {
  const [loading, setLoading] = useState(true);
  const [error] = useState(null);

  // Sample data
  const articles = [
    {
      title: "Wonderful Copenhagen 2021",
      date: "1st Oct 2021",
      content: "Lorem ipsum...",
      imageUrl: "/path/to/image.jpg",
    },
    // ... more articles
  ];

  const events = [
    {
      name: "Opening Ceremony",
      date: "2nd Oct 2021",
      time: "10:00 AM",
    },
    // ... more events
  ];

  const scoreboard = [
    {
      team: "Team A",
      points: 100,
    },
    {
      team: "Team B",
      points: 90,
    },
    // ... more scores
  ];

  const sponsors = [
    {
      name: "Sponsor A",
      logoUrl: "/path/to/logo.jpg",
    },
    {
      name: "Sponsor B",
      logoUrl: "/path/to/logo2.jpg",
    },
    // ... more sponsors
  ];

  useEffect(() => {
    // here also the data fetch can be implemented, if necessary
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="home">
      <div className="main-content">
        {articles.map((article) => (
          <Article
            key={article.title}
            title={article.title}
            date={article.date}
            content={article.content}
            imageUrl={article.imageUrl}
          />
        ))}
      </div>
      <EventInfo events={events} />
      <Scoreboard scores={scoreboard} />
      <Sponsors sponsors={sponsors} />
    </div>
  );
}

export default Home;
