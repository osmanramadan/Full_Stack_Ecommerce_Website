import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { forgetPassword } from '../../redux/actions/authAction';
import { useNavigate } from 'react-router-dom';

const ForgetPasswordHook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(true);

  const OnChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onSubmit = async () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('من فضلك أدخل ايميل صحيح');
      return;
    }

    dispatch(
      forgetPassword({
        email,
      }),
    );
    setLoading(false);
  };

  const res = useSelector((state) => state.authReducer.forgetPassword);
  useEffect(() => {
    if (loading === false) {
      if (res.data) {
        if (res.data.status === 'success') {
          localStorage.setItem('email', email);
          setTimeout(() => {
            navigate('/user/verifycode');
          }, 1000);
        }
        if (res.data.validationError) {
          setLoading(true);
          alert(res.data.validationError);
          return;
        }
        if (res.data.status === 'fail') {
          setLoading(true);
          alert('هذا الحساب غير موجود لدينا');
          setTimeout(() => {
            navigate('/register');
          }, 1000);
        }
        if (res.data.status === 'fail to update') {
          setLoading(true);
          alert('حاول مره أخرى :حدث خطأ');
          return;
        }
      }
    }
  }, [res.data]);

  return [OnChangeEmail, email, onSubmit, loading];
};

export default ForgetPasswordHook;
