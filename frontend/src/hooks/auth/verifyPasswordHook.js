import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { verifyPassword } from '../../redux/actions/authAction';

const VerifyPasswordHook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(true);

  const OnChangeCode = (e) => {
    const newValue = e.target.value.replace(/\s/g, '');
    setCode(newValue);
  };

  const onSubmit = async () => {
    if (code === '') {
      alert('من فضلك ادخل الكود');
      return;
    }

    const isNumeric = /^\d+$/.test(code);
    if (!isNumeric) {
      alert('الكود يجب أن يحتوي على أرقام فقط');
      return;
    }

    if (code.length < 6) {
      notify('الكود لا يقل عن سته ارقام', 'error');
      return;
    }

    setLoading(true);
    const email = localStorage.getItem('email');
    dispatch(
      verifyPassword({
        email: email,
        resetCode: code,
      }),
    );
    setLoading(false);
  };

  const res = useSelector((state) => state.authReducer.verifyPassword);

  useEffect(() => {
    if (loading === false) {
      if (res.data) {
        if (res.data.validationError) {
          setLoading(true);
          alert(res.data.validationError);
          return;
        }

        if (res.data.status === 'email not found') {
          setLoading(true);
          alert('ايميل غير موجود');
          setTimeout(() => {
            navigate('/user/forgetpassword');
          }, 1500);
        }

        if (res.data.status === 'invalid code') {
          alert('اكتب كود صحيح');
          setLoading(true);
          return;
        }

        if (res.data.status === 'already verified') {
          alert('تم التفعيل بالفعل');
          setTimeout(() => {
            navigate('/user/resetpassword');
          }, 1500);
        }

        if (res.data.status === 'expired code') {
          setLoading(true);
          alert('انتهت مدة كود التفعيل');
          setTimeout(() => {
            navigate('/login');
          }, 1500);
        }

        if (res.data.status === 'success') {
          setTimeout(() => {
            navigate('/user/resetpassword');
          }, 1500);
        }

        if (res.data.status === 'fail') {
          setLoading(true);
          alert('الكود خاطئ او انتهت صلاحيته');
          return;
        }
      }
    }
  }, [res.data]);

  return [code, OnChangeCode, onSubmit, loading];
};

export default VerifyPasswordHook;
