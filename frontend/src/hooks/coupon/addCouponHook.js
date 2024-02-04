import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCoupon } from '../../redux/actions/couponAction';

const addCouponHook = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [discount, setDiscount] = useState('');
  const [expire, setExpire] = useState('1/2/2002');
  const [loading, setLoading] = useState(true);

  const onChangeName = (v) => {
    setName(v.target.value);
  };

  const onChangeDiscount = (v) => {
    setDiscount(v.target.value);
  };

  const onChangeExpire = (v) => {
    setExpire(v.target.value);
  };

  const onSubmit = async () => {
    if (name === '' || discount === '' || expire === '') {
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
      addCoupon({
        name: name,
        discount: discount,
        expire: expire,
      }),
    );
    setLoading(false);
  };
  const res = useSelector((state) => state.couponReducer.addCoupon);

  useEffect(() => {
    if (loading === false) {
      setLoading(true);

      if (res.data.status == 'success') {
        location.reload();
        return;
      }

      if (res.data.status == 'fail') {
        alert('فشل الاضافه');
        return;
      }
      if (res.data.status == 'exist') {
        alert('الكوبون موجود بالفعل');
        return;
      }
    }
  }, [res.data]);

  return [
    onSubmit,
    loading,
    onChangeDiscount,
    discount,
    onChangeExpire,
    expire,
    onChangeName,
    name,
  ];
};

export default addCouponHook;
