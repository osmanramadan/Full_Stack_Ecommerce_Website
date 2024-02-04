import React, { useState } from 'react';
import { Row, Container, Col, Button, Spinner } from 'react-bootstrap';
import RegisterHook from '../../hooks/auth/registerHook';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

function Register() {
  const [
    username,
    email,
    phone,
    password,
    confirmPassword,
    loading,
    onChangeUsername,
    onChangeEmail,
    onChangePhone,
    onChangePassword,
    onChangeConfirmPassword,
    OnSubmit,
  ] = RegisterHook();

  const [showPassword, setShowPassword] = useState(true);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="Registerpage">
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
              <span className="text-center opacity-75">تسجيل حساب جديد</span>
              <input
                type="text"
                placeholder="اسم المستخدم"
                name="username"
                value={username}
                onChange={onChangeUsername}
                className="inputfield"
              />
              <input
                type="text"
                name="email"
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

              <div className="inputfield input-wrapper">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder=" تاكيد كلمة السر"
                  value={confirmPassword}
                  onChange={onChangeConfirmPassword}
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

              <input
                type="text"
                placeholder="التلفون"
                name="phone"
                value={phone}
                onChange={onChangePhone}
                className="inputfield"
              />

              <button onClick={OnSubmit} className="btn-login mt-3 mx-2">
                تسجيل الحساب
              </button>

              <div className="text-center mt-4 login-switch">
                لديك حساب بالفعل؟
                <Link to="/login" className="link" style={{ color: 'red' }}>
                  {' '}
                  اضغط هنا{' '}
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Register;
