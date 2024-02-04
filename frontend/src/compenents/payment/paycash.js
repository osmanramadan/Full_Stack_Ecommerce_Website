import React, { useEffect, useState } from 'react';
import CartHook from '../../hooks/cart/cartHook';
import { Col, Container, Row } from 'react-bootstrap';
import Cartitem from '../Cart/cart-utility/cartitem';
import Useraddress from '../User/user-utility/useraddress';
import PayCashHook from '../../hooks/payment/payCashHook';
import { useLocation, useNavigate } from 'react-router-dom';

function PayCash() {
  const location = useLocation();
  const nav = useNavigate();
  const [onSubmit, setAddress, setUserInfo, userinfo, setItems, setPrice] =
    PayCashHook();
  let price = 0;
  let addr;

  try {
    price = location.state.price;
    addr = location.state.addr;
  } catch (e) {
    nav('/');
    return;
  }

  const [cart, _addToCart, _removeFromCart, _cartTotal] = CartHook();

  useEffect(() => {
    setAddress(addr);
  }, [addr]);

  useEffect(() => {
    setPrice(price);
  }, [price]);

  useEffect(() => {
    let itemsID = [];
    cart.length > 0 &&
      cart.map((v, _i) => {
        itemsID.push([v.id, v.qut, `${v.colors}`]);
      });
    setItems(itemsID);
    if (localStorage.getItem('user') !== null) {
      var user = JSON.parse(localStorage.getItem('user'));
    }
    setUserInfo(user);
  }, []);

  return (
    <div className="paymethod">
      <Container>
        {cart.length > 0 &&
          cart.map((v, _i) => {
            return <Cartitem item={v} />;
          })}

        {addr && (
          <Col xs={12} sm={10} md={8} lg={5}>
            <Useraddress address={addr} />
          </Col>
        )}

        <Row className="mx-1">
          <Col
            xs={12}
            sm={10}
            md={8}
            lg={5}
            style={{ backgroundColor: 'white' }}
          >
            <div className="mb-2">
              الاسم:<span className="opacity-75 mx-2">{userinfo.username}</span>
            </div>
            <div className="mb-2">
              رقم الهاتف:
              <span className="opacity-75  mx-2">{userinfo.phone}</span>
            </div>
            <div className="mb-2">
              الايميل:<span className="opacity-75  mx-2">{userinfo.email}</span>
            </div>
          </Col>
          <Row />

          <div className="form-control form-control-price text-center mt-3 ">
            <span className="fs-7 fw-medium"> {price}</span> <span>جنية</span>
          </div>

          <button
            className="form-control form-control-price mt-3  my-0"
            style={{
              backgroundColor: '#272727',
              color: 'white',
              fontWeight: 'bold',
            }}
            onClick={onSubmit}
          >
            اتمام الدفع
          </button>
        </Row>
      </Container>
    </div>
  );
}

export default PayCash;
