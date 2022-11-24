import Carousel from 'react-bootstrap/Carousel';
import images from '../../assets/images';
import './Carousel.scss';

function CarouselFade() {
  return (
    <div className="carousel-container">
      <svg className="waves" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fillOpacity="1" d="M0,96L1440,224L1440,0L0,0Z" /></svg>
      <Carousel className="carousel" fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={images.slideOne}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 className="h2">Worldwide Website</h3>
            <p className="fw-bold">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Facere reprehenderit vitae, numquam quo iusto asperiores consectetur illum
              iste ducimus aliquid.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={images.slideTwo}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3 className="h2">We have the biggest reserve of Bitcoin</h3>
            <p className="fw-bold">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Facere reprehenderit vitae, numquam quo iusto asperiores consectetur illum
              iste ducimus aliquid.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={images.slideThree}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3 className="h2">We count with the best techonology</h3>
            <p className="fw-bold">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Facere reprehenderit vitae, numquam quo iusto asperiores consectetur illum
              iste ducimus aliquid.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselFade;
