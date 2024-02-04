import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import Usertabs from '../user-utility/usertabs';
import Header from '../user-utility/header';
import Textarea from '../../Utility/Textarea';
import updateHook from '../../../hooks/address/updateAddressHook';

function updateAddress() {
  const [
    _id,
    title,
    details,
    phone,
    onChangeTitle,
    onChangeDetalis,
    onChangePhone,
    onSubmit,
  ] = updateHook();

  const handleUpdate = () => {
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
            <Header txt="تعديل العنوان" />
            <Row className="mt-4">
              <Col xs="10" sm="8" md="7">
                <input
                  className="inputfield mt-0"
                  style={{ width: '100%' }}
                  type="text"
                  defaultValue={title}
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
                  defaultValue={details}
                />

                <input
                  className="inputfield mt-1"
                  style={{ width: '100%' }}
                  type="text"
                  placeholder="رقم الهاتف"
                  defaultValue={phone}
                  onChange={onChangePhone}
                />

                <Row className="d-flex  justify-content-end">
                  <input
                    type="button"
                    className="element-button-custom mx-1"
                    value="تعديل عنوان"
                    onClick={handleUpdate}
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
export default updateAddress;
