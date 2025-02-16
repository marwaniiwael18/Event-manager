import React, { useState, useEffect } from "react";
import { Row, Col, Alert, Button } from "react-bootstrap";
import Event from "./Event";
import concertImg from "../assets/concert.jpg";
import techImg from "../assets/tech.jpg";
import medinaImg from "../assets/medina.jpg";

const Events = () => {
  const [events, setEvents] = useState([]);
  const [welcomeMessage, setWelcomeMessage] = useState("");
  const [bookingMessage, setBookingMessage] = useState("");

  useEffect(() => {
    // Simulating fetching data from a JSON file
    const fetchedEvents = [
      {
        id: 1,
        name: "Music Concert",
        description: "Live music event in the city",
        img: concertImg,
        price: 50,
        nbTickets: 10,
        nbParticipants: 0,
        like: false
      },
      {
        id: 2,
        name: "Tech Conference",
        description: "A gathering of tech enthusiasts",
        img: techImg,
        price: 100,
        nbTickets: 5,
        nbParticipants: 2,
        like: false
      },
      {
        id: 3,
        name: "Festival de la medina de Tunis",
        description: "Cultural festival in Tunis",
        img: medinaImg,
        price: 15,
        nbTickets: 0,
        nbParticipants: 34,
        like: false
      }
    ];

    setEvents(fetchedEvents);

    // Show welcome message for 3 seconds
    setWelcomeMessage("Hey, welcome to Esprit Events!");
    setTimeout(() => setWelcomeMessage(""), 3000);
  }, []);

  // Function to book an event
  const handleBook = (id) => {
    setEvents(events.map(event =>
      event.id === id && event.nbTickets > 0
        ? { ...event, nbTickets: event.nbTickets - 1, nbParticipants: event.nbParticipants + 1 }
        : event
    ));
    setBookingMessage("You have booked an event!");
    setTimeout(() => setBookingMessage(""), 2000);
  };

  // Function to toggle like/dislike
  const handleLike = (id) => {
    setEvents(events.map(event =>
      event.id === id ? { ...event, like: !event.like } : event
    ));
  };

  return (
    <div>
      {/* Welcome Message */}
      {welcomeMessage && <Alert variant="success">{welcomeMessage}</Alert>}

      {/* Booking Confirmation Message */}
      {bookingMessage && <Alert variant="info">{bookingMessage}</Alert>}
      
      <h2>Welcome to Esprit Events</h2>
      <Row>
        {events.map(event => (
          <Col key={event.id} md={4}>
            <Event event={event} onBook={handleBook} onLike={handleLike} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Events;