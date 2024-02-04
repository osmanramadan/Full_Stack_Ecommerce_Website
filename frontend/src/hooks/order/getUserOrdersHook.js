import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOrdersByUser } from '../../redux/actions/orderAction';

const GetUserOrdersHook = () => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [username, setUsername] = useState('');
  const [dataExist, setDataExist] = useState(true);

  const res = useSelector((state) => state.orderReducer.getUserOrders);

  useEffect(() => {
    setDataExist(true);
    setLoading(true);
    if (localStorage.getItem('user') !== null) {
      var user = JSON.parse(localStorage.getItem('user'));
      setUsername(user.username);
    }
    dispatch(getOrdersByUser(user.id));
    setLoading(false);
  }, []);

  console.log(
    res.data,
    '8888888888888888888888*********************************',
  );
  useEffect(() => {
    if (loading === false) {
      setLoading(true);
      if (res.data) {
        if (res.status === 'success') {
          setDataExist(true);
          console.log('enas enas oo oo oo ');
          setData(res.data);
        }
        if (res.status === 'fail') {
          setDataExist(false);
        }
      }
    }
  }, [res.data]);

  return [data, dataExist, loading, username];
};
export default GetUserOrdersHook;
