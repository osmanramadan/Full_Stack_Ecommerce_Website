import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteAddress } from '../../redux/actions/addrAction';
import { useNavigate } from 'react-router-dom';

const deleteAddressHook = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [data, setData] = useState([]);

  const [id, setId] = useState('');
  const [title, setTitle] = useState('');
  const [detalis, setDetalis] = useState('');
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(true);

  const onSubmit = async () => {
    setLoading(true);
    dispatch(deleteAddress({ id: id }));
    setLoading(false);
  };

  useEffect(() => {
    if (localStorage.getItem('address') !== null) {
      var user = JSON.parse(localStorage.getItem('address'));
      setData(user);
    }
  }, []);

  useEffect(() => {
    setId(data.id);
    setPhone(data.phone);
    setTitle(data.addrtitle);
    setDetalis(data.addrdetails);
  }, [data]);

  const res = useSelector((state) => state.addrReducer.deleteAddress);

  useEffect(() => {
    if (loading === false) {
      if (res.data) {
        console.log(res);
        if (res.data.status === 'success') {
          navigate('/user/addresses');
        } else {
          alert('خطأ أثناء الحذف');
          navigate('/user/addresses');
        }
      }
    }
  }, [res.data]);

  return [title, detalis, phone, onSubmit];
};

export default deleteAddressHook;
