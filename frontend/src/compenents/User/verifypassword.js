import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {
  NotificationContainer,
  NotificationManager,
} from 'react-notifications';
import VerifyPasswordHook from '../../hooks/auth/verifyPasswordHook';

const Verifypassword = () => {
  const [code, OnChangeCode, onSubmit, loading] = VerifyPasswordHook();

  return (
    <div className="Loginpage">
      <Container>
        <Row className="d-flex justify-content-center">
          <Col xs="12" sm="7" md="7" lg="4">
            <div className="login-register d-flex flex-column">
              {loading == false ? (
                <span className="circle-progress m-auto"></span>
              ) : (
                ''
              )}
              <span className="text-center opacity-75">ادخل الكود المرسل</span>
              <input
                type="text"
                placeholder="الكود"
                name={''}
                className="inputfield"
                value={code}
                onChange={OnChangeCode}
              />
              <button onClick={onSubmit} className="btn-login mt-3 mx-2">
                ارسال الكود
              </button>
            </div>
          </Col>
        </Row>
        <NotificationContainer />
      </Container>
    </div>
  );
};
export default Verifypassword;
