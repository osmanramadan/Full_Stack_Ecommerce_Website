import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import Admintabs from './admin-utility/admintabs';
import Productitems from '../Homepage/Productitems';
import Admintitles from './admin-utility/admintitles';

function Allproducts() {
  return (
    <div style={{ marginTop: '105px', direction: 'rtl' }}>
      <Container>
        <Row>
          <Col xs="0" sm="0" md="3" lg="2" className="admin-tabs1">
            <Admintabs />
          </Col>

          <Col xs="12" sm="12" md="9" lg="10">
            <Row className="mt-2 d-flex justify-content-between">
              <Col xs="6">
                <Admintitles txt="ادارة جميع المنتجات" />
              </Col>
              <Col
                xs="6"
                className=" d-flex flex-row align-items-center justify-content-end"
              >
                <div className="admin-tabs2">
                  <Admintabs icon="true" />
                </div>
              </Col>
            </Row>
            <Productitems prodadmin={true} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Allproducts;
