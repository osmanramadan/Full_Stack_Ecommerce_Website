import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProduct } from '../../redux/actions/productAction';

const deleteProductHook = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  const onSubmit = async (id) => {
    setLoading(true);
    dispatch(deleteProduct(id));
    setLoading(false);
  };

  const res = useSelector((state) => state.productReducer.deleteProduct);

  useEffect(() => {
    if (loading === false) {
      setLoading(true);
      if (res.data) {
        if (res.data.status == 'success') {
          location.reload('/admin/allproducts');
          return;
        } else {
          alert('خطا فى الجذف');
          return;
        }
      }
    }
  }, [res.data]);

  return [onSubmit, loading];
};

export default deleteProductHook;
