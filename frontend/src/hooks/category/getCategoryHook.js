import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategory } from '../../redux/actions/catAction';

const GetCatgoryHook = () => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [dataExist, setDataExist] = useState(true);

  const res = useSelector((state) => state.catReducer.getAllCategory);

  useEffect(() => {
    setDataExist(true);
    setLoading(true);
    dispatch(getAllCategory());
    setLoading(false);
  }, []);

  useEffect(() => {
    if (loading === false) {
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
  }, [res]);

  return [data, dataExist, loading];
};

export default GetCatgoryHook;
