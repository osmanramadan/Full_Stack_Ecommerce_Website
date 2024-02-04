import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PayHook = () => {
  const nav = useNavigate();
  const [selected, setSelected] = useState('paycash');
  const [price, setPrice] = useState('0');
  const [addr, setAddr] = useState('');

  const onChangeMethod = (v) => {
    setSelected(v.target.id);
  };

  const onChangeAddr = (v) => {
    setAddr(v);
  };

  const onSubmit = async () => {
    if(addr===''){
      alert("اختار عنوانا")
      return;
    }
    if (selected === 'paycash') {
      nav(`/order/paycash`, { state: { price: price, addr: addr } });
    } else {
      nav('/order/paycreditcard');
    }
  };

  return [onSubmit, onChangeMethod, setPrice, addr.addrdetails, onChangeAddr];
};

export default PayHook;
