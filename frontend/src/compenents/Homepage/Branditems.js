import React from 'react';
import Branditem from '../Utility/Branditem';
import { Button, Spinner, Row } from 'react-bootstrap';
import GetBrandHook from '../../hooks/brand/getBrandHook';

function Branditems() {
  const [data, dataExist, loading] = GetBrandHook();
  const currentItems = data.slice(0, 6);

  return (
    <Row className="flex-row-reverse mb-5 mt-2 gy-3">
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
  );
}

export default Branditems;
