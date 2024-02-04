import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { Col, Row } from 'react-bootstrap';
import AddSubCategoryHook from '../../../hooks/subcategory/addSubCategoryHook';

function Categorydropdown({ bg, changecat, catname }) {
  const [
    _onChangeName,
    _name,
    _onChangeMainCategory,
    _maincat,
    _onSubmit,
    items,
    _loading,
  ] = AddSubCategoryHook();

  const [isActive, setIsActive] = useState(false);
  const [data, setData] = useState([]);

  const changemaincat = (e) => {
    changecat(e.target.textContent);
    setIsActive(!isActive);
  };

  useEffect(() => {
    if (items.length > 0) {
      setData(items);
    }
  }, [items]);

  return (
    <div>
      <div className="subcategory-dropdown">
        <button
          style={{ backgroundColor: bg ? 'white' : '#F9F9F9' }}
          onClick={(_e) => {
            setIsActive(!isActive);
          }}
          className="dropdown-btn px-2"
        >
          <Row className="d-flex justify-content-between">
            <Col style={{ height: '100%' }} className="text-end  mt-1">
              {catname}
            </Col>

            <Col
              style={{ height: '100%' }}
              className="text-start opacity-75 mt-1"
            >
              <FontAwesomeIcon icon={faCaretUp} flip="vertical" />{' '}
            </Col>
          </Row>
        </button>

        <div
          className="subcategory-dropdown-content px-2"
          style={{
            backgroundColor: bg ? 'white' : '#F9F9F9',
            display: isActive ? 'block' : 'none',
          }}
          key={Math.random()}
          onClick={changemaincat}
        >
          {data.length > 0 &&
            data.map((data, index) => <div id={index}>{data.catname}</div>)}
        </div>
      </div>
    </div>
  );
}

export default Categorydropdown;
