import React, { useState } from 'react';
import { Row, Container, Col } from 'react-bootstrap';
import Subtile from '../Utility/Subtitle';
import PayHook from '../../hooks/payment/payHook';
import Addressesdropdown from '../User/user-utility/addressesdropdown';
import { useLocation, useNavigate } from 'react-router-dom';

function Paymethod() {
  const location = useLocation();
  const [onSubmit, onChangeMethod, setPrice, addr, onChangeAddr] = PayHook();
  const nav = useNavigate();
  let price = 0;

  try {
    price = location.state.price;
  } catch (e) {
    nav('/');
    return;
  }

  useState(() => {
    setPrice(price);
  }, [price]);

  return (
    <div className="paymethod">
      <Container>
        <span className="opacity-80">
          <Subtile text="اختر طريقة الدفع" />
        </span>
        <div className="paymethod-kinds d-flex flex-column justify-content-evenly">
          <div>
            <input
              className="form-check-input mx-2"
              type="radio"
              name="flexRadio"
              onChange={onChangeMethod}
              id="creditcard"
            />
            <label
              className="form-check-label mx-1 fs-5 fw-lighter"
              htmlFor="flexRadioDefault1"
            >
              الدفع عن طريق البطاقة الائتمانية
            </label>
          </div>
          <div>
            <input
              className="form-check-input mx-2"
              type="radio"
              name="flexRadio"
              id="paycash"
              onChange={onChangeMethod}
              checked
            />
            <label
              className="form-check-label mx-1 fs-5 fw-lighter"
              htmlFor="flexRadioDefault2"
            >
              الدفع عند الاستلام
            </label>
          </div>
          <Row>
            <Col xs={6}>
              <Addressesdropdown addr={addr} changeaddr={onChangeAddr} />
            </Col>
          </Row>
        </div>

        <Row className="mt-3" style={{ direction: 'ltr' }}>
          <Col xs="12">
            <button
              onClick={onSubmit}
              className="element-button fw-semibold mx-0"
            >
              {' '}
              اتمام الدفع
            </button>
            <div
              className="element-price d-inline-flex  mx-2 mt-2"
              style={{
                backgroundColor: 'white',
                height: '47px',
                width: '130px',
              }}
            >
              <span>جنية</span>
              {price}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Paymethod;
