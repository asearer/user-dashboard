import React from 'react';
import { Container, Row, Col, Card, ListGroup, Image } from 'react-bootstrap';
import './UserProfile.css'; 

// Sample user data
const user = {
  name: 'John Doe',
  email: 'john.doe@example.com',
  role: 'Administrator',
  bio: 'Enthusiastic web developer with a passion for creating interactive applications.',
  skills: ['React', 'JavaScript', 'CSS', 'Bootstrap', 'Node.js'],
  profilePicture: 'https://img.freepik.com/free-vector/illustration-businessman_53876-5856.jpg?t=st=1723984080~exp=1723987680~hmac=98ce85155432999d94304aab0c71f74c4006bb21158b4793c7823b1e1463e467&w=740', // Placeholder image URL
};

const UserProfile = () => {
  return (
    <Container className="my-4">
      <Row>
        <Col md={4}>
          <Card className="profile-card">
            <Card.Body className="d-flex align-items-center">
              <Image 
                src={user.profilePicture} 
                roundedCircle 
                className="me-3 profile-picture"
                alt={`${user.name}'s profile`} 
              />
              <div>
                <Card.Title>{user.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{user.role}</Card.Subtitle>
                <Card.Text>{user.bio}</Card.Text>
                <Card.Text>Email: {user.email}</Card.Text>
              </div>
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


