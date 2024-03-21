import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import { listOfPictures } from 'components/ListOfPictures/ListOfPictures';
import { listOfPictures } from 'utilites/listOfPictures';

// import products from 'assets/json/products.json';

// import car1 from 'assets/images/auto/car-rent-1.jpg';
// import car2 from 'assets/images/auto/car-rent-2.jpg';
// import car3 from 'assets/images/auto/car-rent-3.jpg';
// import car4 from 'assets/images/auto/car-rent-4.jpg';
// import car5 from 'assets/images/auto/car-rent-5.jpg';

const ProductsSlider = ({ data, slidesToShow }) => {
  
  const createArray = () => {
    return (data + ';')
    .replace(';;', '')
    .split(';')
    .filter(el => el);
  };
  
  console.log(data);
  const photosArray = data ? createArray() : [];
  console.log(photosArray);
  
  const productPhotos = photosArray.length > 0 && listOfPictures(photosArray);
  // const slides = createArray();
  // console.log(slides);
  
  // const photos = productPhotos.map(item => item);


  // const index = products;

  // const slides = [...date];

  class CarsSlider extends React.Component {
    // slides = [
    //   <img src={car1} alt="car 1" style={{width: "300px", height: "200px"}}/>,
    //   <img src={car2} alt="car 2" style={{width: "300px", height: "200px"}}/>,
    //   <img src={car3} alt="car 3" style={{width: "300px", height: "200px"}}/>,
    //   <img src={car4} alt="car 4" style={{width: "300px", height: "200px"}}/>,
    //   <img src={car5} alt="car 5" style={{width: "300px", height: "200px"}}/>
    // ]
    render() {
      const settings = {
        dots: slidesToShow === 1 ? false : true, // Показать точки (индикаторы)
        infinite: true, // Бесконечная прокрутка
        speed: 3000, // Скорость анимации
        // slidesToShow: 4, // Количество отображаемых слайдов
        // slidesToScroll: 1, // Количество слайдов, прокручиваемых за раз
        slidesToShow: { slidesToShow }, // Количество отображаемых слайдов
        slidesToScroll: { slidesToShow }, // Количество слайдов, прокручиваемых за раз
        // autoplay: true,
        autoplay: false,
        autoplaySpeed: 0,
        cssEase: 'linear',
      };

      return (
        <div
          style={{
            width: '100%',
            height: '45px',
            margin: '0 auto',
            padding: '16px',
          }}
        >
          <Slider {...settings}>
            {productPhotos.map((photo, index) => (
                <div>
                  <img
                    src={photo}
                    alt={'slide ' + { index }}
                    // style={{ width: '300px', height: '200px' }}
                  />
                </div>
              ))}

              {/* // typePhoto.map(item => (
              //   <div>
              //     <img
              //       src={photo + `/${item}`}
              //       alt="car 1"
              //       style={{ width: '300px', height: '200px' }}
              //     />
              //   </div>
              // ))
            // )} */}
          </Slider>
          {/* настроить подсветку     */}
          {slidesToShow === 1 &&
            <ul>
              {productPhotos.map((photo, index) => (
                <li>
                {/* <div> */}
                  <img
                    src={photo}
                    alt={'slide ' + { index }}
                    style={{ width: '25px', height: '25px' }}
                  />
                {/* </div> */}
                </li>
              ))}
            </ul>
          }
        </div>
      );
    }
  }

  CarsSlider();
};

export default ProductsSlider;
