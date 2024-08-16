import React from 'react';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';
import './UserProfile.css'; // Import the CSS file for styling

// Sample user data
const user = {
  name: 'John Doe',
  email: 'john.doe@example.com',
  role: 'Administrator',
  bio: 'Enthusiastic web developer with a passion for creating interactive applications.',
  skills: ['React', 'JavaScript', 'CSS', 'Bootstrap', 'Node.js'],
};

const UserProfile = () => {
  return (
    <Container className="my-4">
      <Row>
        <Col md={4}>
          <Card className="profile-card">
            <Card.Body>
              <Card.Title>{user.name}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{user.role}</Card.Subtitle>
              <Card.Text>{user.bio}</Card.Text>
              <Card.Text>Email: {user.email}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={8}>
          <Card className="profile-card">
            <Card.Body>
              <Card.Title>Skills</Card.Title>
              <ListGroup variant="flush">
                {user.skills.map((skill, index) => (
                  <ListGroup.Item key={index} className="profile-skill">{skill}</ListGroup.Item>
                ))}
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default UserProfile;

