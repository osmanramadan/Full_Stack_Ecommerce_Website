import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateCoupon } from '../../redux/actions/couponAction';
import { useNavigate } from 'react-router-dom';

const updateCouponHook = () => {
  const history = useNavigate();
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [id, setId] = useState('');
  const [discount, setDiscount] = useState('');
  const [expire, setExpire] = useState('');
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

    setLoading(true);
    dispatch(
      updateCoupon({
        id: id,
        name: name,
        discount: discount,
        expire: expire,
      }),
    );
    setLoading(false);
  };
  const res = useSelector((state) => state.couponReducer.updateCoupon);

  useEffect(() => {
    if (loading === false) {
      setLoading(true);
      if (res.data.status == 'success') {
        history('/admin/add-coupon');
        return;
      }

      if (res.data.status == 'fail') {
        alert('فشل التعديل');
        history('/admin/add-coupon');
        return;
      }
    }
  }, [res.data]);

  return [
    onSubmit,
    setId,
    loading,
    onChangeDiscount,
    setDiscount,
    discount,
    onChangeExpire,
    setExpire,
    expire,
    onChangeName,
    setName,
    name,
  ];
};

export default updateCouponHook;
