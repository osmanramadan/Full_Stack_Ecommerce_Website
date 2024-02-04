import React, { useState, useEffect } from 'react';
import Subtile from '../Utility/Subtitle';
import { Button, Container, Spinner } from 'react-bootstrap';
import Categoryitem from '../Utility/Categoryitem';
import PaginationComponent from '../Utility/pagination';
import GetCatgoryHook from '../../hooks/category/getCategoryHook';

function Allcategories() {
  const [data, dataExist, loading] = GetCatgoryHook();

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
    <div style={{ marginTop: '110px' }}>
      <Container>
        <Subtile text="كل التصنيفات" />

        <div className="mt-3 d-flex flex-row-reverse justify-content-start flex-wrap">
          {currentItems.length > 0 &&
            currentItems.map((data, i) => (
              <Categoryitem key={i} data={data} catecolor="#ADBCFA" />
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
            <h3>لا يوجد اصناف</h3>
          )}
        </div>

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

export default Allcategories;
