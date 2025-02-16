import React from "react";
import { Card, Button } from "react-bootstrap";

const Event = ({ event, onBook, onLike }) => {
  return (
    <Card style={{ width: "18rem", margin: "10px" }}>
      <Card.Img 
        variant="top" 
        src={event.img || "placeholder.jpg"} 
        style={{ height: "200px", objectFit: "cover" }} 
      />
      <Card.Body>
        <Card.Title>{event.name}</Card.Title>
        <Card.Text>{event.description}</Card.Text>
        <Card.Text><strong>Price:</strong> ${event.price}</Card.Text>
        <Card.Text><strong>Tickets Left:</strong> {event.nbTickets}</Card.Text>
        <Card.Text><strong>Participants:</strong> {event.nbParticipants}</Card.Text>

        <Button 
          variant="primary" 
          onClick={() => onBook(event.id)} 
          disabled={event.nbTickets === 0}
        >
          {event.nbTickets > 0 ? "Book an Event" : "Sold Out"}
        </Button>

        <Button 
          variant={event.like ? "danger" : "success"} 
          style={{ marginLeft: "10px" }} 
          onClick={() => onLike(event.id)}
        >
          {event.like ? "Dislike" : "Like"}
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Event;