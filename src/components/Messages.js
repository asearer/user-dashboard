import React from 'react';
import { ListGroup, Badge } from 'react-bootstrap';
import './Messages.css'; // Ensure this path is correct

// Sample messages data with statuses
const messages = [
  { id: 1, sender: 'John Doe', text: 'Hey, how are you?', status: 'Read' },
  { id: 2, sender: 'Jane Smith', text: 'Don’t forget about the meeting.', status: 'Sent' },
  { id: 3, sender: 'Alice Johnson', text: 'Can you send me the report?', status: 'Replied' },
  { id: 4, sender: 'Bob Brown', text: 'Lunch tomorrow?', status: 'Received' },
  { id: 5, sender: 'Charlie Black', text: 'Great job on the presentation!', status: 'Undelivered' },
];

const getStatusColor = (status) => {
  switch (status) {
    case 'Read':
      return 'badge-success';
    case 'Sent':
      return 'badge-primary';
    case 'Replied':
      return 'badge-info';
    case 'Received':
      return 'badge-warning';
    case 'Undelivered':
      return 'badge-danger';
    default:
      return 'badge-secondary';
  }
};

const Messages = () => {
  return (
    <ListGroup className="messages-list" variant="flush">
      {messages.map((message) => (
        <ListGroup.Item key={message.id} className="message-item">
          <div>
            <strong>{message.sender}:</strong> {message.text}
          </div>
          <Badge pill className={`badge ${getStatusColor(message.status)}`}>
            {message.status}
          </Badge>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default Messages;





