import React from 'react';
import './ImageCarousel.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.css';

const ImageCarousel = ({ year }) => {
  const importAll = r => {
    return r.keys().map(r);
  };

  let images;
  switch (year.toString()) {
    case '2014':
      images = importAll(
        require.context('./../../img/slider/2014', false, /\.(png|jpe?g|svg)$/i)
      );
      break;

    case '2015':
      images = importAll(
        require.context('./../../img/slider/2015', false, /\.(png|jpe?g|svg)$/i)
      );
      break;
    case '2016':
      images = importAll(
        require.context('./../../img/slider/2016', false, /\.(png|jpe?g|svg)$/i)
      );
      break;
    case '2017':
      images = importAll(
        require.context('./../../img/slider/2017', false, /\.(png|jpe?g|svg)$/i)
      );
      break;
    case '2018':
      images = importAll(
        require.context('./../../img/slider/2018', false, /\.(png|jpe?g|svg)$/i)
      );
      break;
    case '2019':
      images = importAll(
        require.context('./../../img/slider/2019', false, /\.(png|jpe?g|svg)$/i)
      );
      break;
    default:
      images = [];
  }

  return (
    images.length > 0 && (
      <Carousel
        infiniteLoop={true}
        useKeyboardArrows={true}
        swipeable={true}
        emulateTouch={true}
        dynamicHeight={true}
        showThumbs={false}
      >
        {images.map(image => (
          <div key={image}>
            <img src={image} alt={image}></img>
          </div>
        ))}
      </Carousel>
    )
  );
};

export default ImageCarousel;
