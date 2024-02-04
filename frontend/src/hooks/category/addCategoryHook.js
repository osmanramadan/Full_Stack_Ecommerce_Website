import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createCategory } from '../../redux/actions/catAction';
import avater from '../../images/avatar.png';

const addCategoryHook = () => {
  const dispatch = useDispatch();

  const [catname, setCatname] = useState('');
  const [img, setImg] = useState(avater);
  const [loading, setLoading] = useState(true);
  const [file, setFile] = useState(null);

  const handleNameInputChange = (e) => {
    setCatname(e.target.value);
  };

  const handleImageInputChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      console.log(e.target.files[0]);
      setFile(e.target.files[0]);
      setImg(URL.createObjectURL(e.target.files[0]));
    }
  };

  const onSubmit = async () => {
    if (catname === '' || file === null) {
      alert('من فضلك اكمل البيانات');
      return;
    }

    const formdata = new FormData();
    formdata.append('image', file);
    formdata.append('name', catname);
    formdata.append('type', 'categories');

    setLoading(true);
    dispatch(createCategory(formdata));
    setLoading(false);
  };
  const res = useSelector((state) => state.catReducer.createCategory);

  useEffect(() => {
    if (loading === false) {
      setLoading(false);
      setImg(avater);
      setCatname('');
      setLoading(true);
      setFile(null);

      if (res.data) {
        if (res.data.status == 'success') {
          alert('نجاح الاضافة');
        }
        if (res.data.status == 'unallowed') {
          alert('مسموح بالصور فقط');
        }
        if (res.data.status == 'fail') {
          alert('حاول مره اخري');
        }
        if (res.data.status == 'exist') {
          alert('الصنف موجود بالفعل');
        }
      }
    }
  }, [res.data]);

  return [
    onSubmit,
    handleImageInputChange,
    handleNameInputChange,
    img,
    catname,
    loading,
  ];
};

export default addCategoryHook;
