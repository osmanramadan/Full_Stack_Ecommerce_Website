import React from 'react';
import { Col } from 'react-bootstrap';

function Categoryitem({ data }) {
  return (
    <Col xs="6" sm="4" md="3" lg="2">
      <div className="mb-4 d-flex flex-column align-items-center">
        <div>
          {' '}
          <img
            className="circle"
            src={`data:image/*;base64,${data.imageData}`}
            alt="img"
          />{' '}
        </div>
        <div style={{ fontSize: '22px', fontWeight: '600', opacity: '0.8' }}>
          {data.catname}
        </div>
      </div>
    </Col>
  );
}

export default Categoryitem;
