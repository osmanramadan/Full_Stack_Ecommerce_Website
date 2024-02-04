import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createBrand } from '../../redux/actions/brandAction';
import avater from '../../images/avatar.png';

const addBrandHook = () => {
  const dispatch = useDispatch();

  const [brandname, setBrandname] = useState('');
  const [img, setImg] = useState(avater);
  const [loading, setLoading] = useState(true);
  const [file, setFile] = useState(null);

  const handleNameInputChange = (e) => {
    setBrandname(e.target.value);
  };

  const handleImageInputChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
      setImg(URL.createObjectURL(e.target.files[0]));
    }
  };

  const onSubmit = async () => {
    if (brandname === '' || file === null) {
      alert('من فضلك اكمل البيانات');
      return;
    }

    const formdata = new FormData();
    formdata.append('image', file);
    formdata.append('name', brandname);
    formdata.append('type', 'brands');

    setLoading(true);
    dispatch(createBrand(formdata));
    setLoading(false);
  };
  const res = useSelector((state) => state.brandReducer.createBrand);

  useEffect(() => {
    if (loading === false) {
      setLoading(false);
      setImg(avater);
      setBrandname('');
      setLoading(true);
      setFile(null);

      if (res.data) {
        if (res.data.status == 'success') {
          alert('نجاح الاضافة');
          return;
        }

        if (res.data.status == 'unallowed') {
          alert('مسموح بالصور فقط');
          return;
        }
        if (res.data.status == 'fail') {
          alert('حاول مره اخري');
          return;
        }
        if (res.data.status == 'exist') {
          alert('الماركه موجود بالفعل');
          return;
        }
      }
    }
  }, [res.data]);

  return [
    onSubmit,
    handleImageInputChange,
    handleNameInputChange,
    img,
    brandname,
    loading,
  ];
};

export default addBrandHook;
