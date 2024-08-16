import React from 'react';
import { ListGroup, Badge } from 'react-bootstrap';

// Sample messages data with statuses
const messages = [
  { id: 1, sender: 'John Doe', text: 'Hey, how are you?', status: 'Sent' },
  { id: 2, sender: 'Jane Smith', text: 'Don’t forget about the meeting.', status: 'Read' },
  { id: 3, sender: 'Alice Johnson', text: 'Can you send me the report?', status: 'Replied' },
  { id: 4, sender: 'Bob Brown', text: 'Lunch tomorrow?', status: 'Received' },
  { id: 5, sender: 'Charlie Black', text: 'Great job on the presentation!', status: 'Undelivered' },
  // Add more messages as needed
];

const Messages = () => {
  return (
    <ListGroup variant="flush">
      {messages.map((message) => (
        <ListGroup.Item key={message.id} className="d-flex justify-content-between align-items-center">
          <div>
            <strong>{message.sender}:</strong> {message.text}
          </div>
          <Badge bg={getBadgeColor(message.status)}>{message.status}</Badge>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

// Function to determine badge color based on message status
const getBadgeColor = (status) => {
  switch (status) {
    case 'Sent':
      return 'info';
    case 'Read':
      return 'success';
    case 'Replied':
      return 'primary';
    case 'Received':
      return 'warning';
    case 'Undelivered':
      return 'danger';
    default:
      return 'secondary';
  }
};

export default Messages;

