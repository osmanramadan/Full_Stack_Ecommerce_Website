import React from 'react';
import { Col } from 'react-bootstrap';

function Branditem({ image }) {
  return (
    <Col xs="6" sm="4" md="4" lg="2">
      <div style={{ height: '150px' }}>
        <img
          style={{ width: '100%', height: '100%' }}
          alt="brand"
          src={image}
          className="circle"
        />
      </div>
    </Col>
  );
}

export default Branditem;
