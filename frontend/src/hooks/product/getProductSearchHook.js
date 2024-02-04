import { useState } from 'react';
import GetProductHook from '../product/getProductHook';

const GetProductSearchHook = () => {
  const [data, _dataExist, _loading] = GetProductHook();
  const [searchValues, setSearchValues] = useState([]);

  const searchProduct = (word) => {
    if (window.location.pathname !== '/products') {
      window.location.href = '/products';
    }

    const items = data?.filter((v) => v.ptitle == word);
    setSearchValues(items);
  };

  return [searchValues, searchProduct];
};

export default GetProductSearchHook;
