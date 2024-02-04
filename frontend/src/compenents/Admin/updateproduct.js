import React from 'react';
import { Container, Col, Row, Button, Spinner } from 'react-bootstrap';
import Admintabs from './admin-utility/admintabs';
import Admintitles from './admin-utility/admintitles';
import Textarea from '../Utility/Textarea';
import Categorydropdown from './admin-utility/categorydropdown';
import Multiselection from './admin-utility/multiselection';
import Branddropdown from './admin-utility/branddropdown';
import updateProductHook from '../../hooks/product/updateProductHook';
import MultiImageInput from 'react-multiple-image-input';
import { CompactPicker } from 'react-color';
import { useLocation, useParams } from 'react-router-dom';
import add from '../../images/add.png';
import { useEffect } from 'react';

function Updateproduct() {
  const prodId = useParams();

  const location = useLocation();

  const productData = location.state.productData;

  const [
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
  ] = updateProductHook();

  useEffect(() => {
    handleChangeId(productData.id);
  }, [prodId]);

  useEffect(() => {
    setDesc(productData.pdesc);
    setTitle(productData.ptitle);
    setPrice(productData.price);
    setDiscount(productData.discount);
    setCatname(productData.category);
    setSubCategory(
      productData.subcategory.map((v, _i) => {
        return { value: v, label: v };
      }),
    );
    setBrand(productData.brand);
    setColors(productData.colors);
    setImages(
      productData.imagesData.map((v, _i) => {
        return `data:image/jpeg;base64,${v}`;
      }),
    );
  }, [productData]);

  return (
    <div style={{ marginTop: '105px', direction: 'rtl' }}>
      <Container>
        <Row>
          <Col xs="0" sm="0" md="3" lg="2" className="admin-tabs1">
            <Admintabs />
          </Col>

          <Col xs="12" sm="12" md="9" lg="10">
            <Row className="mt-2 d-flex justify-content-between">
              <Col xs="6">
                <Admintitles txt="تعديل منتج" />
                {loading == false ? (
                  <Button
                    style={{ backgroundColor: '#F9F9F9', border: '#F9F9F9' }}
                  >
                    <Spinner
                      style={{ color: 'black' }}
                      as="span"
                      animation="grow"
                      size="sm"
                      role="status"
                      aria-hidden="true"
                    />
                    ' '
                    <Spinner
                      style={{ color: 'black' }}
                      as="span"
                      animation="grow"
                      size="sm"
                      role="status"
                      aria-hidden="true"
                    />
                    ' '
                    <Spinner
                      style={{ color: 'black' }}
                      as="span"
                      animation="grow"
                      size="sm"
                      role="status"
                      aria-hidden="true"
                    />
                  </Button>
                ) : (
                  ''
                )}
              </Col>

              <Col
                xs="6"
                className=" d-flex flex-row align-items-center justify-content-end"
              >
                <div className="admin-tabs2">
                  <Admintabs icon="true" />
                </div>
              </Col>
            </Row>

            <Row className="mt-3">
              <Col xs="8">
                <div className="mx-2" style={{ width: '100%' }}>
                  <MultiImageInput
                    images={images}
                    setImages={onChangeImages}
                    theme={'light'}
                    allowCrop={false}
                    max={4}
                  />
                </div>
                <input
                  className="inputfield-start mt-0 px-2"
                  style={{ width: '100%' }}
                  type="text"
                  placeholder="اسم المنتج"
                  value={title}
                  onChange={onChangeTitle}
                />
                <Textarea
                  rows={4}
                  txt="وصف المنتج"
                  value={desc}
                  onChange={onChangeDesc}
                />
                <input
                  className="inputfield-start mt-3 px-2"
                  style={{ width: '100%' }}
                  type="number"
                  placeholder="الخصم"
                  value={discount}
                  onChange={onChangeDiscount}
                />
                <input
                  className="inputfield-start px-2"
                  style={{ width: '100%' }}
                  type="number"
                  placeholder="سعر المنتج"
                  value={price}
                  onChange={onChangePrice}
                />
                <Categorydropdown
                  catname={catname}
                  changecat={onChangeCatName}
                />
                <Multiselection
                  subcatname={subcategory}
                  changesubcat={onChangeSubCategory}
                />{' '}
                <Branddropdown brand={brand} changebrand={onChangeBrand} />
                <Row>
                  <Col
                    xs="12"
                    className="px-4"
                    style={{
                      fontSize: '15px',
                      fontweight: '400',
                      fontFamily: 'cairo',
                      opacity: '0.6',
                    }}
                  >
                    الالوان المتاحه للمنتج
                  </Col>
                  <Col xs="12" className="d-flex" style={{ direction: 'rtl' }}>
                    <div className="mt-1 d-flex">
                      {colors.length >= 1
                        ? colors.map((color, index) => {
                            return (
                              <div
                                key={index}
                                onClick={() => removeColor(color)}
                                className="circle-color  mt-1 mx-1"
                                style={{ backgroundColor: color }}
                              ></div>
                            );
                          })
                        : null}
                      <img
                        onClick={onChangeColor}
                        src={add}
                        width="30px"
                        height="35px"
                        style={{ cursor: 'pointer' }}
                      />
                      {showColor === true ? (
                        <CompactPicker
                          onChangeComplete={handelChangeComplete}
                        />
                      ) : null}
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col xs="8" className="text-start p-0 mt-2">
                <button
                  style={{ width: '140px' }}
                  className="element-button-custom"
                  onClick={onSubmit}
                >
                  {' '}
                  حفظ التعديلات
                </button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Updateproduct;
