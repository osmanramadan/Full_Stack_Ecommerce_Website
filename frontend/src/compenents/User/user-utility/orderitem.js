import React from 'react';
import { Col, Row } from 'react-bootstrap';

function OrderItem({ data }) {
  return (
    <Row className="mt-2">
      <Col xs="4" sm="4" md="4" lg="2">
        <div>
          <img
            alt="cartimage"
            style={{ height: '145px' }}
            className="image"
            src={`data:image/*;base64,${data[0].imageCoverData}`}
          />
        </div>
      </Col>
      <Col xs="10" sm="10" md="8" lg="10">
        <p className="details-product-p1 mb-0">
          {data[0].pdesc}
          <div className="text-center">{data[0].price * data[1]} جنية</div>
        </p>
        <div>
          <p className="details-product-title mb-2  d-inline-block">
            الماركة :{' '}
          </p>
          <span className="mx-1 mb-2 fs-4 fw-bolder">{data[0].brand}</span>
        </div>
        <div className="mt-1 d-flex">
          {data[2][0].split(',').length >= 1
            ? data[2][0].split(',').map((color, index) => {
                return (
                  <div
                    key={index}
                    className="circle-color  mt-1 mx-1"
                    style={{ backgroundColor: color }}
                  ></div>
                );
              })
            : null}
        </div>
        <div className="mt-3">
          <span className="details-product-title">الكمية</span>
          <span>
            <input
              style={{ width: '40px', height: '24px' }}
              type="text"
              value={data[1]}
              className="mx-2"
            ></input>
          </span>
        </div>
      </Col>
    </Row>
  );
}
export default OrderItem;
