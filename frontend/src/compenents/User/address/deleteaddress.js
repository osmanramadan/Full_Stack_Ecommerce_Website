import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import Usertabs from '../user-utility/usertabs';
import Header from '../user-utility/header';
import Textarea from '../../Utility/Textarea';
import deleteHook from '../../../hooks/address/deleteAddressHook';

function deleteAddress() {
  const [title, detalis, phone, onSubmit] = deleteHook();

  const handleDelete = () => {
    onSubmit();
    localStorage.removeItem('address');
  };

  return (
    <div style={{ marginTop: '105px', direction: 'rtl', height: '100vh' }}>
      <Container>
        <Row>
          <Col xs="4" sm="2" md="3" lg="2">
            <Usertabs />
          </Col>

          <Col xs="8" sm="10" md="9" lg="10">
            <Header txt="حذف العنوان" />
            <Row className="mt-4">
              <Col xs="10" sm="8" md="7">
                <input
                  className="inputfield mt-0"
                  style={{ width: '100%' }}
                  type="text"
                  defaultValue={title}
                  placeholder="تسمية العنوان (المنزل,العمل)"
                  readOnly
                />
              </Col>

              <Col xs="10" sm="8" md="7">
                <Textarea
                  rows="3"
                  txt="العنوان بالتفصيل"
                  center="yes"
                  defaultValue={detalis}
                  readonly
                />

                <input
                  className="inputfield mt-1"
                  style={{ width: '100%' }}
                  type="text"
                  placeholder="رقم الهاتف"
                  defaultValue={phone}
                  readOnly
                />

                <Row className="d-flex  justify-content-end">
                  <input
                    type="button"
                    className="element-button-custom mx-1"
                    value="تاكيد حذف العنوان"
                    onClick={handleDelete}
                  />
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default deleteAddress;
