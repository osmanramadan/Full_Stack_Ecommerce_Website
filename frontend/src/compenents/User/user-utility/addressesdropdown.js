import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { Col, Row } from 'react-bootstrap';
import Addresshook from '../../../hooks/address/getAddressHook';

function Addressesdropdown({ bg, changeaddr, addr }) {
  const [items, _loading, _addrexist] = Addresshook();
  const [isActive, setIsActive] = useState(false);
  const [data, setData] = useState([]);

  const changemainaddr = (e) => {
    changeaddr(JSON.parse(e.target.id));
    setIsActive(!isActive);
  };

  useEffect(() => {
    if (items.length > 0) {
      setData(items);
    }
  }, [items]);

  return (
    <div className="mx-2 w-auto">
      <button
        style={{ backgroundColor: bg ? 'white' : '#F9F9F9' }}
        onClick={(_e) => {
          setIsActive(!isActive);
        }}
        className="dropdown-btn"
      >
        <Row className="d-flex justify-content-between">
          <Col style={{ height: '100%' }} className="text-end  mt-1">
            {addr}
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
        className=" px-2"
        style={{
          backgroundColor: bg ? 'white' : '#F9F9F9',
          display: isActive ? 'block' : 'none',
        }}
        key={Math.random()}
      >
        {data.length > 0 &&
          data.map((data, index) => (
            <div key={index} id={JSON.stringify(data)} onClick={changemainaddr}>
              {data.addrtitle}
            </div>
          ))}
      </div>
    </div>
  );
}

export default Addressesdropdown;
