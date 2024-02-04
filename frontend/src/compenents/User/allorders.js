import React, { useEffect, useState } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import Usertabs from './user-utility/usertabs';
import Userorder from './user-utility/userorders';
import GetUserOrdersHook from '../../hooks/order/getUserOrdersHook';
import PaginationComponent from '../Utility/pagination';

function Allorders() {
  const [data, _dataExist, loading, username] = GetUserOrdersHook();

  const [pageNumberLimit, setpageNumberLimit] = useState(0);
  const [currentPage, setcurrentPage] = useState(1);
  const [itemsPerPage, _setitemsPerPage] = useState(3);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  useEffect(() => {
    if (data.length > 0) {
      const pages = [];

      for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
        pages.push(i);
      }
      setpageNumberLimit(pages.length);
    }
  }, [data]);

  const handlePageClick = (num) => {
    setcurrentPage(num);
  };

  return (
    <div style={{ marginTop: '105px', direction: 'rtl' }}>
      <Container>
        <Row>
          <Col xs="4" sm="3" md="3" lg="2">
            <Usertabs />
          </Col>

          <Col xs="8" sm="9" md="9" lg="9">
            <p
              style={{
                fontSize: '23px',
                fontWeight: 'bold',
                fontFamily: 'cairo',
                opacity: '0.8',
              }}
            >
              اهلا {username}
            </p>

            {currentItems.length > 0 &&
              currentItems.map((data, i) => <Userorder key={i} data={data} />)}

            {currentItems.length === 0 && loading === true && (
              <h2>لا يوجد طلبات حتى الان</h2>
            )}
          </Col>
        </Row>
        <div style={{ direction: 'rtl' }}>
          <PaginationComponent
            pageCount={pageNumberLimit}
            handlePageClick={handlePageClick}
          />
        </div>
      </Container>
    </div>
  );
}

export default Allorders;
