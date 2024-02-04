import { Col, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import login from '../../images/login.png';
import cart from '../../images/cart.png';
import Navbardropdown from '../Utility/Dropdownnavbar';
import ProtectedRouteHook from '../../hooks/auth/protectedRoutedHook';
import GetProductHook from '../../hooks/product/getProductHook';

function Navbarpage() {
  const [isUser, isAdmin, _userdata] = ProtectedRouteHook();
  const [_data, _dataExist, _loading, setSearch, _searchword, searchProduct] =
    GetProductHook();

  let word = '';
  if (localStorage.getItem('search') != null) {
    word = localStorage.getItem('search');
  }

  const search = (e) => {
    if (window.location.pathname !== '/products') {
      window.location.href = '/products';
    }

    if (e.target.value === '') {
      location.reload();
    }

    localStorage.setItem('search', e.target.value);
    setSearch(e.target.value);
    searchProduct();
  };

  return (
    <Navbar className="py-2" position="top" expand="sm">
      <Container className="flex-row-reverse">
        <Link to="/">
          <img
            className="m-2"
            style={{ height: '60px', width: '60px' }}
            alt="image"
            src={logo}
          />
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="flex-row-reverse">
          <Form className="flex-fill mx-sm-2 my-3">
            <Form.Control
              style={{ height: '40px', textIndent: '50%' }}
              type="search"
              placeholder="ابحث"
              value={word}
              onChange={search}
              className="flex-fill mx-sm-2 me-2"
              aria-label="Search"
            />
          </Form>
          <Row className="d-flex align-content-center ">
            {isUser ? (
              <Col
                xs="12"
                sm="6"
                className="d-flex justify-content-center my-4"
              >
                <Link className="link mx-1" to="/cart">
                  <div className="d-flex flex-row">
                    <span className="mt-1">العربة</span>

                    <img className="lg-cart mx-1" alt="cart" src={cart} />
                  </div>
                </Link>
              </Col>
            ) : (
              ''
            )}
            <Col xs="12" sm="6" className="d-flex justify-content-center my-4">
              {isUser || isAdmin ? (
                <Navbardropdown isUser={isUser} />
              ) : (
                <Link className="link mx-1" to="/login">
                  <div className="d-flex flex-row mt-1">
                    <span className="mt-0"> دخول </span>
                    <img className="lg-login mx-1" alt="login" src={login} />
                  </div>
                </Link>
              )}
            </Col>
          </Row>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default Navbarpage;
