import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSubCategory } from '../../redux/actions/subcatAction';

const GetSubCategoryHook = () => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const res = useSelector((state) => state.subCategoryReducer.getSubCategory);

  useEffect(() => {
    setLoading(true);
    dispatch(getSubCategory());
    setLoading(false);
  }, []);

  useEffect(() => {
    if (loading === false) {
      if (res.data) {
        if (res.status == 'success') {
          setData(res.data);
        }
      }
    }
  }, [res.data]);

  return [data];
};

export default GetSubCategoryHook;
