import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateAddress } from '../../redux/actions/addrAction';
import { useNavigate } from 'react-router-dom';

const updateAddressHook = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [data, setData] = useState([]);

  const [id, setId] = useState('');
  const [title, setTitle] = useState('');
  const [detalis, setDetalis] = useState('');
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(true);

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

  const onChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  const onChangeDetalis = (event) => {
    setDetalis(event.target.value);
  };

  const onChangePhone = (event) => {
    setPhone(event.target.value);
  };

  const onSubmit = async () => {
    if (
      title === data.addrtitle &&
      detalis === data.addrdetails &&
      phone === data.phone
    ) {
      navigate('/user/addresses');
      return;
    }

    setLoading(true);
    dispatch(
      updateAddress({
        id: id,
        addrtitle: title,
        addrdetails: detalis,
        phone: phone,
      }),
    );

    setLoading(false);
  };
  const res = useSelector((state) => state.addrReducer.updateAddress);

  useEffect(() => {
    if (loading === false) {
      if (res.data) {
        console.log(res.data);
        if (res.data.status == 'success') {
          alert('نجاح التعديل');
          setTimeout(() => {
            navigate('/user/addresses');
          }, 1000);
        } else {
          alert('هناك مشكله فى عملية التعديل');
          navigate('/user/addresses');
        }
      }
    }
  }, [res.data]);

  return [
    id,
    title,
    detalis,
    phone,
    onChangeTitle,
    onChangeDetalis,
    onChangePhone,
    onSubmit,
  ];
};

export default updateAddressHook;
