import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../redux/actions/productAction';
import { searchProducts } from '../../redux/actions/productAction';

const GetProductHook = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [dataExist, setDataExist] = useState(true);
  const [search, setSearch] = useState('');

  const res = useSelector((state) => state.productReducer.allProducts);
  const res2 = useSelector((state) => state.productReducer.searchproducts);

  const searchProduct = () => {
    setLoading(true);
    dispatch(searchProducts(search));
    setLoading(false);
  };

  useEffect(() => {
    setDataExist(true);
    setLoading(true);
    dispatch(getProducts());
    setLoading(false);
  }, []);

  useEffect(() => {
    setData(res2);
  }, [res2]);

  useEffect(() => {
    if (loading === false) {
      setLoading(true);

      if (res.status) {
        if (res.status === 'success') {
          setDataExist(true);
          setData(res.data);
        }
        if (res.status === 'fail') {
          setDataExist(false);
        }
      }
    }
  }, [res.data]);

  return [data, dataExist, loading, setSearch, search, searchProduct];
};

export default GetProductHook;
