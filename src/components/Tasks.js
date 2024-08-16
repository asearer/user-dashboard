import React from 'react';
import { ListGroup } from 'react-bootstrap';
import './Tasks.css'; // Add custom styles if needed

const Tasks = () => {
  const tasks = [
    { id: 1, title: 'Finish report', status: 'pending' },
    { id: 2, title: 'Call John', status: 'completed' },
    { id: 3, title: 'Email Alice', status: 'in-progress' },
  ];

  return (
    <ListGroup variant="flush" className="tasks-list">
      {tasks.map((task) => (
        <ListGroup.Item key={task.id} className={`task-item ${task.status}`}>
          <strong>{task.title}</strong>
          <span className={`status-tag ${task.status}`}>
            {task.status}
          </span>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default Tasks;

