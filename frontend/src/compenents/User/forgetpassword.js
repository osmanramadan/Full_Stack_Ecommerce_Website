import React from 'react';
import { Row, Container, Col } from 'react-bootstrap';
import { ToastContainer } from 'react-toastify';
import forgetPasswordHook from '../../hooks/auth/forgetPasswordHook';
import {
  NotificationContainer,
  NotificationManager,
} from 'react-notifications';

function Forgetpassword() {
  const [OnChangeEmail, email, onSubmit, loading] = forgetPasswordHook();
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
              <span className="text-center opacity-75">نسيت كلمة السر</span>
              <input
                type="text"
                placeholder="الايميل"
                name={''}
                className="inputfield"
                value={email}
                onChange={OnChangeEmail}
              />
              <button onClick={onSubmit} className="btn-login mt-3 mx-2">
                ارسال الكود
              </button>
              <ToastContainer />
            </div>
          </Col>
        </Row>
        <NotificationContainer />
      </Container>
    </div>
  );
}

export default Forgetpassword;
