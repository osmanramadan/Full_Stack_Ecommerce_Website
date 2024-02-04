import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Caption({ title, target }) {
  return (
    <Row className="d-flex flex-row-reverse mt-4">
      <Col xs={target ? 6 : 12} className="text-end">
        <h3 className="fw-semibold  opacity-100">{title}</h3>
      </Col>
      <Col xs="6">
        {target ? (
          <Link to={'/' + target}>
            <Button className="btn-caption">المزيد</Button>
          </Link>
        ) : (
          ''
        )}
      </Col>
    </Row>
  );
}

export default Caption;
