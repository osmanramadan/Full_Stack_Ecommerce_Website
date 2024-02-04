import Carousel from 'react-bootstrap/Carousel';
import slider2 from '../../images/slider5.jpg';
import slider4 from '../../images/slider4.jpg';
import slider5 from '../../images/slider5.jpg';

function Slider() {
  return (
    <Carousel>
      <Carousel.Item interval={2000}>
        <div
          className="text-center"
          style={{ height: '350px', backgroundColor: '#FFFFFF' }}
        >
          <div>
            <img src={slider4} alt="First slide" />
          </div>
        </div>
      </Carousel.Item>

      <Carousel.Item interval={2000}>
        <div
          className="text-center"
          style={{ height: '350px', backgroundColor: '#FFFFFF' }}
        >
          <div>
            <img src={slider5} alt="second slide" />
          </div>
        </div>
      </Carousel.Item>

      <Carousel.Item interval={2000}>
        <div
          className="text-center"
          style={{ height: '350px', backgroundColor: '#FFFFFF' }}
        >
          <div>
            <img src={slider2} alt="third slide" />
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;
