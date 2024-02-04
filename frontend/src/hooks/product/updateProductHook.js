import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateProduct } from '../../redux/actions/productAction';
import { useNavigate } from 'react-router-dom';

const updateProductHook = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const res = useSelector((state) => state.productReducer.updateProduct);

  const [loading, setLoading] = useState(true);
  const [id, setId] = useState('');

  const handleChangeId = (id) => {
    setId(id);
  };
  function dataURLtoFile(dataurl, filename) {
    var arr = dataurl.split(','),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);

    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, { type: mime });
  }

  const [title, setTitle] = useState();
  const [desc, setDesc] = useState();
  const [price, setPrice] = useState();
  const [discount, setDiscount] = useState();
  const [subcategory, setSubCategory] = useState([]);
  const [brand, setBrand] = useState('اسم الماركه');
  const [catname, setCatname] = useState('التصنيف الرئيسي');
  const [showColor, setShowColor] = useState(false);
  const [images, setImages] = useState([]);
  const [colors, setColors] = useState([]);

  useEffect(() => {
    if (loading === false) {
      setLoading(true);
      if (res.data) {
        console.log(res.data);
        if (res.data.status == 'success') {
          alert('نجاح التعديل');
          navigate('/admin/allproducts');
          return;
        } else {
          alert('هناك مشكله فى عملية التعديل');
          navigate('/admin/allproducts');
          return;
        }
      }
    }
  }, [res.data]);

  const onChangeTitle = (event) => {
    setTitle(event.target.value);
  };
  const onChangeDesc = (event) => {
    setDesc(event.target.value);
  };
  const onChangePrice = (event) => {
    setPrice(event.target.value);
  };
  const onChangeDiscount = (event) => {
    setDiscount(event.target.value);
  };
  const onChangeCatName = (value) => {
    setCatname(value);
  };
  const onChangeSubCategory = (value) => {
    setSubCategory(value);
  };
  const onChangeBrand = (e) => {
    setBrand(e);
  };

  const onChangeColor = () => {
    setShowColor(!showColor);
  };

  const removeColor = (color) => {
    const newColor = colors.filter((e) => e !== color);
    setColors(newColor);
  };

  const onChangeImages = (value) => {
    setImages(value);
  };

  const handelChangeComplete = (color) => {
    setColors([...colors, color.hex]);
    setShowColor(!showColor);
  };

  const onSubmit = async () => {
    if (
      title === '' ||
      catname === 'التصنيف الرئيسي' ||
      desc === '' ||
      images.length === 0 ||
      price === '' ||
      brand === 'اسم الماركه' ||
      subcategory.length === 0 ||
      colors.length === 0
    ) {
      alert('من فضلك اكمل البيانات');
      return;
    }

    setLoading(true);

    const imgCover = dataURLtoFile(images[0], Math.random() + '.png');
    const itemImages = Array.from(Array(Object.keys(images).length).keys()).map(
      (_item, index) => {
        return dataURLtoFile(images[index], Math.random() + '.png');
      },
    );

    const formdata = new FormData();
    formdata.append('imageCover', imgCover);
    itemImages.map((item) => formdata.append('images', item));
    formdata.append('id', id);
    formdata.append('ptitle', title);
    formdata.append('pdesc', desc);
    formdata.append('price', price);
    formdata.append('discount', discount);
    formdata.append('priceafterdiscount', price - (discount * price) / 100);
    formdata.append('category', catname);
    formdata.append(
      'subcategory',
      subcategory.map((data, _i) => {
        return data.value;
      }),
    );
    formdata.append('brand', brand);
    formdata.append('colors', colors);
    formdata.append('type', 'products');

    dispatch(updateProduct(formdata));
    setLoading(false);
  };

  return [
    onSubmit,
    loading,
    title,
    setTitle,
    onChangeTitle,
    desc,
    setDesc,
    onChangeDesc,
    price,
    setPrice,
    onChangePrice,
    discount,
    setDiscount,
    onChangeDiscount,
    subcategory,
    setSubCategory,
    onChangeSubCategory,
    brand,
    setBrand,
    onChangeBrand,
    images,
    setImages,
    onChangeImages,
    catname,
    setCatname,
    onChangeCatName,
    colors,
    setColors,
    onChangeColor,
    handelChangeComplete,
    removeColor,
    showColor,
    handleChangeId,
  ];
};

export default updateProductHook;
