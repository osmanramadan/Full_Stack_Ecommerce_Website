import React from 'react';
import { Link } from 'react-router-dom';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faOutdent, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { Button } from 'react-bootstrap';

function Usertabs({ icon }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return icon ? (
    <div>
      <Button variant="primary" className="cart-action" onClick={handleShow}>
        <FontAwesomeIcon color="black" icon={faOutdent} />
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Body>
          <div className="d-flex flex-column user-left-tabs pt-5">
            <div
              style={{
                marginBottom: '5px',
                marginTop: '55px',
                textAlign: 'center',
              }}
            >
              <Button className="cart-action" onClick={handleClose}>
                <FontAwesomeIcon color="black" icon={faArrowRight} />
              </Button>
            </div>
            <div className="d-flex flex-column user-left-tabs pt-3">
              <Link to="/user/allorders" className="link">
                <div className="user-tab-item border-bottom">اداره الطلبات</div>
              </Link>
              <Link to="/user/favoriteproducts" className="link">
                <div className="user-tab-item border-bottom">
                  المنتجات المفضلة
                </div>
              </Link>
              <Link to="/user/addresses" className="link">
                <div className="user-tab-item border-bottom">
                  العناوين الشخصية
                </div>
              </Link>
              <Link to="/user/profile" className="link">
                <div className="user-tab-item border-bottom">الملف الشخصي</div>
              </Link>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  ) : (
    <div className="d-flex flex-column user-left-tabs pt-3">
      <Link to="/user/allorders" className="link">
        <div className="user-tab-item border-bottom">اداره الطلبات</div>
      </Link>
      <Link to="/user/favoriteproducts" className="link">
        <div className="user-tab-item border-bottom">المنتجات المفضلة</div>
      </Link>
      <Link to="/user/addresses" className="link">
        <div className="user-tab-item border-bottom">العناوين الشخصية</div>
      </Link>
      <Link to="/user/profile" className="link">
        <div className="user-tab-item border-bottom">الملف الشخصي</div>
      </Link>
    </div>
  );
}

export default Usertabs;
