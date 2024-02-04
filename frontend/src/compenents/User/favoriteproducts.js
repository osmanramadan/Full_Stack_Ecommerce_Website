import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import Usertabs from './user-utility/usertabs';
import Productitems from '../Homepage/Productitems';
import Admintitles from '../Admin/admin-utility/admintitles';

function Favoriteproducts() {
  return (
    <div style={{ marginTop: '105px', direction: 'rtl' }}>
      <Container>
        <Row>
          <Col xs="0" sm="0" md="3" lg="2" className="admin-tabs1">
            <Usertabs />
          </Col>

          <Col xs="12" sm="12" md="9" lg="10">
            <Row className="mt-2 d-flex justify-content-between">
              <Col xs="6">
                <Admintitles txt="قائمة المفضلة" />
              </Col>
              <Col
                xs="6"
                className=" d-flex flex-row align-items-center justify-content-end"
              >
                <div className="admin-tabs2">
                  <Usertabs icon="true" />
                </div>
              </Col>
            </Row>
            <Productitems prodadmin="favourit" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Favoriteproducts;
