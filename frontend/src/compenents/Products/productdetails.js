import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { CompactPicker } from 'react-color';
import Productrating from './products-utility/productrating';
import Productusercomment from './products-utility/product-user-comment';
import PaginationComponent from '../Utility/pagination';
import Caption from '../Utility/Hometitles';
import { useLocation, useNavigate } from 'react-router-dom';
import Textarea from '../Utility/Textarea';
import addCommentHook from '../../hooks/comment/addCommentHook';
import getCommentsHook from '../../hooks/comment/getCommentHook';
import GetCommentStarsHook from '../../hooks/comment/getCommentStarsHook';
import CartHook from '../../hooks/cart/cartHook';
import ProtectedRouteHook from '../../hooks/auth/protectedRoutedHook';
import add from '../../images/add.png';

function Productdetails() {
  const [
    onSubmit,
    setUserName,
    _setProdId,
    stars,
    onChangeStars,
    comment,
    onChangeComment,
    _loading,
  ] = addCommentHook();
  const [data, _dataExist, load] = getCommentsHook();
  const [starinfo] = GetCommentStarsHook();
  const [_cart, addToCart, _removeFromCart, _cartTotal] = CartHook();
  const [isUser, _isAdmin, _userData] = ProtectedRouteHook();

  const location = useLocation();
  const nav = useNavigate();

  let productData;
  let userData;

  try {
    productData = location.state.productData;
    localStorage.setItem('id', productData.id);
    userData = localStorage.getItem('user')
      ? JSON.parse(localStorage.getItem('user'))
      : '';
  } catch (v) {
    nav('/products');
    return;
  }

  const [pageNumberLimit, setPageNumberLimit] = useState(0);
  const [currentPage, setcurrentPage] = useState(1);
  const [itemsPerPage, _setitemsPerPage] = useState(5);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const [currentItems, setCurrentItems] = useState([]);

  //Color
  const [selectedColor, setSelectedColor] = useState([]);
  const [qut, setQut] = useState(1);
  const [_starsdt, setStarsDt] = useState('');
  const [Colors, _setColors] = useState(
    productData.colors.map((color, _i) => {
      return color;
    }),
  );
  const [show, setShow] = useState(true);

  const handleColorChange = (color) => {
    setSelectedColor([...selectedColor, color.hex]);
    setShow(false);
  };

  const onChangeColor = () => {
    setShow(!show);
  };

  const onRemoveColor = (color) => {
    const newColor = selectedColor.filter((e) => e !== color);
    setSelectedColor(newColor);
  };

  const handlePageClick = (num) => {
    setcurrentPage(num);
  };

  const onSubmitCommit = () => {
    onSubmit(productData.id);
  };

  const handleAddCart = () => {
    productData.qut = qut ? qut : 1;
    productData.selectcolors = selectedColor;
    productData.num = productData.id + 1;

    if (productData.colors.length > 0) {
      addToCart(productData);
    } else {
      alert('اختار لونا');
      return;
    }
  };

  useEffect(() => {
    setUserName(userData.username);
  }, [userData]);

  useEffect(() => {
    setStarsDt(starinfo[0]);
  }, [starinfo]);

  useEffect(() => {
    if (data.length > 0) {
      const pages = [];

      for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
        pages.push(i);
      }
      setPageNumberLimit(pages.length);
      const updatedItems = data.slice(indexOfFirstItem, indexOfLastItem);
      setCurrentItems(updatedItems);
    }
  }, [data, indexOfFirstItem, indexOfLastItem]);

  return (
    <div style={{ marginTop: '140px', backgroundColor: '#F9F9F9' }}>
      <Container className="mt-3">
        <Row className="d-flex flex-row-reverse mx-3">
          <Col xs="10" sm="8" md="6" lg="4" className="product-carousel">
            <Carousel className="mt-0">
              {productData.imagesData &&
                productData.imagesData.map((v, _i) => {
                  return (
                    <Carousel.Item style={{ height: '450px' }}>
                      <div className="d-flex flex-row justify-content-center">
                        <img
                          style={{ height: '450px', width: '295px' }}
                          src={`data:image/*;base64,${v}`}
                          alt="First slide"
                        />
                      </div>
                    </Carousel.Item>
                  );
                })}
            </Carousel>
          </Col>

          <Col xs="12" sm="12" md="12" lg="8" className="text-end">
            <div className="d-flex flex-column mt-2 mx-5">
              <h4 className="details-product-title">
                {productData.category} :
              </h4>
              <p className="details-product-p1">
                <span style={{ color: '#F6B805', marginRight: '5px' }}>
                  <FontAwesomeIcon
                    icon={faStar}
                    style={{ height: '18px', width: '18px' }}
                  />{' '}
                  {isNaN(productData.rate)
                    ? Number(productData.rate).toFixed(1)
                    : Number(productData.rate).toFixed(0)}{' '}
                </span>

                {productData.ptitle}
              </p>

              {/* *********** */}

              <p className="mb-0">
                <span className="mt-3 fs-3">{productData.brand}</span>
                <h4 className="details-product-title mt-2 d-inline-block">
                  الماركة :
                </h4>
              </p>

              <div className="circle-row">
                <img
                  onClick={onChangeColor}
                  src={add}
                  width="30px"
                  height="35px"
                  style={{ cursor: 'pointer' }}
                />
                {show ? (
                  <CompactPicker
                    colors={Colors}
                    color={selectedColor}
                    onChange={handleColorChange}
                    styles={{ default: { input: { display: 'none' } } }}
                  />
                ) : null}

                {selectedColor.length > 0 &&
                  selectedColor.map((color, index) => {
                    return (
                      <div
                        key={index}
                        onClick={() => {
                          onRemoveColor(color);
                        }}
                        className="circle-color  mt-1 mx-1"
                        style={{ backgroundColor: color }}
                      ></div>
                    );
                  })}
              </div>

              {isUser ? (
                <div>
                  <span>
                    <input
                      style={{
                        width: '40px',
                        marginTop: '20px',
                        height: '24px',
                      }}
                      type="number"
                      value={qut}
                      onChange={(v) => {
                        if (v.target.value > 0) setQut(v.target.value);
                      }}
                      className="mx-2"
                    ></input>
                  </span>
                  <span className="details-product-title">:الكمية</span>
                </div>
              ) : (
                ''
              )}

              <h4 className="details-product-title mt-4">المواصفات :</h4>
              <p className="details-product-p2">{productData.pdesc}</p>

              <div className="d-flex flex-row">
                <Col>
                  {isUser ? (
                    <button className="element-button" onClick={handleAddCart}>
                      اضف للعربة
                    </button>
                  ) : (
                    ''
                  )}
                </Col>

                {productData.discount > 0 ? (
                  <Row className="mx-1">
                    <span className="element-price">
                      جنية
                      {
                        <span className="mx-1">
                          {productData.priceafterdiscount}
                        </span>
                      }
                    </span>

                    <span className="element-price">
                      جنية
                      {
                        <span className="mx-1 text-decoration-line-through">
                          {productData.price}
                        </span>
                      }
                    </span>
                  </Row>
                ) : (
                  <Col xs="auto" className="element-price">
                    جنية{<span className="mx-1">{productData.price}</span>}
                  </Col>
                )}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Container
        style={{
          backgroundColor: 'white',
          marginTop: '20px',
          direction: 'rtl',
          borderRadius: '10px',
          marginRight: '100px',
        }}
      >
        <Row>
          <Col>
            <span style={{ fontSize: '26px', fontWeight: '600' }}>
              التقيمات
            </span>
            <span style={{ color: '#F6B805', marginRight: '5px' }}>
              <FontAwesomeIcon
                icon={faStar}
                style={{ height: '18px', width: '18px' }}
              />{' '}
              {isNaN(productData.rate)
                ? Number(productData.rate).toFixed(1)
                : Number(productData.rate).toFixed(0)}
            </span>
            <span
              style={{ opacity: '0.7', fontSize: '19px', fontWeight: 'bold' }}
            >
              {' '}
              {`${data.length ? data.length : 0} تقييم`}
            </span>
          </Col>
        </Row>

        <Row className="mx-4 mt-3">
          <Col xs="auto" className="fs-5">
            {userData.username}
          </Col>
          <Col>
            <Productrating stars={stars} onchangestars={onChangeStars} />
          </Col>
          <Col xs="12">
            <Textarea
              txt="اكتب تعليقك..."
              rows="2"
              value={comment}
              onChangeComment={onChangeComment}
            />
          </Col>
          <Col className="text-start border-bottom">
            <button className="element-button my-1" onClick={onSubmitCommit}>
              اضف تعليق
            </button>
          </Col>
        </Row>
        <Row className="comments">
          {load === false && <h3> لا يوجد تعليقات حتى الان</h3>}
          {currentItems.length > 0 &&
            currentItems.map((v, i) => {
              return (
                <Productusercomment
                  key={i}
                  username={v.username}
                  comment={v.text}
                  stars={v.stars}
                />
              );
            })}
        </Row>
        <div>
          <PaginationComponent
            pageCount={pageNumberLimit}
            handlePageClick={handlePageClick}
          />
        </div>
      </Container>
      <Container style={{ direction: 'rtl' }}>
        <Caption title="منتجات قد تعجبك" />
        {/* <Productitems margin="0" admin={false}/> */}
      </Container>
    </div>
  );
}

export default Productdetails;
