import React from 'react';
import { Container, Col, Row, Button, Spinner } from 'react-bootstrap';
import Admintabs from './admin-utility/admintabs';
import Admintitles from './admin-utility/admintitles';
import FileChooser from './admin-utility/imagechooser';
import addBrandHook from '../../hooks/brand/addBrandHook';

function Addbrand() {
  const [
    onSubmit,
    handleImageInputChange,
    handleNameInputChange,
    img,
    brandname,
    loading,
  ] = addBrandHook();

  return (
    <div style={{ marginTop: '105px', direction: 'rtl', height: '100vh' }}>
      <Container>
        <Row>
          <Col xs="0" sm="0" md="3" lg="2" className="admin-tabs1">
            <Admintabs />
          </Col>

          <Col xs="12" sm="12" md="9" lg="10">
            <Row className="mt-2 d-flex justify-content-between">
              <Col xs="6">
                <Admintitles txt="اضف ماركه جديده" />
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

            <Row className="mt-4">
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
                صوره الماركه{' '}
              </Col>
              <Col xs="12" className="mt-2">
                <FileChooser handleSelect={handleImageInputChange} img={img} />
              </Col>
            </Row>

            <Row className="mt-3">
              <Col xs="8">
                <input
                  className="inputfield-start mt-0"
                  style={{ width: '100%' }}
                  type="text"
                  placeholder="اسم الماركه"
                  value={brandname}
                  onChange={handleNameInputChange}
                />
              </Col>
              <Col xs="8" className="text-start p-0">
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
            {loading == false ? (
              <Button style={{ backgroundColor: '#F9F9F9', border: '#F9F9F9' }}>
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
        </Row>
      </Container>
    </div>
  );
}

export default Addbrand;
