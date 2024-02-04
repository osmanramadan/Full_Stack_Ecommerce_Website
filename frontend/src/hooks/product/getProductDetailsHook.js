import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductDetails } from '../../redux/actions/productAction';

const GetProductDetailsHook = () => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [id, setId] = useState('');
  const [dataExist, setDataExist] = useState(true);

  const handleChangeId = (id) => {
    setId(id);
  };

  const res = useSelector((state) => state.productReducer.detailsProduct);

  useEffect(() => {
    setDataExist(true);
    setLoading(true);
    dispatch(getProductDetails(id));
    setLoading(false);
  }, [id]);

  useEffect(() => {
    if (loading === false) {
      if (res.status) {
        if (res.status === 'success') {
          setData(res.data);
        }

        if (res.status === 'fail') {
          setDataExist(false);
        }
      }
    }
  }, [res]);

  return [id, handleChangeId, data, dataExist, loading];
};

export default GetProductDetailsHook;
