import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import getCouponHook from '../../../hooks/coupon/getCouponHook';

function Cartprice({ cartTotal }) {
  const nav = useNavigate();
  const [onSubmit, onChangeCoupon, coupon, price, onChangePrice, discount] =
    getCouponHook();

  useEffect(() => {
    onChangePrice(cartTotal - discount);
  }, [discount, cartTotal]);

  const handleSubmit = () => {
    onSubmit();
  };

  const handleClick = () => {
    if (!cartTotal) {
      alert('املئ العربه');
      return;
    }
    nav(`/order/paymethod`, { state: { price: price } });
  };

  return (
    <div>
      <div className="input-group w-auto mt-3">
        <input
          type="text"
          className="form-control discount-input"
          placeholder="كود الخصم"
          onChange={onChangeCoupon}
          value={coupon}
        />

        <button
          className="btn-discount-code"
          type="button"
          onClick={handleSubmit}
        >
          تطبيق
        </button>
      </div>

      <div className="form-control form-control-price text-center mt-3 ">
        <span className="fs-7 fw-medium"> {price > 0 ? price : 0}</span>{' '}
        <span>جنية</span>
      </div>

      <button
        className="form-control form-control-price mt-3  my-0"
        style={{
          backgroundColor: '#272727',
          color: 'white',
          fontWeight: 'bold',
        }}
        onClick={handleClick}
      >
        اتمام الشراء
      </button>
    </div>
  );
}

export default Cartprice;
