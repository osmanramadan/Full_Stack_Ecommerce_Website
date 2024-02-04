import React from 'react';
import { Carousel } from 'react-bootstrap';

function DiscountBar() {
  return (
    <Carousel>
      <Carousel.Item interval={2000}>
        <div
          className="text-center"
          style={{
            fontSize: '30px',
            fontWeight: 'bold',
            height: '100px',
            paddingTop: '21px',
            backgroundColor: '#090808',
            color: 'white',
          }}
        >
          خصومات تصل الي 50 فى الميه على الأجهزة الكهربيه
        </div>
      </Carousel.Item>

      <Carousel.Item interval={2000}>
        <div
          className="text-center"
          style={{
            fontSize: '30px',
            fontWeight: 'bold',
            height: '100px',
            paddingTop: '21px',
            backgroundColor: '#090808',
            color: 'white',
          }}
        >
          خصومات تصل الي 40 فى الميه على الملابس
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default DiscountBar;
