import React, { useEffect, useState } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import Admintabs from './admin-utility/admintabs';
import AdminOrderItem from './admin-utility/adminorderitem';
import Admintitles from './admin-utility/admintitles';
import PaginationComponent from '../Utility/pagination';
import getOrdersHook from '../../hooks/order/getOrdersHook';

function Manageorders() {
  const [data, _dataExist, _loading] = getOrdersHook();

  const [pageNumberLimit, setPageNumberLimit] = useState(0);
  const [currentPage, setcurrentPage] = useState(1);
  const [itemsPerPage, _setitemsPerPage] = useState(3);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const [currentOrders, setCurrentOrders] = useState([]);

  useEffect(() => {
    const updatedOrders = data.slice(indexOfFirstItem, indexOfLastItem);
    setCurrentOrders(updatedOrders);
  }, [data, indexOfFirstItem, indexOfLastItem]);

  useEffect(() => {
    if (data.length > 0) {
      const pages = [];

      for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
        pages.push(i);
      }
      setPageNumberLimit(pages.length);
    }
  }, [data]);

  const handlePageClick = (num) => {
    setcurrentPage(num);
  };

  return (
    <div style={{ marginTop: '105px', direction: 'rtl' }}>
      <Container>
        <Row>
          <Col xs="0" sm="0" md="3" lg="2" className="admin-tabs1s">
            <Admintabs />
          </Col>

          <Col xs="12" sm="12" md="9" lg="10">
            <Row className="mt-2 d-flex justify-content-between">
              <Col xs="6">
                <Admintitles txt="ادارة جميع الطلبات" />
              </Col>
              <Col
                xs="6"
                className=" d-flex flex-row align-items-center justify-content-end"
              >
                <div className="admin-tabs2">
                  <Admintabs icon="true" />
                </div>
              </Col>
            </Row>
            <div className="my-0">
              {data.length > 0 &&
                currentOrders.map((data, i) => (
                  <AdminOrderItem key={i} data={data} />
                ))}
            </div>
            <PaginationComponent
              pageCount={pageNumberLimit}
              handlePageClick={handlePageClick}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Manageorders;
