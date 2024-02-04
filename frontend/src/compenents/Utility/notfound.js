import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import notfound from '../../images/notfound.jpg';

const Notfound = () => {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ marginTop: '130px', backgroundColor: '#F9F9F9' }}
    >
      <Row>
        <Col>
          <h1 className="text-center">404 Not Found</h1>
          <p className="text-center">
            The page you're looking for does not exist.
          </p>
          <img src={notfound} />
        </Col>
      </Row>
    </Container>
  );
};

export default Notfound;
