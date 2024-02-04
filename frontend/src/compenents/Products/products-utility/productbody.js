import React, { useState, useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import Productitem from '../../Utility/Productitem';
import PaginationComponent from '../../Utility/pagination';
import ProductsHook from '../../../hooks/product/productsHook';
import Productcount from './productcount';

function Productbody() {
  const [filtered, onChangeCheckBox, brand, category] = ProductsHook();

  const [selectedCat, setSelectedCat] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState([]);

  const [pageNumberLimit, setPageNumberLimit] = useState(0);
  const [currentPage, setcurrentPage] = useState(1);
  const [itemsPerPage, _setitemsPerPage] = useState(4);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const [currentItems, setCurrentItems] = useState([]);

  useEffect(() => {
    const updatedItems = filtered.slice(indexOfFirstItem, indexOfLastItem);
    setCurrentItems(updatedItems);
  }, [filtered, indexOfFirstItem, indexOfLastItem]);

  useEffect(() => {
    if (filtered.length > 0) {
      const pages = [];

      for (let i = 1; i <= Math.ceil(filtered.length / itemsPerPage); i++) {
        pages.push(i);
      }
      setPageNumberLimit(pages.length);
    }
  }, [filtered]);

  const handlePageClick = (num) => {
    setcurrentPage(num);
  };

  const HandleChangeCheckBoxCat = (v) => {
    if (v.target.id === 'allCat' && v.target.checked) {
      onChangeCheckBox('allCat');
    } else if (v.target.id && !v.target.checked) {
      const filtered = selectedCat.filter((dt) => dt !== v.target.id);
      setSelectedCat(filtered);
      onChangeCheckBox({ category: [...filtered], brand: [...selectedBrand] });
    } else if (v.target.id === 'allCat' && !v.target.checked) {
      setSelectedCat([...selectedCat]);
      onChangeCheckBox({
        category: [...selectedCat],
        brand: [...selectedBrand],
      });
    } else {
      setSelectedCat([...selectedCat, v.target.id]);
      onChangeCheckBox({
        category: [...selectedCat, v.target.id],
        brand: [...selectedBrand],
      });
    }
  };

  const HandleChangeCheckBoxBrand = (v) => {
    if (v.target.id === 'allBrand' && v.target.checked) {
      onChangeCheckBox('allBrand');
    } else if (v.target.id && !v.target.checked) {
      const filtered = selectedBrand.filter((dt) => dt !== v.target.id);
      setSelectedBrand(filtered);
      onChangeCheckBox({ category: [...selectedCat], brand: [...filtered] });
    } else if (v.target.id === 'allBrand' && !v.target.checked) {
      setSelectedBrand([...selectedBrand]);
      onChangeCheckBox({
        category: [...selectedCat],
        brand: [...selectedBrand],
      });
    } else {
      setSelectedBrand([...selectedBrand, v.target.id]);
      onChangeCheckBox({
        category: [...selectedCat],
        brand: [...selectedBrand, v.target.id],
      });
    }
  };

  const OrderFromLowToHigh = () => {
    const sortedItems = [...filtered].sort((a, b) => a.price - b.price);
    const updatedItems = sortedItems.slice(indexOfFirstItem, indexOfLastItem);
    setCurrentItems(updatedItems);
  };

  const OrderFromHighToLow = () => {
    const sortedItems = [...filtered].sort((a, b) => b.price - a.price);
    const updatedItems = sortedItems.slice(indexOfFirstItem, indexOfLastItem);
    setCurrentItems(updatedItems);
  };
  const OrderFromHighRateToLow = () => {
    const sortedItems = [...filtered].sort((a, b) => b.rate - a.rate);
    const updatedItems = sortedItems.slice(indexOfFirstItem, indexOfLastItem);
    setCurrentItems(updatedItems);
  };

  return (
    <div
      className="productbody"
      style={{ direction: 'rtl', marginBottom: '30px' }}
    >
      <div style={{ direction: 'ltr', marginBottom: '30px' }}>
        <Productcount
          count={filtered.length}
          orderAsn={OrderFromLowToHigh}
          orderDesc={OrderFromHighToLow}
          orderByStar={OrderFromHighRateToLow}
        />
      </div>
      <Row>
        <Col xs="12" sm="12" md="12" lg="2">
          <div className="d-flex flex-column">
            <p
              style={{ fontWeight: '600', opacity: '0.7', fontSize: '24px' }}
              className="mb-1 mx-2 fs-4"
            >
              الفئة
            </p>

            <div
              style={{ fontSize: '14px', opacity: '0.8', fontWeight: '500' }}
            >
              <div className="d-flex flex-row">
                <input
                  type="checkbox"
                  onChange={HandleChangeCheckBoxCat}
                  id="allCat"
                  className="form-check-input p-1 mx-2"
                ></input>
                <label htmlFor="allCat" className="form-check-label ">
                  {'الكل'}
                </label>
              </div>
              {category.map((cat, i) => {
                return (
                  <div key={i} className="d-flex flex-row">
                    <input
                      type="checkbox"
                      onChange={HandleChangeCheckBoxCat}
                      id={cat}
                      className="form-check-input p-1 mx-2"
                    ></input>
                    <label htmlFor={cat} className="form-check-label ">
                      {cat}
                    </label>
                  </div>
                );
              })}
            </div>

            <p
              className="mx-2 mb-1 mt-3 fs-5"
              style={{ fontWeight: '600', opacity: '0.7', fontSize: '24px' }}
            >
              الماركة
            </p>

            <div
              style={{ fontSize: '14px', opacity: '0.8', fontWeight: '500' }}
            >
              <div className="d-flex flex-row">
                <input
                  type="checkbox"
                  id="allBrand"
                  onChange={HandleChangeCheckBoxBrand}
                  className="form-check-input mx-2"
                ></input>
                <label htmlFor="allBrand" className="form-check-label">
                  {'الكل'}
                </label>
              </div>
              {brand.map((v, i) => {
                return (
                  <div key={i} className="d-flex flex-row">
                    <input
                      type="checkbox"
                      id={v}
                      onChange={HandleChangeCheckBoxBrand}
                      className="form-check-input mx-2"
                    ></input>
                    <label htmlFor={v} className="form-check-label">
                      {v}
                    </label>
                  </div>
                );
              })}
            </div>

            <div
              className="mt-1 mx-2"
              style={{ fontSize: '14px', opacity: '0.8', fontWeight: '500' }}
            ></div>
          </div>
        </Col>

        <Col xs="12" sm="12" md="12" lg="10">
          <Row className="mt-3 justify-content-start-0">
            {currentItems.length === 0 && (
              <h3 className="text-center">لا يوجد منتجات</h3>
            )}
            {currentItems.length > 0 &&
              currentItems.map((data, i) => (
                <Col xs={12} sm={4} key={i}>
                  <Productitem key={data.id} admin={false} data={data} />
                </Col>
              ))}
          </Row>
          <div style={{ marginBottom: '100px' }}>
            <PaginationComponent
              pageCount={pageNumberLimit}
              handlePageClick={handlePageClick}
            />
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Productbody;
