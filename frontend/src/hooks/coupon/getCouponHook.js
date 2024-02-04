import { useState, useEffect } from 'react';
import getCouponsHook from './getCouponsHook';

const getCouponHook = () => {
  const [data, _dataExist, _load] = getCouponsHook();

  const [coupon, setCoupon] = useState('');
  const [price, setPrice] = useState(0);
  const [coupons, setCoupons] = useState([]);
  const [discount, setDiscount] = useState(0);

  useEffect(() => {
    setCoupons(
      data.map((item, _i) => {
        return item.name;
      }),
    );
  }, [data]);

  const onChangeCoupon = (v) => {
    setCoupon(v.target.value);
  };

  const onChangePrice = (v) => {
    setPrice(v);
  };

  const onSubmit = async () => {
    if (coupon === '') {
      alert('من فضلك اضف كوبون');
      return;
    }

    if (coupons.includes(coupon)) {
      let couponData = data.filter((item) => item.name == coupon);
      if (couponData) {
        if (couponData[0].expire > new Date(Date.now()).toISOString()) {
          setDiscount(couponData[0].discount);
          return;
        } else {
          alert('انتهى مده صلاحية الكوبون');
          return;
        }
      }
    } else {
      alert(`${coupon} غير متاح`);
    }
  };

  // const res = useSelector(state => state.couponReducer.getOneCoupon)

  // useEffect(() => {

  //     if (loading === false) {

  //         setLoading(true)

  //         if (res.data){

  //             if(res.status=='success'){

  //                 if(res.data.expire > new Date(Date.now()).toISOString())
  //                 {
  //                     setDiscount(res.data.discount)
  //                     return;

  //                 }else{
  //                     alert("انتهى مده صلاحية الكوبون")
  //                     return;
  //                 }

  //             }

  //         }
  //     }
  // }, [res.data])

  return [onSubmit, onChangeCoupon, coupon, price, onChangePrice, discount];
};

export default getCouponHook;
