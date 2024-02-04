import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserPassword } from '../../redux/actions/authAction';
import { updateUserProfileData } from '../../redux/actions/userAction';

const Profilehook = () => {
  const dispatch = useDispatch();

  if (localStorage.getItem('user') !== null) {
    var user = JSON.parse(localStorage.getItem('user'));
  }

  const res = useSelector((state) => state.userReducer.updateUserProfile);
  const reschangpass = useSelector(
    (state) => state.authReducer.userChangePassword,
  );

  const [username, setUsername] = useState(user.username);
  const [phone, setPhone] = useState(user.phone);
  const [email, setEmail] = useState(user.email);
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [newConfirmPassword, setNewConfirmPassword] = useState('');
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const handleChangeUsername = (e) => setUsername(e.target.value);
  const handleChangePhone = (e) => setPhone(e.target.value);
  const handleChangeEmail = (e) => setEmail(e.target.value);
  const handleChangeOldPassword = (e) => setOldPassword(e.target.value);
  const handleChangeNewPassword = (e) => setNewPassword(e.target.value);
  const handleChangeNewConfirmPassword = (e) =>
    setNewConfirmPassword(e.target.value);
  const [loading, setLoading] = useState(true);

  const validationChangePassword = () => {
    if (oldPassword === '' || newPassword === '' || newConfirmPassword === '') {
      return 'من فضلك املئ جميع الحقول';
    }
    if (newPassword.length < 8) {
      return 'يجب الا تقل كلمه السر عن تماني احرف';
    }
    if (newPassword !== newConfirmPassword) {
      return 'من فضلك أكد كلمة السر';
    }
  };
  const validationUpdateValues = () => {
    if (username === '') {
      return 'من فضلك ادخل اسم المستخدم';
    }

    if (!/^\d+$/.test(phone)) {
      return 'رقم الهاتف يجب ان يكون ارقام فقط';
    }

    const egyptianPhoneRegex = /^(01)[0-9]{9}$/;
    if (!egyptianPhoneRegex.test(phone)) {
      return 'من فضلك ادخل رقم هاتف مصري صحيح';
    }

    return '';
  };

  const handleUpdateProfile = async () => {
    const validationError = validationUpdateValues();
    if (validationError) {
      alert(validationError);
      return;
    }

    if (
      user.email == email &&
      user.username == username &&
      user.phone == phone
    ) {
      handleClose();
      return;
    }

    let data = {
      email: email,
      username: username,
      phone: phone,
    };

    dispatch(updateUserProfileData(data));
    setLoading(false);
  };

  const handleUpdatePassword = async () => {
    const validationError = validationChangePassword();

    if (validationError) {
      alert(validationError);
      return;
    }

    let data = {
      email: email,
      newpassword: newPassword,
      oldpassword: oldPassword,
    };

    dispatch(updateUserPassword(data));
    setLoading(false);
  };

  useEffect(() => {
    if (loading === false) {
      if (res.data) {
        if ((res.data.status = 'success')) {
          localStorage.setItem('user', JSON.stringify(res.data.data));
          setLoading(true);
          handleClose();
        } else {
          setLoading(true);
          handleClose();
        }
      }
    }
  }, [res.data]);

  useEffect(() => {
    if (loading === false) {
      if (reschangpass.data) {
        if (reschangpass.data.status === 'success') {
          setLoading(true);
          alert('تم تغيير بنجاح');
          setOldPassword('');
          setNewPassword('');
          setNewConfirmPassword('');
          return;
        }

        if (reschangpass.data.status === 'fail') {
          setLoading(true);
          alert('كلمه السر القديمة خاطئه');
          return;
        }
        if (reschangpass.data.status === 'email fail') {
          setLoading(true);
          alert('ايميل غير موجود');
          return;
        }
      }
    }
  }, [reschangpass.data]);

  return [
    user,
    show,
    handleShow,
    handleClose,
    username,
    handleChangeUsername,
    email,
    handleChangeEmail,
    phone,
    handleChangePhone,
    oldPassword,
    handleChangeOldPassword,
    newPassword,
    handleChangeNewPassword,
    newConfirmPassword,
    handleChangeNewConfirmPassword,
    handleUpdateProfile,
    handleUpdatePassword,
  ];
};

export default Profilehook;
