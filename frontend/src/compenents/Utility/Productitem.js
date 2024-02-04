import React from 'react';
import { Col, Card, Row, Button, Spinner } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import deleteProductHook from '../../hooks/product/deleteProductHook';
import useFavoriteProducts from '../../hooks/product/favoriteHook';
import ProtectedRouteHook from '../../hooks/auth/protectedRoutedHook';

function Productitem({ admin, data }) {
  const [
    favoriteProducts,
    addFavoriteProduct,
    removeFavoriteProduct,
    isFavorite,
  ] = useFavoriteProducts();
  const [onSubmit, loading] = deleteProductHook();
  const [isUser, _isAdmin, _userData] = ProtectedRouteHook();

  const history = useNavigate();

  const handleEditClick = () => {
    history(`/admin/update-product`, { state: { productData: data } });
  };
  const handleClick = () => {
    history(`/product`, { state: { productData: data } });
  };

  const handleDeleteClick = (e) => {
    onSubmit(e.target.value);
  };

  return (
    <Col>
      <Card className="productitem mb-3">
        {loading == false ? (
          <Button style={{ backgroundColor: '#F9F9F9', border: '#F9F9F9' }}>
            <Spinner
              style={{ color: 'black' }}
              as="span"
              animation="grow"
              size="sm"
              role="status"
              aria-hidden="true"
            />
            ' '
            <Spinner
              style={{ color: 'black' }}
              as="span"
              animation="grow"
              size="sm"
              role="status"
              aria-hidden="true"
            />
            ' '
            <Spinner
              style={{ color: 'black' }}
              as="span"
              animation="grow"
              size="sm"
              role="status"
              aria-hidden="true"
            />
          </Button>
        ) : (
          ''
        )}
        {admin && (
          <Row className="mt-2 d-flex justify-content-between">
            <Col xs="6">
              <button
                className="link cart-action mx-1"
                onClick={handleEditClick}
              >
                تعديل
              </button>
            </Col>
            <Col xs="6" className="text-start">
              <div>
                <button
                  className="cart-action"
                  value={data.id}
                  onClick={handleDeleteClick}
                >
                  ازالة
                </button>
              </div>
            </Col>
          </Row>
        )}

        {admin === false && (
          <Row className="mt-2 d-flex justify-content-between">
            <Col xs="12" className="text-end">
              <div>
                <button className="cart-action"></button>
              </div>
            </Col>
          </Row>
        )}

        <button className="link border-0 bg-white" onClick={handleClick}>
          <div className="productImg d-flex justify-content-center">
            <img
              src={`data:image/*;base64,${data.imageCoverData}`}
              className="image"
            />
          </div>
        </button>

        <span className="d-flex justify-content-end mb-1 mb-sm-2 mx-3">
          {isUser ? (
            isFavorite(data) ? (
              <span onClick={() => removeFavoriteProduct(data)}>
                <FontAwesomeIcon icon={faHeart} style={{ color: '#F6B805' }} />
              </span>
            ) : (
              <span onClick={() => addFavoriteProduct(data)}>
                <FontAwesomeIcon icon={faStar} />
              </span>
            )
          ) : (
            ''
          )}
        </span>

        <div className="px-3">
          <Card.Text
            className="mb-0"
            style={{ fontSize: '20px', opcity: '0.4' }}
          >
            {data.ptitle}
          </Card.Text>
          <Row>
            <Col style={{ color: '#F6B805' }}>
              <FontAwesomeIcon icon={faHeart} /> {Number(data.rate).toFixed(1)}
            </Col>
            <Col className="text-start mx-2">
              <b className="fs-5 mx-1">{data.priceafterdiscount}</b>جنية
            </Col>
          </Row>
        </div>
      </Card>
    </Col>
  );
}
export default Productitem;
