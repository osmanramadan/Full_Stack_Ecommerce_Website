import React, { useState } from 'react';
import { Row, Container, Col, Spinner, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import LoginHook from '../../hooks/auth/loginHook';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

function Login() {
  const [showPassword, setShowPassword] = useState(true);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const [email, password, loading, onChangeEmail, onChangePassword, onSubmit] =
    LoginHook();

  return (
    <div className="Loginpage">
      <Container>
        <Row className="d-flex justify-content-center">
          <Col xs="12" sm="7" md="7" lg="4">
            <div className="login-register d-flex flex-column">
              {loading == false ? (
                <Button
                  style={{ backgroundColor: '#F9F9F9', border: '#F9F9F9' }}
                >
                  <Spinner
                    style={{ color: 'black' }}
                    as="span"
                    animation="grow"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                  />
                  ' '
                  <Spinner
                    style={{ color: 'black' }}
                    as="span"
                    animation="grow"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                  />
                  ' '
                  <Spinner
                    style={{ color: 'black' }}
                    as="span"
                    animation="grow"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                  />
                </Button>
              ) : (
                ''
              )}
              <span className="text-center opacity-75">تسجيل الدخول</span>

              <input
                type="text"
                placeholder="الايميل"
                value={email}
                onChange={onChangeEmail}
                className="inputfield"
              />

              <div className="inputfield input-wrapper">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="كلمة السر"
                  value={password}
                  onChange={onChangePassword}
                  className="inputfield-password"
                />
                <span
                  className="password-toggle-icon"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? (
                    <FontAwesomeIcon icon={faEye} />
                  ) : (
                    <FontAwesomeIcon icon={faEyeSlash} />
                  )}
                </span>
              </div>

              <button onClick={onSubmit} className="btn-login mt-3 mx-2">
                تسجيل الدخول
              </button>
              <div className="text-center mt-5 login-switch">
                ليس لديك حساب ؟
                <Link
                  to="/register"
                  className="link"
                  style={{ color: '#ed1d0e' }}
                >
                  {' '}
                  اضغط هنا{' '}
                </Link>
              </div>
            </div>
          </Col>

          <Row className="login-switch opacity-75 d-flex justify-content-center mt-3">
            <Col xs="auto" style={{ color: 'red' }}>
              <Link to="/user/forgetpassword" className="link">
                هل نسيت كلمه السر
              </Link>
            </Col>
          </Row>
        </Row>
      </Container>
    </div>
  );
}

export default Login;
