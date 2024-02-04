import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOrders } from '../../redux/actions/orderAction';

const getOrdersHook = () => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [dataExist, setDataExist] = useState(true);

  const res = useSelector((state) => state.orderReducer.getOrders);

  useEffect(() => {
    setDataExist(true);
    setLoading(true);
    dispatch(getOrders());
    setLoading(false);
  }, []);

  useEffect(() => {
    if (loading === false) {
      setLoading(true);
      if (res.data) {
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

  return [data, dataExist, loading];
};
export default getOrdersHook;
