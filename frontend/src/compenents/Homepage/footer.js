import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

function Footer() {
  return (
    <div className="footer" style={{ marginTop: '200px' }}>
      <Container>
        <Row>
          <Col
            xs="12"
            sm="12"
            md="6"
            lg="6"
            className="d-flex align-items-center"
            style={{ height: '50px' }}
          >
            <div className="footer-cols">
              <a className="link-reset mx-1" href="/">
                الشروط والاحكام{' '}
              </a>
              <a className="link-reset mx-1" href="/">
                {' '}
                سياسه الخصوصيه{' '}
              </a>
              <a className="link-reset mx-1" href="/">
                {' '}
                اتصل بنا{' '}
              </a>
            </div>
          </Col>

          <Col
            xs="12"
            sm="12"
            md="6"
            lg="6"
            className="d-flex justify-content-end align-items-center"
            style={{ height: '50px' }}
          >
            <div>
              <span
                style={{
                  color: '#9C9C9C',
                  marginRight: '8px',
                  fontSize: '13px',
                }}
              >
                01023997886
              </span>
              <span>
                <FontAwesomeIcon
                  icon={faPhone}
                  style={{ color: '#9C9C9C', fontSize: '13px' }}
                />
              </span>
            </div>
            <div style={{ marginRight: '10px' }}>
              <span
                className="mx-1"
                onClick={() => {
                  window.location.href = 'https://www.facebook.com';
                }}
              >
                <FontAwesomeIcon
                  icon={faFacebookF}
                  style={{ color: '#9C9C9C' }}
                />
              </span>
              <span
                className="mx-1"
                onClick={() => {
                  window.location.href = 'https://www.instagram.com';
                }}
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  style={{ color: '#9C9C9C' }}
                />
              </span>
              <span
                className="mx-1"
                onClick={() => {
                  window.location.href = 'https://www.twitter.com';
                }}
              >
                <FontAwesomeIcon
                  icon={faTwitter}
                  style={{ color: '#9C9C9C' }}
                />
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
