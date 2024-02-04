import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faOutdent, faArrowRight } from '@fortawesome/free-solid-svg-icons';

function Admintabs({ icon }) {
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
            <Link to="/admin/manage-orders" className="link">
              <div className="user-tab-item border-bottom">اداره الطلبات</div>
            </Link>
            <Link to="/admin/allproducts" className="link">
              <div className="user-tab-item border-bottom">اداره المنتجات</div>
            </Link>
            <Link to="/admin/add-brand" className="link">
              <div className="user-tab-item border-bottom">اضف ماركه</div>
            </Link>
            <Link to="/admin/add-category" className="link">
              <div className="user-tab-item border-bottom">اضف تصنيف</div>
            </Link>
            <Link to="/admin/add-subCategory" className="link">
              <div className="user-tab-item border-bottom">اضف تصنيف فرعي</div>
            </Link>
            <Link to="/admin/add-product" className="link">
              <div className="user-tab-item border-bottom">اضف منتج</div>
            </Link>
            <Link to="/admin/add-coupon" className="link">
              <div className="user-tab-item border-bottom">اضف كود خصم</div>
            </Link>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  ) : (
    <div className="d-flex flex-column user-left-tabs pt-3">
      <Link to="/admin/manage-orders" className="link">
        <div className="user-tab-item border-bottom">اداره الطلبات</div>
      </Link>
      <Link to="/admin/allproducts" className="link">
        <div className="user-tab-item border-bottom">اداره المنتجات</div>
      </Link>
      <Link to="/admin/add-brand" className="link">
        <div className="user-tab-item border-bottom">اضف ماركه</div>
      </Link>
      <Link to="/admin/add-category" className="link">
        <div className="user-tab-item border-bottom">اضف تصنيف</div>
      </Link>
      <Link to="/admin/add-subCategory" className="link">
        <div className="user-tab-item border-bottom">اضف تصنيف فرعي</div>
      </Link>
      <Link to="/admin/add-product" className="link">
        <div className="user-tab-item border-bottom">اضف منتج</div>
      </Link>
      <Link to="/admin/add-coupon" className="link">
        <div className="user-tab-item border-bottom">اضف كود خصم</div>
      </Link>
    </div>
  );
}

export default Admintabs;
