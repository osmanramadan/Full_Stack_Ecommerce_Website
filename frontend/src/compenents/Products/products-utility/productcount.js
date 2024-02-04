import React, { useState } from 'react';
import { Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpWideShort } from '@fortawesome/free-solid-svg-icons';

function Productcount({ count, orderAsn, orderDesc, orderByStar }) {
  function MyDropdown() {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const handleDropdownToggle = () => {
      setDropdownOpen(!isDropdownOpen);
    };

    const handleDropdownMouseEnter = () => {
      setDropdownOpen(true);
    };

    const handleDropdownMouseLeave = () => {
      setDropdownOpen(false);
    };

    return (
      <div
        className="dropdown"
        onMouseEnter={handleDropdownMouseEnter}
        onMouseLeave={handleDropdownMouseLeave}
      >
        <div className="fs-4 mx-4" onClick={handleDropdownToggle}>
          ترتيب حسب
          <FontAwesomeIcon
            className="mx-2"
            icon={faArrowUpWideShort}
            color="black"
            flip="both"
          />
        </div>

        {isDropdownOpen && (
          <div className="dropdown-menu">
            <div className="dropdown-item border-bottom" onClick={orderByStar}>
              الاعلي تقييما
            </div>

            <div className="dropdown-item border-bottom" onClick={orderAsn}>
              السعر من الاقل للاعلي
            </div>

            <div className="dropdown-item border-bottom" onClick={orderDesc}>
              السعر من الاعلي للاقل
            </div>
          </div>
        )}
      </div>
    );
  }
  return (
    <div className="d-flex flex-row justify-content-between mt-3">
      <Col>
        <MyDropdown />
      </Col>
      <Col xs="auto" className="text-end mx-2">
        <h4 style={{ fontWeight: 'bold', fontSize: '20px' }}>
          {`${count} منتج متاح`}
        </h4>
      </Col>
    </div>
  );
}

export default Productcount;
