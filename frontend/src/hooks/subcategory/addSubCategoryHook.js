import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createSubCategory } from '../../redux/actions/subcatAction';
import { getAllCategory } from '../../redux/actions/catAction';

const AddSubCategoryHook = () => {
  const dispatch = useDispatch();

  const [items, setItems] = useState([]);
  const [name, setName] = useState('');
  const [maincat, setMaincat] = useState('اسم التصنيف الرئيسي');
  const [loading, setLoading] = useState(true);

  const res = useSelector((state) => state.subCatReducer.createSubCategory);
  const resItems = useSelector((state) => state.catReducer.getAllCategory);

  useEffect(() => {
    dispatch(getAllCategory());
  }, []);

  const onChangeName = (event) => {
    setName(event.target.value);
  };

  const onChangeMainCategory = (cat) => {
    setMaincat(cat);
  };

  const onSubmit = async () => {
    if (name === '' || maincat === '') {
      alert('من فضلك اكمل البيانات');
      return;
    }

    setLoading(true);
    dispatch(
      createSubCategory({
        name: name,
        maincat: maincat,
      }),
    );

    setLoading(false);
    setName('');
    setMaincat('اسم التصنيف الرئيسي');
  };

  useEffect(() => {
    if (resItems.data) {
      if (resItems.status == 'success') {
        setItems(resItems.data);
      }
    }
  }, [resItems.data]);

  useEffect(() => {
    if (loading === false) {
      setLoading(true);

      if (res.data) {
        if (res.data.status == 'success') {
          alert('نجاح الاضافة');
        }
        if (res.data.status == 'subcate error') {
          alert('الصنف الفرعي موجود بالفعل');
        }
        if (res.data.status == 'cate error') {
          alert('الصنف الرئيسي غير موجود');
        }

        if (res.data.status == 'fail') {
          alert('هناك مشكله فى عملية الاضافة ');
        }
      }
    }
  }, [res.data]);

  return [
    onChangeName,
    name,
    onChangeMainCategory,
    maincat,
    onSubmit,
    items,
    loading,
  ];
};

export default AddSubCategoryHook;
