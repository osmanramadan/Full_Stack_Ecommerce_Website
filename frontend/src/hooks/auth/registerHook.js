import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createNewUser } from '../../redux/actions/authAction';
import { useNavigate } from 'react-router-dom';

const RegisterHook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(true);

  const res = useSelector((state) => state.authReducer.createUser);

  const onChangeUsername = (e) => {
    setUsername(e.target.value);
  };
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const onChangePhone = (e) => {
    setPhone(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onChangeConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  const validationValues = () => {
    if (username === '') {
      return 'من فضلك ادخل اسم المستخدم';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return 'من فضلك أدخل ايميل صحيح';
    }

    if (password.length < 8) {
      return 'يجب الا تقل كلمه عن تماني احرف';
    }
    if (!/^\d+$/.test(phone)) {
      return 'رقم الهاتف يجب ان يكون ارقام فقط';
    }
    // Validate if phone is an Egyptian number
    const egyptianPhoneRegex = /^(01)[0-9]{9}$/;
    if (!egyptianPhoneRegex.test(phone)) {
      return 'من فضلك ادخل رقم هاتف مصري صحيح';
    }

    if (password !== confirmPassword) {
      return 'من فضلك تاكيد من كلمه السر';
    }

    return ''; // No validation error
  };

  const validationQuery = () => {
    if (res.data.error) {
      if (res.data.error === 'Email already exist') {
        return 'هذا الايميل مسجل من قبل';
      }
      if (res.data.error === 'Phone already exist') {
        return 'هذا الرقم مسجل من قبل';
      }

      return ''; // No validation error
    }
  };

  const OnSubmit = async () => {
    const validationError = validationValues();
    if (validationError) {
      alert(validationError, 'error');
      return;
    }

    try {
      dispatch(
        createNewUser({
          email,
          username,
          password,
          confirmPassword,
          phone,
        }),
      );
      setLoading(false);
    } catch {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (loading === false) {
      if (res.data) {
        if (res.data.token) {
          localStorage.setItem('token', res.data.token);
          localStorage.removeItem('user');

          setTimeout(() => {
            navigate('/login');
          }, 2000);
        }

        if (res.data.validationError) {
          setLoading(true);
          alert(res.data.validationError);
          return;
        }
        const validationError = validationQuery();
        if (validationError) {
          setLoading(true);
          alert(validationError);
          return;
        }
      }
    }
  }, [res.data]);

  return [
    username,
    email,
    phone,
    password,
    confirmPassword,
    loading,
    onChangeUsername,
    onChangeEmail,
    onChangePhone,
    onChangePassword,
    onChangeConfirmPassword,
    OnSubmit,
  ];
};

export default RegisterHook;
