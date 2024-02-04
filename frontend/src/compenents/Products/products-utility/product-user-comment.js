import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Col, Row } from 'react-bootstrap';

function Productusercomment({ username, stars, comment }) {
  return (
    <div style={{ height: '70px' }} className="border-bottom">
      <Row className="mx-4 my-2  d-flex align-items-center">
        <Col xs="auto">
          <span className="fs-5 opacity-78">{username}</span>
        </Col>
        <Col>
          <span style={{ color: '#F6B805' }}>
            <FontAwesomeIcon icon={faStar} /> {stars}{' '}
          </span>
        </Col>
        <Col xs="12">
          <div className="fw-100 "> {comment}</div>
        </Col>
      </Row>
    </div>
  );
}

export default Productusercomment;
