import React, { useEffect, useState } from 'react';
import Productitem from '../Utility/Productitem';
import { Row, Col } from 'react-bootstrap';
import GetProductHook from '../../hooks/product/getProductHook';
import { Spinner, Button } from 'react-bootstrap';
import useFavoriteProducts from '../../hooks/product/favoriteHook';
import GetNewClothesHook from '../../hooks/product/newClothesHook';

function Productitems({ prodadmin, newclothes }) {
  const [newitems, _dataFound, _load] = GetNewClothesHook();
  const [
    favoriteProducts,
    _addFavoriteProduct,
    _removeFavoriteProduct,
    _isFavorite,
  ] = useFavoriteProducts();
  const [products, dataExist, loading] = GetProductHook();

  const [items, setItems] = useState([]);
  const [itemCloth, setItemCloth] = useState([]);
  const data = prodadmin ? items : items.slice(0, 3);
  const clothes = itemCloth.slice(0, 3);

  useEffect(() => {
    if (products.length > 0) {
      setItems(products);
    }
  }, [products]);

  useEffect(() => {
    if (newitems.length > 0) {
      setItemCloth(newitems);
    }
  }, [newitems]);

  return (
    <Row className={`mt-3 ${prodadmin ? 'flex-row' : 'flex-row-reverse'}`}>
      {newclothes === true &&
        clothes.length > 0 &&
        clothes.map((data, i) => (
          <Col xs={12} sm={4} key={i}>
            <Productitem key={data.id} admin={false} data={data} />
          </Col>
        ))}

      {prodadmin === true &&
        data.length > 0 &&
        data.map((data, i) => (
          <Col xs={12} sm={4} key={i}>
            <Productitem key={data.id} admin="true" data={data} />
          </Col>
        ))}

      {prodadmin === false &&
        data.length > 0 &&
        data.map((data, i) => (
          <Col xs={12} sm={4} key={i}>
            <Productitem key={data.id} admin={false} data={data} />
          </Col>
        ))}

      {prodadmin === 'favourit' &&
        favoriteProducts.length > 0 &&
        favoriteProducts.map((data, i) => (
          <Col xs={12} sm={4} key={i}>
            <Productitem key={data.id} admin={false} data={data} />
          </Col>
        ))}

      {data.length === 0 && dataExist === true && loading === true && (
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
      )}

      {data.length === 0 && loading === false && dataExist === false && (
        <h3>لا يوجد منتجات</h3>
      )}
    </Row>
  );
}

export default Productitems;
