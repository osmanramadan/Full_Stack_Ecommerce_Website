import Categoryitem from '../Utility/Categoryitem';
import GetCatgoryHook from '../../hooks/category/getCategoryHook';
import { Button, Spinner } from 'react-bootstrap';

function Categoryitems() {
  const [data, dataExist, loading] = GetCatgoryHook();
  const currentItems = data.slice(0, 6);

  return (
    <div className="mt-3 d-flex flex-row-reverse justify-content-start flex-wrap">
      {currentItems.length > 0 &&
        currentItems.map((data, i) => <Categoryitem key={i} data={data} />)}

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
  );
}

export default Categoryitems;
