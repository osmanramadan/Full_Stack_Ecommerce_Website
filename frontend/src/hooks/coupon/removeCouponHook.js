import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCoupon } from '../../redux/actions/couponAction';

const deleteCouponHook = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(!show);
  };

  const onSubmit = async (id) => {
    setLoading(true);
    dispatch(deleteCoupon({ id: id }));
    setLoading(false);
  };

  const res = useSelector((state) => state.couponReducer.delCoupon);

  useEffect(() => {
    if (loading === false) {
      setLoading(true);
      console.log(res.data);
      if (res.data) {
        if (res.data.status == 'success') {
          location.reload();
          return;
        } else {
          alert('خطا فى الحذف');
          return;
        }
      }
    }
  }, [res.data]);

  return [onSubmit, loading, show, handleClose];
};

export default deleteCouponHook;
