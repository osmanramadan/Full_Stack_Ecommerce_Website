import React from 'react';
import { Container } from 'react-bootstrap';
import Caption from '../Utility/Hometitles';
import Productitems from './Productitems';
import DiscountBar from './DiscountBar';
import Branditems from './Branditems';
import Slider from './Slider';
import Categoryitems from './Categoryitems';

function Homepage() {
  return (
    <div>
      <Slider />
      <Container>
        <Caption title="التصنيفات" target="allcategory" />
        <Categoryitems />
        <Caption title="أحدث المنتجات" target="products" />
        <Productitems prodadmin={false} />
        <DiscountBar />
        <Caption title="أحدث الازياء" target="products" />
        <Productitems newclothes={true} />
        <Caption title="أشهر الماركات" target="allbrands" />
        <Branditems />
      </Container>
    </div>
  );
}

export default Homepage;
