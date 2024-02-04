import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {
  NotificationContainer,
  NotificationManager,
} from 'react-notifications';
import ResetPasswordHook from '../../hooks/auth/resetPasswordHook';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const Resetpassword = () => {
  const [showPassword, setShowPassword] = useState(true);
  const [showpasswordConfirm, setShowpasswordConfirm] = useState(true);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const togglePasswordConfirmVisibility = () => {
    setShowpasswordConfirm(!showpasswordConfirm);
  };

  const [
    password,
    OnChangePassword,
    passwordConfirm,
    OnChangePasswordConfirm,
    onSubmit,
    loading,
  ] = ResetPasswordHook();
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
              <span className="text-center opacity-75">
                ادخل كلمه السر الجديده
              </span>
              <div className="inputfield input-wrapper">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="ادخل كلمة السر الجديدة"
                  value={password}
                  onChange={OnChangePassword}
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
                  type={showpasswordConfirm ? 'text' : 'password'}
                  placeholder="تاكيد كلمة السر الجديدة"
                  value={passwordConfirm}
                  onChange={OnChangePasswordConfirm}
                  className="inputfield-password"
                />
                <span
                  className="password-toggle-icon"
                  onClick={togglePasswordConfirmVisibility}
                >
                  {showpasswordConfirm ? (
                    <FontAwesomeIcon icon={faEye} />
                  ) : (
                    <FontAwesomeIcon icon={faEyeSlash} />
                  )}
                </span>
              </div>
              <button onClick={onSubmit} className="btn-login mt-3 mx-2">
                حفظ
              </button>
            </div>
          </Col>
        </Row>
        <NotificationContainer />
      </Container>
    </div>
  );
};
export default Resetpassword;
