import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCoupons } from '../../redux/actions/couponAction';

const getCouponsHook = () => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [dataExist, setDataExist] = useState(true);

  const res = useSelector((state) => state.couponReducer.getAllCoupon);

  useEffect(() => {
    setDataExist(true);
    setLoading(true);
    dispatch(getCoupons());
    setLoading(false);
  }, []);

  useEffect(() => {
    if (loading === false) {
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

export default getCouponsHook;
