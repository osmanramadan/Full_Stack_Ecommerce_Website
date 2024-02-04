import { useState, useEffect } from 'react';
import GetBrandHook from '../brand/getBrandHook';
import GetProductHook from './getProductHook';
import GetCategoryHook from '../category/getCategoryHook';

const ProductsHook = () => {
  const [data, _dataExist, _loadprod] = GetProductHook();
  const [brands, _dataEx, _loadbra] = GetBrandHook();
  const [categories, _Exist, _load] = GetCategoryHook();

  const [filtered, setFiltered] = useState([]);
  const [brand, setBrand] = useState([]);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    setFiltered(data);
  }, [data]);

  useEffect(() => {
    const brandState = [...brands.map((v, _i) => v.name)];
    setBrand(brandState);
  }, [brands]);

  useEffect(() => {
    const catState = [...categories.map((v, _i) => v.catname)];
    setCategory(catState);
  }, [categories]);

  const onChangeCheckBox = (value) => {
    if (value === 'allCat' || value === 'allBrand') {
      setFiltered(data);
    } else {
      const newCategory = [];
      const newBrand = [];

      value['category'].forEach((v) => {
        const filterCat = data.filter((dt) => dt.category === v);
        newCategory.push(...filterCat);
      });

      value['brand'].forEach((v) => {
        const filterBrand = data.filter((dt) => dt.brand === v);
        newBrand.push(...filterBrand);
      });

      const uniqueFiltered = [...new Set([...newCategory, ...newBrand])];
      setFiltered(uniqueFiltered);
    }
  };

  return [filtered, onChangeCheckBox, brand, category];
};

export default ProductsHook;
