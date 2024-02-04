import React, { useState, useEffect } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import Usertabs from '../user-utility/usertabs';
import Header from '../user-utility/header';
import Useraddress from '../user-utility/useraddress';
import { Link } from 'react-router-dom';
import Addresshook from '../../../hooks/address/getAddressHook';

function Addresses() {
  const [data, _loading, addrexist] = Addresshook();
  const [addresses, setAddresses] = useState([]);

  useEffect(() => {
    if (data.length > 0) {
      setAddresses(data);
    }
  }, [data]);

  return (
    <div style={{ marginTop: '105px', direction: 'rtl' }}>
      <Container>
        <Row>
          <Col xs="4" sm="3" md="3" lg="2">
            <Usertabs />
          </Col>
          <Col xs="8" sm="9" md="9" lg="10">
            <Header txt="دفتر العنوانين" />
            <div className="mt-4">
              {addresses.length == 0 && addrexist === true && (
                <Button style={{ backgroundColor: 'white', border: 'white' }}>
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
              )}
              {addrexist === false && <div>لا يوجد عناوين</div>}

              {addresses.length > 0 &&
                addresses.map((address, index) => (
                  <Useraddress key={index} address={address} />
                ))}
            </div>
            <Link className="link" to="/user/addAddress">
              <div className="d-flex flex-row justify-content-center align-items-center mt-1">
                <button className="element-button-custom">
                  اضافة عنوان جديد
                </button>
              </div>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Addresses;
