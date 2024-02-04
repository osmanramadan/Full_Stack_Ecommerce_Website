import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showcomments } from '../../redux/actions/productAction';

const getCommentsHook = () => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  // const [id,setId]=useState()
  const [dataExist, setDataExist] = useState(true);

  const res = useSelector((state) => state.productReducer.showComments);
  console.log(
    res.data,
    '.......................................................',
  );
  useEffect(() => {
    setDataExist(true);
    setLoading(true);
    if (localStorage.getItem('id') !== null) {
      var id = JSON.parse(localStorage.getItem('id'));
    }

    dispatch(showcomments({ id: id }));
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
export default getCommentsHook;
