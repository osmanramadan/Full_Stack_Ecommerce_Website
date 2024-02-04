import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addAddress } from '../../redux/actions/addrAction';
import { useNavigate } from 'react-router-dom';

const addAddressHook = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  if (localStorage.getItem('user') !== null)
    var user = JSON.parse(localStorage.getItem('user'));

  const [email, _setEmail] = useState(user.email);
  const [title, setTitle] = useState('');
  const [detalis, setDetalis] = useState('');
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(true);

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
    if (title === '' || detalis === '' || phone === '') {
      alert('من فضلك اكمل البيانات');
      return;
    }

     
  const egyptianPhoneRegex = /^(01)[0-9]{9}$/;
  if (!egyptianPhoneRegex.test(phone)) {
      alert('من فضلك ادخل رقم هاتف مصري صحيح')
      return;
  }

    setLoading(true);
    dispatch(
      addAddress({
        email: email,
        addrtitle: title,
        addrdetails: detalis,
        phone: phone,
      }),
    );
    setLoading(false);
  };
  const res = useSelector((state) => state.addrReducer.addAddress);

  useEffect(() => {
    if (loading === false) {
      if (res.data) {
        console.log(res.data);
        if (res.data.status == 'success') {
          alert('نجاح الاضافة');

          setTimeout(() => {
            navigate('/user/addresses');
          }, 1000);
        } else {
          alert('هناك مشكله فى عملية الاضافة ');
          navigate('/user/addresses');
        }
      }
    }
  }, [res.data]);

  return [
    title,
    detalis,
    phone,
    onChangeTitle,
    onChangeDetalis,
    onChangePhone,
    onSubmit,
  ];
};

export default addAddressHook;
