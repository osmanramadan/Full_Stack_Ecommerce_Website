import React, { useEffect } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import Admintabs from './admin-utility/admintabs';
import Admintitles from './admin-utility/admintitles';
import { useLocation } from 'react-router-dom';
import updateCouponHook from '../../hooks/coupon/updateCouponHook';

const UpdateCoupon = () => {
  const [
    onSubmit,
    setId,
    loading,
    onChangeDiscount,
    setDiscount,
    discount,
    onChangeExpire,
    setExpire,
    expire,
    onChangeName,
    setName,
    name,
  ] = updateCouponHook();
  const location = useLocation();
  const Data = location.state.Data;

  useEffect(() => {
    setId(Data.id);
    setName(Data.name);
    setDiscount(Data.discount);
    setExpire(Data.expire);
  }, [Data]);

  return (
    <div style={{ marginTop: '105px', direction: 'rtl', height: '100vh' }}>
      <Container>
        <Row>
          <Col xs="0" sm="0" md="3" lg="2" className="admin-tabs1">
            <Admintabs />
          </Col>

          <Col xs="12" sm="12" md="9" lg="10">
            <Row className="mt-2 d-flex justify-content-between">
              <Col xs="6">
                <Admintitles txt="تعديل كود الخصم" />
              </Col>
              <Col
                xs="6"
                className=" d-flex flex-row align-items-center justify-content-end"
              >
                <div className="admin-tabs2">
                  <Admintabs icon="true" />
                </div>
              </Col>
            </Row>

            <Row className="mt-3">
              <Col xs="8">
                <input
                  className="inputfield-start mt-3"
                  style={{ width: '100%' }}
                  type="text"
                  placeholder="اسم الكوبون"
                  value={name}
                  onChange={onChangeName}
                />
              </Col>
              <Col xs="8">
                <input
                  className="inputfield-start mt-3"
                  style={{ width: '100%' }}
                  type="number"
                  placeholder="نسبة خصم الكوبون"
                  value={discount}
                  onChange={onChangeDiscount}
                />
              </Col>
              <Col xs="8">
                <input
                  className="inputfield-start mt-3"
                  style={{ width: '100%' }}
                  type="date"
                  placeholder="تاريخ الانتهاء"
                  value={expire}
                  onChange={onChangeExpire}
                />
              </Col>
              <Col xs="8" className="text-start p-0">
                <button
                  style={{ width: '140px' }}
                  className="element-button-custom"
                  onClick={onSubmit}
                >
                  {' '}
                  حفظ التعديلات
                </button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default UpdateCoupon;
