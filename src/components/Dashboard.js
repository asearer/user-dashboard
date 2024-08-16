import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Sidebar from './Sidebar';
import Statistics from './Statistics';
import Messages from './Messages';
import Tasks from './Tasks'; // Importing the Tasks component

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Container fluid>
        <Row>
          <Col md={3} className="p-0">
            <Sidebar />
          </Col>
          <Col md={9} className="p-4 dashboard-content">
            <h1>Welcome, User!</h1>
            <Row>
              <Col md={4}>
                <Card className="dashboard-card">
                  <Card.Body>
                    <Card.Title>Statistics</Card.Title>
                    <Statistics /> {/* Rendering the Statistics component */}
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card className="dashboard-card">
                  <Card.Body>
                    <Card.Title>Messages</Card.Title>
                    <Messages /> {/* Rendering the Messages component */}
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card className="dashboard-card">
                  <Card.Body>
                    <Card.Title>Tasks</Card.Title>
                    <Tasks /> {/* Rendering the Tasks component */}
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Dashboard;



