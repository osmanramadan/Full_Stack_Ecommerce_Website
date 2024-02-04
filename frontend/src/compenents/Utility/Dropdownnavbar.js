import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Navbardropdown({ isUser }) {
  const [show, setShow] = useState(false);

  const Logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('id');
    localStorage.removeItem('cart');
    localStorage.removeItem('search');
    localStorage.removeItem('favoriteProducts');

    setTimeout(() => {
      window.location.href = '/login';
    }, 1000);
  };

  const handleMenuClick = () => {
    setShow(!show);
  };

  return (
    <div>
      <Dropdown onClick={handleMenuClick}>
        <Dropdown.Toggle
          id="dropdown-autoclose-true"
          className="mt-0"
          style={{ backgroundColor: '#272727', border: 'none' }}
        >
          مستخدم
        </Dropdown.Toggle>

        <Dropdown.Menu
          className={`d-flex flex-column justify-content-between text-center  ${
            show ? 'd-none' : 'show'
          }`}
          style={{
            backgroundColor: '#272727',
            color: 'white',
            height: '80px',
            marginLeft: '-70px',
            marginTop: '13px',
          }}
        >
          {isUser ? (
            <Link className="link mb-2" to="/user/allorders">
              {' '}
              الصفحة الشخصية
            </Link>
          ) : (
            <Link className="link mb-2" to="/admin/allproducts">
              {' '}
              لوحة التحكم
            </Link>
          )}

          <Link className="link mb-2">
            <div onClick={Logout}>تسجيل الخروج</div>
          </Link>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
export default Navbardropdown;
