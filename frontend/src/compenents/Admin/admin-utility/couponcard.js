import React from 'react';
import { Button, Col, Modal, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import deleteCouponHook from '../../../hooks/coupon/removeCouponHook';

const CouponCard = ({ item }) => {
  const history = useNavigate();
  const [onSubmit, _loading, show, handleClose] = deleteCouponHook();

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const handleDelCoupon = () => {
    handleClose;
    onSubmit(item.id);
  };

  const handleUpdateCoupon = () => {
    history(`/admin/update-coupon`, { state: { Data: item } });
  };

  return (
    <div className="user-address-card my-3 px-2">
      <div
        className="Userinfo"
        style={{ fontSize: '15px', fontweight: '400', fontFamily: 'cairo' }}
      >
        <Modal show={show} onHide={handleClose}>
          <Modal.Header>
            <Modal.Title>
              {' '}
              <div className="font">تاكيد الحذف</div>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="fs-4 fw-bold text-center">
              {' '}
              هل انت متاكد من عملية الحذف للكوبون
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button className="font" variant="success" onClick={handleClose}>
              تراجع
            </Button>
            <Button className="font" variant="dark" onClick={handleDelCoupon}>
              حذف
            </Button>
          </Modal.Footer>
        </Modal>
        <Row className="p-2">
          <Col xs="12" sm="6">
            <span
              className="mx-2"
              style={{
                fontSize: '16px',
                fontweight: '500',
                fontFamily: 'cairo',
              }}
            >
              اسم الكوبون:{item.name}
            </span>
          </Col>
          <Col xs="12" sm="6" className="text-start">
            <div className="mx-2 mt-1 opacity-75">
              <span className="mx-2" onClick={handleUpdateCoupon}>
                <FontAwesomeIcon icon={faPenToSquare} />
                <span> تعديل</span>
              </span>

              <span className="mx-2" onClick={handleClose}>
                <FontAwesomeIcon icon={faTrash} />
                <span> ازاله</span>
              </span>
            </div>
          </Col>
        </Row>

        <Row className="mx-0 mt-3">
          <div>نسبه الخصم : {item.discount}</div>
        </Row>

        <Row className="mx-0 mt-3">
          <div>
            تاريخ الانتهاء :{' '}
            <span className="opacity-75 mx-2">{formatDate(item.expire)}</span>
          </div>
        </Row>
      </div>
    </div>
  );
};

export default CouponCard;
