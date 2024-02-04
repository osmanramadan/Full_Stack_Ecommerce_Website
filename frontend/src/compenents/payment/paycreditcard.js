import React, { useState } from 'react';
import 'react-credit-cards/es/styles-compiled.css';
import Card from 'react-credit-cards';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

function PayCreditCard() {
  const number = '';
  const name = '';
  const expiry = '';
  const cvc = '';
  const issuer = '';
  const focused = '';
  const formData = null;

  return (
    <Container style={{ marginTop: '130px' }}>
      <Row>
        <Form>
          <Form.Group className="mt-3" controlId="exampleForm.ControlInput1">
            <Card
              number={number}
              name={name}
              expiry={expiry}
              cvc={cvc}
              focused={focused}
            />
            <Form className="mt-3">
              <div className="form-group">
                <input
                  type="tel"
                  name="number"
                  className="form-control"
                  placeholder="Card Number"
                  pattern="[\d| ]{16,22}"
                  required
                />
                <small>E.g.: 49..., 51..., 36..., 37...</small>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Name"
                  required
                />
              </div>
              <div className="row mt-3">
                <div className="col-6">
                  <input
                    type="tel"
                    name="expiry"
                    className="form-control"
                    placeholder="Valid Thru"
                    pattern="\d\d/\d\d"
                    required
                  />
                </div>
                <div className="col-6">
                  <input
                    type="tel"
                    name="cvc"
                    className="form-control"
                    placeholder="CVC"
                    pattern="\d{3,4}"
                    required
                  />
                </div>
              </div>
            </Form>
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <input type="hidden" name="issuer" value={issuer} />
            <div className="form-actions mt-3">
              <button className="btn btn-primary btn-block">PAY</button>
            </div>
          </Form.Group>
        </Form>
      </Row>
      <Row>
        <Col xs>
          <Card
            name="John Smith"
            number="4111 1111 1111 1111"
            expiry="10/20"
            cvc="737"
          />
        </Col>
        <Col xs={{ order: 12 }}>
          <Card
            name="John Smith"
            number="5066 9911 1111 1118"
            expiry="10/20"
            cvc="737"
          />
        </Col>
        <Col xs={{ order: 1 }}>
          <Card
            name="John Smith"
            number="3700 0000 0000 002"
            expiry="10/20"
            cvc="737"
          />
        </Col>
      </Row>
    </Container>
  );
}
export default PayCreditCard;
