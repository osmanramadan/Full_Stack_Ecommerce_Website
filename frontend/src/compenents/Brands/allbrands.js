import React, { useEffect, useState } from 'react';
import Subtile from '../Utility/Subtitle';
import { Button, Container, Row, Spinner } from 'react-bootstrap';
import PaginationComponent from '../Utility/pagination';
import Branditem from '../Utility/Branditem';
import GetBrandHook from '../../hooks/brand/getBrandHook';

function Allbrands() {
  const [data, dataExist, loading] = GetBrandHook();

  const [pageNumberLimit, setpageNumberLimit] = useState(0);
  const [currentPage, setcurrentPage] = useState(1);
  const [itemsPerPage, _setitemsPerPage] = useState(5);

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
    <div style={{ marginTop: '110px' }}>
      <Container>
        <Subtile text="كل الماركات" />

        <Row className="d-flex flex-row-reverse mb-5 mt-2 gy-3">
          {currentItems.length > 0 &&
            currentItems.map((data, i) => (
              <Branditem key={i} image={data.imageData} />
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
            <h3>لا يوجد ماركات</h3>
          )}
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

export default Allbrands;
