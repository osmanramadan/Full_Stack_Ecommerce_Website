import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../redux/actions/authAction';


const LoginHook = () => {
  const dispatch = useDispatch();

  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(true);
  const res = useSelector((state) => state.authReducer.loginUser);

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const validationValues = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return 'من فضلك أدخل ايميل صحيح';
    }

    if (password.length < 8) {
      return 'يجب الا تقل كلمه عن تماني احرف';
    }
  };

  const onSubmit = async () => {
    const validationError = validationValues();
    if (validationError) {
      alert(validationError);
      return;
    }
    dispatch(
      loginUser({
        email,
        password,
      }),
    );
    setLoading(false);
  };

  useEffect(() => {
    if (loading === false) {
      if (res.data) {
        if (res.data.validationError) {
          setLoading(true);
          alert(res.data.validationError)
          return;
        }
        if (res.data.token) {
          localStorage.setItem('token', res.data.token);
          localStorage.setItem('user', JSON.stringify(res.data.data));

          setTimeout(() => {
            window.location.href = '/';
          }, 3000);
        } else {
          localStorage.removeItem('token');
          localStorage.removeItem('user');
        }

        if (res.data.error) {
          if (res.data.error === 'Password wrong') {
            setLoading(true);
            alert('كلمة السر خاطئه')
          
          }
          if (res.data.error === 'Email not found') {
            setLoading(true);
            alert('ايميل عير موجود')
            
          }
        }
      }
    }
  }, [res.data]);

  return [email, password, loading, onChangeEmail, onChangePassword, onSubmit];
};

export default LoginHook;
