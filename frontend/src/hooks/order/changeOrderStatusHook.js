import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeOrderStatus } from '../../redux/actions/orderAction';

const ChangeOrderStatusHook = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState('');

  const onChangeStatus = (v) => {
    setStatus(v);
  };

  const res = useSelector((state) => state.orderReducer.updateStatus);

  console.log(res.data);
  const onSubmit = (id) => {
    setLoading(true);
    dispatch(changeOrderStatus({ id: id, status: status }));
    setLoading(false);
  };

  console.log(res, '?>>?>?>?>?>>????????>>>>>????????????????????????????/');
  useEffect(() => {
    if (loading === false) {
      setLoading(true);
      if (res.data) {
        if (res.data.status === 'success') {
          // location.href("/")
          location.replace('/admin/manage-orders');
          // alert('نجاح التعديل')

          return;
        }
      }
    }
  }, [res.data]);

  return [onSubmit, onChangeStatus, loading];
};
export default ChangeOrderStatusHook;
