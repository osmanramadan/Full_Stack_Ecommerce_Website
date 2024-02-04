import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import Usertabs from '../user-utility/usertabs';
import Header from '../user-utility/header';
import Textarea from '../../Utility/Textarea';
import addAddress from '../../../hooks/address/addAddressHook';
function AddAddress() {
  const [
    _title,
    _detalis,
    _phone,
    onChangeTitle,
    onChangeDetalis,
    onChangePhone,
    onSubmit,
  ] = addAddress();
  return (
    <div style={{ marginTop: '105px', direction: 'rtl', height: '100vh' }}>
      <Container>
        <Row>
          <Col xs="4" sm="2" md="3" lg="2">
            <Usertabs />
          </Col>

          <Col xs="8" sm="10" md="9" lg="10">
            <Header txt="اضافة عنوان جديد" />
            <Row className="mt-4">
              <Col xs="10" sm="8" md="7">
                <input
                  className="inputfield mt-0"
                  style={{ width: '100%' }}
                  type="text"
                  placeholder="تسمية العنوان (المنزل,العمل)"
                  onChange={onChangeTitle}
                />
              </Col>

              <Col xs="10" sm="8" md="7">
                <Textarea
                  onChange={onChangeDetalis}
                  rows="3"
                  txt="العنوان بالتفصيل"
                  center="yes"
                />

                <input
                  className="inputfield mt-1"
                  style={{ width: '100%' }}
                  type="text"
                  placeholder="رقم الهاتف"
                  onChange={onChangePhone}
                />

                <Row className="d-flex  justify-content-end">
                  <input
                    type="button"
                    className="element-button-custom mx-1"
                    value="اضافة عنوان"
                    onClick={onSubmit}
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
export default AddAddress;
