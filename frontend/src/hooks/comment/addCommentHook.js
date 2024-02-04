import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addcomment } from '../../redux/actions/productAction';
import ProtectedRouteHook from '../auth/protectedRoutedHook';

const addCommentHook = () => {
  const dispatch = useDispatch();

  const [isUser, isAdmin, data] = ProtectedRouteHook();
  const [stars, setStars] = useState('');
  const [comment, setComment] = useState('');
  const [username, setUserName] = useState('');
  const [prodId, setProdId] = useState('');
  const [loading, setLoading] = useState(true);

  const onChangeStars = (v) => {
    setStars(v);
  };

  const onChangeComment = (v) => {
    setComment(v);
  };

  const onSubmit = async (id) => {
    if (!isUser) {
      alert('قم بتسجيل الدخول أولا');
      window.location.href = '/login';
      return;
    }

    if (username === '' || stars === '' || comment === '') {
      alert('من فضلك اكمل البيانات');
      return;
    }
    setLoading(true);
    dispatch(
      addcomment({
        prodId: id,
        text: comment,
        username: username,
        stars: stars,
      }),
    );
    setLoading(false);
  };
  const res = useSelector((state) => state.productReducer.addComment);

  useEffect(() => {
    if (loading === false) {
      setLoading(true);
      setComment('');
      if (res.data.status == 'success') {
        location.reload();
        return;
      }

      if (res.data.status == 'fail') {
        alert('فشل الاضافه');
        return;
      }
    }
  }, [res.status]);

  return [
    onSubmit,
    setUserName,
    setProdId,
    stars,
    onChangeStars,
    comment,
    onChangeComment,
    loading,
  ];
};

export default addCommentHook;
