import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

function Cartitem({ item, remove, qut, colors, selectcolors }) {
  const handleDeleteCart = () => {
    remove(item.id);
  };

  return (
    <Row className="cart-item-compenent mx-1">
      <Col xs="3" sm="3" md="3" lg="2" className="mb-4">
        <div className="mt-1 mx-3 cart-image-container">
          <img
            src={`data:image/*;base64,${item.imageCoverData}`}
            alt="cartimage"
            className="cart-image"
          />
        </div>
      </Col>
      <Col xs="9" sm="9" md="9" lg="10" className="mb-4">
        <div className="d-flex flex-column mx-2">
          <Row className="mt-2 d-flex justify-content-between">
            <Col xs="6" sm="6">
              <h4 className="order-item-header">{item.ptitle}</h4>
            </Col>
            <Col xs="6" sm="6" className="text-start">
              {remove ? (
                <div onClick={handleDeleteCart}>
                  <span className="order-item-header mx-2">
                    <FontAwesomeIcon icon={faTrash} />
                  </span>
                  <span>ازالة</span>
                </div>
              ) : (
                ''
              )}
            </Col>
          </Row>

          <Row className="mt-2">
            <p className="details-product-p1 mb-0">{item.pdesc}</p>
          </Row>

          <Row>
            <div>
              <p className="details-product-title mb-2  d-inline-block">
                الماركة :{' '}
              </p>
              <span className="mx-1 mb-2 fs-4 fw-bolder">{item.brand}</span>
            </div>
          </Row>

          <div className="circle-row d-flex flex-row-reverse mb-1">
            {colors
              ? colors.split(',').length > 0 &&
                colors.split(',').map((color) => {
                  return (
                    <div
                      className="circle-detail"
                      style={{ backgroundColor: color }}
                    ></div>
                  );
                })
              : selectcolors > 0 &&
                selectcolors.map((color) => {
                  return (
                    <div
                      className="circle-detail"
                      style={{ backgroundColor: color }}
                    ></div>
                  );
                })}
          </div>
          <div>
            <span className="details-product-title">الكمية:</span>
            <span>
              <input
                style={{ width: '40px', marginTop: '20px', height: '24px' }}
                type="number"
                value={qut}
                className="mx-2"
              ></input>
            </span>
          </div>

          <Row className="mt-2 d-flex justify-content-between">
            <Col xs="6" sm="6"></Col>
            <Col xs="6" sm="6" className="text-start fs-5 fw-bold">
              <div
                style={{
                  color: '#212529',
                  opacity: '0.7',
                  fontFamily: 'cairo',
                }}
              >
                {qut ? item.priceafterdiscount * qut : item.priceafterdiscount}
              </div>
            </Col>
          </Row>
        </div>
      </Col>
    </Row>
  );
}

export default Cartitem;
