import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBrand } from '../../redux/actions/brandAction';

const GetBrandHook = () => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [dataExist, setDataExist] = useState(true);

  const res = useSelector((state) => state.brandReducer.getBrand);

  useEffect(() => {
    setLoading(true);
    dispatch(getBrand());
    setLoading(false);
  }, []);

  useEffect(() => {
    if (loading === false) {
      if (res.data) {
        if (res.status == 'success') {
          setDataExist(true);
          setData(res.data);
        } else {
          setDataExist(false);
        }
      }
    }
  }, [res.data]);

  return [data, dataExist, loading];
};

export default GetBrandHook;
