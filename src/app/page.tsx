"use client"
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import "./globals.css";


const ImageCarousel = () => {
  return (
    <><div >
      <Carousel
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={3000}
        showArrows={true}
        showStatus={false}
      >
        <div className="w-full h-[520px]">
          <img
            src="./slider3.jpg"
            alt="First Slide" />
        </div>
        <div>
          <img
            src="./slider3.jpg"
            alt="First Slide" />
        </div>
        <div>
          <img
            src="./slider3.jpg"
            alt="First Slide" />
        </div>
        {/* Add more slides as needed */}
      </Carousel>
    </div><h3>ddfdfd</h3></>
  );
};

export default ImageCarousel;
