import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import addCouponHook from '../../hooks/coupon/addCouponHook';
import getCouponsHook from '../../hooks/coupon/getCouponsHook';
import CouponCard from './admin-utility/couponcard';
import Admintabs from './admin-utility/admintabs';
import Admintitles from './admin-utility/admintitles';

const AddCoupon = () => {
  const [
    onSubmit,
    _loading,
    onChangeDiscount,
    discount,
    onChangeExpire,
    expire,
    onChangeName,
    name,
  ] = addCouponHook();

  const [data, dataExist, loading] = getCouponsHook();
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
                <Admintitles txt="اضف كود خصم" />
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
                  onChange={onChangeName}
                  value={name}
                />
              </Col>
              <Col xs="8">
                <input
                  className="inputfield-start mt-3"
                  style={{ width: '100%' }}
                  type="number"
                  placeholder="نسبة خصم الكوبون"
                  onChange={onChangeDiscount}
                  name={discount}
                />
              </Col>
              <Col xs="8">
                <input
                  className="inputfield-start mt-3"
                  style={{ width: '100%' }}
                  type="date"
                  placeholder="تاريخ الانتهاء"
                  onChange={onChangeExpire}
                  name={expire}
                />
              </Col>
              <Col xs="8" className="text-start p-0">
                <button
                  style={{ width: '140px' }}
                  className="element-button-custom"
                  onClick={onSubmit}
                >
                  {' '}
                  اضافه الكوبون
                </button>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <div>
            {data.length > 0 &&
              data.map((item, i) => {
                return <CouponCard key={i} item={item} />;
              })}
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default AddCoupon;
