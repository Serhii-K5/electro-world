
// const listOfPictures = ({ photosArray }) => {
// export const listOfPictures = ({ photosArray }) => {
export const listOfPictures = ( photosArray ) => {
  // Получаем список всех изображений из папки (может быть и асинхронно)
  const images = require.context(
    'assets/images/jpg/productPhotos',
    false,
    /\.(png|jpe?g|svg)$/
  );

  // Функция, которая фильтрует изображения по заданному параметру
  const filterImagesByParameter = () => {
    const filteredImages = [];
    photosArray.map(photo => {
      return images.keys().forEach(key => {
        if (key.includes(photo)) {
          filteredImages.push(images(key));
        }
      })
    });
    return filteredImages;
  };

  // Получаем массив отфильтрованных изображений
  return filterImagesByParameter();
};

// export default listOfPictures;

// // import React from 'react';

// // export const listOfPictures = ({ заданныйПараметр }) => {
// // export const listOfPictures = photosArray => {
// const ListOfPictures = (photosArray) => {
//   // Получаем список всех изображений из папки (может быть и асинхронно)
//   const images = require.context(
//     'assets/images/jpg/productPhoto',
//     false,
//     /\.(png|jpe?g|svg)$/
//   );

//   // Функция, которая фильтрует изображения по заданному параметру
//   const filterImagesByParameter = (photosArray) => {
//     const filteredImages = [];
//     // images.keys().forEach(key => {
//     //   if (key.includes(заданныйПараметр)) {
//     //     filteredImages.push(images(key));
//     //   }
//     // });
//     photosArray.map(photo => {
//       return images.keys().forEach(key => {
//         if (key.includes(photo)) {
//           filteredImages.push(images(key));
//         }
//       })
//     });

//     return filteredImages;
//   };

//   // Получаем массив отфильтрованных изображений
//   return filterImagesByParameter();
//   // const filteredImages = filterImagesByParameter();

//   // return (
//   //   <div>
//   //     {filteredImages.map((image, index) => (
//   //       <img key={index} src={image.default} alt={`Image ${index}`} />
//   //     ))}
//   //   </div>
//   // );
// };

// export default ListOfPictures;
// // export listOfPictures;
