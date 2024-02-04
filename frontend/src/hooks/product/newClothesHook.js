import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getNewClothes } from '../../redux/actions/productAction';

const GetNewClothesHook = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [dataExist, setDataExist] = useState(true);

  const res = useSelector((state) => state.productReducer.newclothes);

  useEffect(() => {
    setDataExist(true);
    setLoading(true);
    dispatch(getNewClothes());
    setLoading(false);
  }, []);

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

  return [data, dataExist, loading];
};

export default GetNewClothesHook;
