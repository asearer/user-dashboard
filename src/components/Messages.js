import React from 'react';
import { ListGroup } from 'react-bootstrap';
import './Messages.css'; // Add custom styles if needed

const Messages = () => {
  const messages = [
    { id: 1, sender: 'John Doe', text: 'Hey, how are you?' },
    { id: 2, sender: 'Jane Smith', text: 'Don’t forget about the meeting.' },
    { id: 3, sender: 'Alice Johnson', text: 'Can you send me the report?' },
    { id: 4, sender: 'Bob Brown', text: 'Lunch tomorrow?' },
    { id: 5, sender: 'Charlie Black', text: 'Great job on the presentation!' },
  ];

  return (
    <ListGroup variant="flush" className="messages-list">
      {messages.map((message) => (
        <ListGroup.Item key={message.id} className="message-item">
          <strong>{message.sender}:</strong> {message.text}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default Messages;


