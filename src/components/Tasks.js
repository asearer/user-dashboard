import React from 'react';
import { ListGroup, ListGroupItem, Badge } from 'react-bootstrap';

const tasks = [
  { id: 1, title: 'Complete project report', status: 'Pending' },
  { id: 2, title: 'Update website', status: 'In Progress' },
  { id: 3, title: 'Prepare for team meeting', status: 'Completed' },
  // Add more tasks as needed
];

const Tasks = () => {
  return (
    <div>
      <h5>Your Tasks</h5>
      <ListGroup>
        {tasks.map((task) => (
          <ListGroupItem key={task.id} className="d-flex justify-content-between align-items-center">
            {task.title}
            <Badge bg={getBadgeColor(task.status)}>{task.status}</Badge>
          </ListGroupItem>
        ))}
      </ListGroup>
    </div>
  );
};

// Function to determine badge color based on task status
const getBadgeColor = (status) => {
  switch (status) {
    case 'Completed':
      return 'success';
    case 'In Progress':
      return 'warning';
    case 'Pending':
      return 'danger';
    default:
      return 'secondary';
  }
};

export default Tasks;
