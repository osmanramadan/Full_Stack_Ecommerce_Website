import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createOrder } from '../../redux/actions/orderAction';

const PayCashHook = () => {
  const dispatch = useDispatch();

  const nav = useNavigate();
  const [loading, setLoading] = useState(true);
  const [address, setAddress] = useState([]);
  const [userinfo, setUserInfo] = useState([]);
  const [items, setItems] = useState([]);
  const [price, setPrice] = useState('');

  const res = useSelector((state) => state.orderReducer.createOrder);

  const onSubmit = async () => {
    if (items.length == 0) {
      alert('املئ السله');
      return;
    }

    if (address.length == 0) {
      alert('اضف عنوانا');
      nav('/user/addresses');
      return;
    }
    if (userinfo.length == 0) {
      alert('حاول مره اخرى');
      return;
    }
    setLoading(true);

    dispatch(
      createOrder({
        userinfo: [
          {
            email: userinfo.email,
            username: userinfo.username,
            phone: userinfo.phone,
          },
        ],
        price: price,
        userid: userinfo.id,
        address: [address],
        items: items,
        status: 'waiting',
      }),
    );

    setLoading(false);
  };

  useEffect(() => {
    if (loading === false) {
      setLoading(true);
      if (res.data) {
        if (res.data.status === 'success') {
          alert('نجاح الاضافة');
          localStorage.removeItem('cart');
          nav('/user/allorders');
          return;
        } else {
          alert('هناك مشكله فى عملية الاضافة ');
          return;
        }
      }
    }
  }, [res.data]);

  return [onSubmit, setAddress, setUserInfo, userinfo, setItems, setPrice];
};

export default PayCashHook;
