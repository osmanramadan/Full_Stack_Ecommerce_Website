import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { Col, Row } from 'react-bootstrap';

function Customdrop({ onchangestatus, curState }) {
  let statusDescription;

  switch (curState) {
    case 'waiting':
      statusDescription = 'قيد التنفيذ';
      break;

    case 'cancle':
      statusDescription = 'تم الغاء الطلب';
      break;
    case 'complete':
      statusDescription = 'تم التوصيل أو فى الطريق';
      break;
    default:
      statusDescription = 'حالة غير معروفة';
  }

  const [isActive, setIsActive] = useState(false);
  const [selected, setIsSelected] = useState(statusDescription);

  const onChangeStatus = (e) => {
    const selectedValue = e.target.getAttribute('value');
    onchangestatus(selectedValue);
  };

  return (
    <div>
      <div className="order-dropdown">
        <button
          onClick={(_e) => {
            setIsActive(!isActive);
          }}
          className="dropdown-btn"
        >
          <Row className="d-flex justify-content-center">
            <Col xs="7" style={{ height: '100%' }} className="text-start">
              {selected}
            </Col>

            <Col
              xs="5"
              style={{ height: '100%' }}
              className="text-start opacity-75"
            >
              <FontAwesomeIcon icon={faCaretUp} flip="vertical" />{' '}
            </Col>
          </Row>
        </button>

        <div
          className="order-dropdown-content"
          style={{ display: isActive ? 'block' : 'none' }}
        >
          <div
            value="waiting"
            onClick={(e) => {
              setIsSelected(e.target.textContent);
              setIsActive(!isActive);
              onChangeStatus(e);
            }}
            className="item link"
          >
            قيد التنفيذ
          </div>

          <div
            value="complete"
            onClick={(e) => {
              setIsSelected(e.target.textContent);
              setIsActive(!isActive);
              onChangeStatus(e);
            }}
            className="item"
          >
            تم الانتهاء
          </div>

          <span
            value="cancle"
            onClick={(e) => {
              setIsSelected(e.target.textContent);
              setIsActive(!isActive);
              onChangeStatus(e);
            }}
            className="item"
          >
            الغاء
          </span>
        </div>
      </div>
    </div>
  );
}

export default Customdrop;
