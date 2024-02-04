import React from 'react';
import { Col, Row } from 'react-bootstrap';
import OrderItem from './orderitem';

function Userorder({ data }) {
  let statusDescription;

  switch (data.order_status) {
    case 'waiting':
      statusDescription = 'قيد التنفيذ';
      break;

    case 'cancle':
      statusDescription = 'تم الغاء الطلب';
      break;
    case 'complete':
      statusDescription = 'تم التوصيل أو فى الطريق';
      break;
    default:
      statusDescription = 'حالة غير معروفة';
  }

  return (
    <div className="user-orders-manage p-2 mb-2">
      <span
        className="mx-2"
        style={{ fontSize: '16px', fontWeight: '600', fontFamily: 'cairo' }}
      >
        طلب رقم #{data.id}
      </span>
      <div className="itemsOforder">
        {data.items.length > 0 &&
          data.items.map((data, i) => <OrderItem key={i} data={data} />)}
      </div>
      <Row>
        <Col xs="6" style={{ fontFamily: 'cairo' }}>
          <span className="mx-1">الحالة</span>
          <span className="opacity-75 mx-1">{statusDescription}</span>
        </Col>
        <Col xs="6" className="text-start fs-6 fw-bold">
          <div
            style={{ color: '#212529', opacity: '0.7', fontFamily: 'cairo' }}
          >
            {data.price} جنية
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Userorder;
