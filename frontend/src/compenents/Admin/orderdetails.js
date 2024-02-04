import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import Admintabs from './admin-utility/admintabs';
import Admintitles from './admin-utility/admintitles';
import { useLocation } from 'react-router-dom';
import Cartitem from '../Cart/cart-utility/cartitem';
import CustomerDetails from './admin-utility/customerDetails';

function OrderDetails() {
  const location = useLocation();
  let Data;

  try {
    Data = location.state.Data;
  } catch (v) {
    nav('/admin/manage-orders');
    return;
  }
  return (
    <div style={{ marginTop: '105px', direction: 'rtl' }}>
      <Container>
        <Row>
          <Col xs="0" sm="0" md="3" lg="2" className="admin-tabs1">
            <Admintabs />
          </Col>

          <Col xs="12" sm="12" md="9" lg="10">
            <div className="order-num-details">
              <Row className="mt-2 d-flex justify-content-between">
                <Col xs="6">
                  <Admintitles txt={'تفاصيل الطلب رقم' + '#' + Data.id} />
                </Col>
                <Col
                  xs="6"
                  className=" d-flex flex-row align-items-center justify-content-end"
                >
                  <div className="admin-tabs2">
                    <Admintabs icon="true" />
                  </div>
                </Col>

                <div className="mt-1">
                  {Data.items.length > 0 &&
                    Data.items.map((v, _i) => {
                      return <Cartitem item={v[0]} qut={v[1]} colors={v[2]} />;
                    })}
                </div>
                <CustomerDetails
                  orderid={Data.id}
                  curState={Data.order_status}
                  info={Data.userinfo[0]}
                  price={Data.price}
                />
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default OrderDetails;
