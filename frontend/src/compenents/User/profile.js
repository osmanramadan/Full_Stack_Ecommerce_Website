import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import Usertabs from './user-utility/usertabs';
import Header from './user-utility/header';
import Userprofile from './user-utility/userprofile';

function Profile() {
  return (
    <div style={{ marginTop: '105px', direction: 'rtl', height: '100vh' }}>
      <Container>
        <Row>
          <Col xs="3" sm="3" md="3" lg="2">
            <Usertabs />
          </Col>
          <Col xs="9" sm="9" md="9" lg="10">
            <Header txt="الصفحه الشخصية" />
            <Userprofile />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Profile;
