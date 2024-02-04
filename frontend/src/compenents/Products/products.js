import React from 'react';
import { Container } from 'react-bootstrap';
import Productbody from './products-utility/productbody';

function Productsview() {
  return (
    <div style={{ marginTop: '130px' }}>
      <Container>
        <div className="Productsviewbody">
          <Productbody />
        </div>
      </Container>
    </div>
  );
}

export default Productsview;
