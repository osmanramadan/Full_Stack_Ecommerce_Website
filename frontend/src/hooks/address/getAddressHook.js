import _React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userAddresses } from '../../redux/actions/addrAction';

const Addresshook = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [addrexist, setAddrexist] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    if (localStorage.getItem('user') !== null) {
      var user = JSON.parse(localStorage.getItem('user'));
    }
    dispatch(userAddresses({ email: user.email }));
    setLoading(false);
  }, []);

  const userAddressesData = useSelector(
    (state) => state.addrReducer.userAddresses,
  );

  useEffect(() => {
    if (loading == false) {
      if (userAddressesData) {
        if (userAddressesData.status == 'no addr') {
          setAddrexist(false);
        }

        if (userAddressesData.status == 'success') {
          setAddrexist(true);
          setData(userAddressesData.data);
          setLoading(true);
        }
      }
    }
  }, [userAddressesData]);

  return [data, loading, addrexist];
};

export default Addresshook;
