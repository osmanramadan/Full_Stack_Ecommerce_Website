import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function AdminOrderItem({ data }) {
  const history = useNavigate();
  const handleClick = () => {
    history(`/admin/order`, { state: { Data: data } });
  };

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
    <Row className="cart-item-compenent mx-1" onClick={handleClick}>
      <Col xs="3" sm="3" md="2" lg="2" className="mb-4">
        <div className="mt-1 cart-image-container">
          <img
            alt="cartimage"
            className="cart-image"
            src={`data:image/*;base64,${data.items[0][0].imageCoverData}`}
          />
        </div>
      </Col>
      <Col xs="9" sm="9" md="10" lg="10" className="mb-4">
        <div className="d-flex flex-column mx-4">
          <Row className="mt-2 d-flex justify-content-between">
            <Col xs="6" sm="6">
              <h4 className="order-item-header">طلب رقم #{data.id}</h4>
            </Col>
            <Col xs="6" sm="6" className="text-start">
              <div className="order-item-header"></div>
            </Col>
          </Row>

          <Row className="mt-2">
            <p className="details-product-p1 mb-0">{data.items[0][0].pdesc}</p>
          </Row>

          <Row>
            <div>
              <p className="details-product-title mb-2  d-inline-block">
                الماركة :{' '}
              </p>
              <span className="mx-1 mb-2 fs-4 fw-bolder">
                {data.items[0][0].brand}
              </span>
            </div>
          </Row>

          <div className="mt-1 d-flex">
            {data.items[0][2].split(',').length > 0 &&
              data.items[0][2].split(',').map((color, index) => {
                return (
                  <div
                    key={index}
                    className="circle-color  mt-1 mx-1"
                    style={{ backgroundColor: color }}
                  ></div>
                );
              })}
          </div>

          <Row className="mt-2 d-flex justify-content-between">
            <Col xs="6" sm="6">
              <div>
                <span className="details-product-title">الكمية</span>
                <span>
                  <input
                    style={{ width: '40px', height: '24px' }}
                    type="number"
                    value={data.items[0][1]}
                    className="mx-2"
                  ></input>
                </span>
              </div>
            </Col>
            <Col xs="6" sm="6" className="text-start fs-5 fw-bold">
              <div style={{ color: '#212529', fontFamily: 'cairo' }}>
                {data.price} جنيه
              </div>
            </Col>
          </Row>

          <span className="mx-1 mb-2 fs-4 fw-bolder">{statusDescription}</span>
        </div>
      </Col>
    </Row>
  );
}

export default AdminOrderItem;
