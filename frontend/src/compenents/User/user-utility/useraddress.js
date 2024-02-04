import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Useraddress({ address }) {
  {
    console.log(address, '.length > 0.length > 0.length > 0');
  }
  const handleUpdate = () => {
    localStorage.setItem('address', JSON.stringify(address));
  };

  const handleDelete = () => {
    localStorage.setItem('address', JSON.stringify(address));
  };

  return (
    <div
      className="Userinfo"
      style={{ fontSize: '15px', fontweight: '400', fontFamily: 'cairo' }}
    >
      <Row className="p-2">
        <Col xs="12" sm="6">
          <span
            className="mx-2"
            style={{ fontSize: '16px', fontweight: '500', fontFamily: 'cairo' }}
          >
            تسمية العنوان:{address.addrtitle}
          </span>
        </Col>
        <Col xs="12" sm="6" className="text-start">
          <div className="mx-2 mt-1 opacity-75">
            <Link
              className="link"
              to={{
                pathname: '/user/updateAddress',
              }}
            >
              <span className="mx-2" onClick={handleUpdate}>
                <FontAwesomeIcon icon={faPenToSquare} />
                <span> تعديل</span>
              </span>
            </Link>

            <Link
              className="link"
              to={{
                pathname: '/user/deleteAddress',
              }}
            >
              <span className="mx-2" onClick={handleDelete}>
                <FontAwesomeIcon icon={faTrash} />
                <span> ازاله</span>
              </span>
            </Link>
          </div>
        </Col>
      </Row>

      <Row className="mx-0 mt-3">
        <div> تفاصيل العنوان : {address.addrdetails}</div>
      </Row>

      <Row className="mx-0 mt-3">
        <div>
          رقم الهاتف: <span className="opacity-75 mx-2">{address.phone}</span>
        </div>
      </Row>
    </div>
  );
}

export default Useraddress;
