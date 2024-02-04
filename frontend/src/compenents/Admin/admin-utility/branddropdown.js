import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { Col, Row } from 'react-bootstrap';
import GetBrandHook from '../../../hooks/brand/getBrandHook';

function Branddropdown({ brand, changebrand }) {
  const [data] = GetBrandHook();
  const [isActive, setIsActive] = useState(false);
  const [brands, setBrands] = useState([]);

  const onChangeBrand = (e) => {
    changebrand(e.target.textContent);
    setIsActive(!isActive);
  };

  useEffect(() => {
    setBrands(data);
  }, [data]);

  return (
    <div className="subcategory-dropdown mt-3">
      <button
        style={{ backgroundColor: '#F9F9F9' }}
        onClick={(_e) => {
          setIsActive(!isActive);
        }}
        className="dropdown-btn px-2"
      >
        <Row className="d-flex justify-content-between">
          <Col style={{ height: '100%' }} className="text-end">
            {brand}
          </Col>
          <Col style={{ height: '100%' }} className="text-start opacity-75">
            <FontAwesomeIcon icon={faCaretUp} flip="vertical" />{' '}
          </Col>
        </Row>
      </button>
      <div
        className="subcategory-dropdown-content px-2"
        style={{
          backgroundColor: '#F9F9F9',
          display: isActive ? 'block' : 'none',
        }}
        onClick={onChangeBrand}
      >
        {brands.length > 0 &&
          brands.map((data, index) => <div id={index}>{data.name}</div>)}
        {brands.length == 0 && <div>loading.....</div>}
      </div>
    </div>
  );
}

export default Branddropdown;
