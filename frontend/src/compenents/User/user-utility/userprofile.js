import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import Header from './header';
import Profilehook from '../../../hooks/user/profileHook';

function Userprofile() {
  const [
    user,
    show,
    handleShow,
    handleClose,
    _username,
    handleChangeUsername,
    _email,
    handleChangeEmail,
    _phone,
    handleChangePhone,
    oldPassword,
    handleChangeOldPassword,
    newPassword,
    handleChangeNewPassword,
    newConfirmPassword,
    handleChangeNewConfirmPassword,
    handleUpdateProfile,
    handleUpdatePassword,
  ] = Profilehook();

  return (
    <div>
      <div
        className="Userinfo"
        style={{
          fontSize: '15px',
          fontweight: '400',
          fontFamily: 'cairo',
          overflow: 'auto',
        }}
      >
        <Modal
          show={show}
          onHide={handleClose}
          style={{ direction: 'rtl', top: '45px', zIndex: '100000' }}
        >
          <Modal.Header>
            <Modal.Title
              style={{ fontFamily: 'cairo', backgroundColor: '#F9F9F9' }}
            >
              تعديل البيانات الشخصية
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="الايميل"
                  className="inputfield-start"
                  readOnly
                  onChange={handleChangeEmail}
                  defaultValue={user.email}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="اسم المستخدم"
                  className="inputfield-start"
                  onChange={handleChangeUsername}
                  defaultValue={user.username}
                />
              </Form.Group>
              <Form.Group className="mb-1">
                <Form.Control
                  type="text"
                  placeholder="رقم التلفون"
                  className="inputfield-start"
                  onChange={handleChangePhone}
                  defaultValue={user.phone}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button
              type="button"
              className="btn btn-success"
              style={{
                backgroundColor: '#157347',
                fontweight: 'bold',
                fontSize: '16px',
                fontFamily: 'cairo',
              }}
              onClick={handleClose}
            >
              تراجع
            </Button>
            <Button
              type="button"
              className="btn btn-dark"
              style={{
                backgroundColor: '#1C1F23',
                fontweight: 'bold',
                fontSize: '16px',
                fontFamily: 'cairo',
              }}
              onClick={handleUpdateProfile}
            >
              حفظ التعديلات
            </Button>
          </Modal.Footer>
        </Modal>

        <Row className="p-2">
          <Col xs="12" sm="6">
            <div className="mx-1 mt-2">
              الاسم:<span className="opacity-75 mx-3">{user.username}</span>
            </div>
          </Col>

          <Col xs="12" sm="6" className="text-start">
            <div className="mx-2 mt-1 opacity-75" onClick={handleShow}>
              <span className="mx-2">
                <FontAwesomeIcon icon={faPenToSquare} />
              </span>
              <span>تعديل</span>
            </div>
          </Col>
        </Row>

        <Row className="mx-0 mt-3">
          <div>
            رقم الهاتف:<span className="opacity-75 mx-2">{user.phone}</span>
          </div>
        </Row>

        <Row className="mx-0 mt-3">
          <div>
            الايميل:<span className="opacity-75 mx-2">{user.email}</span>
          </div>
        </Row>
      </div>

      <Row className="mt-4">
        <Header txt="تغير كملة المرور" m="1" />
        <Col xs="10" sm="8" md="7">
          <input
            className="inputfield mt-0"
            style={{ width: '100%' }}
            type="text"
            placeholder="ادخل كلمة المرور القديمة"
            value={oldPassword}
            onChange={handleChangeOldPassword}
            name="email"
          />
        </Col>

        <Col xs="10" sm="8" md="7">
          <input
            className="inputfield mt-1"
            style={{ width: '100%' }}
            type="text"
            placeholder="ادخل كلمة المرور الجديدة"
            value={newPassword}
            onChange={handleChangeNewPassword}
            name="email"
          />
          <input
            className="inputfield mt-1"
            style={{ width: '100%' }}
            type="text"
            placeholder="تاكيد كلمة المرور الجديدة"
            value={newConfirmPassword}
            onChange={handleChangeNewConfirmPassword}
            name="email"
          />
          <Row className="d-flex  justify-content-end">
            <input
              type="button"
              onClick={handleUpdatePassword}
              className="element-button-custom mx-1"
              value="حفظ كلمة السر"
            />
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default Userprofile;
