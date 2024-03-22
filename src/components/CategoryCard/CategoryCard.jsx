import {
  Div,
  Img,
} from "./CategoryCard.styled";

import noPhoto from 'assets/images/jpg/productPhotos/no_photo.jpg';

const CategoryCard = ({ photo, categoryName }) => {
  // если будет ошибка, то использовать require.context в listOfPictures
  const fullPathPhoto = 'assets/images/jpg/catalogPhotos/' + photo;

  return (
    <Div>
      <div>
        <Img
          src={photo !== '' || photo ? fullPathPhoto : noPhoto}
          alt={'category ' && categoryName}
        />
      </div>
      <p>{categoryName}</p>
    </Div>
  );
};

export default CategoryCard;