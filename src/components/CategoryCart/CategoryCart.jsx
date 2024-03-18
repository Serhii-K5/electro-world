import {
  Div,
  Img,
} from "./CategoryCart.styled";

import photo from 'assets/images/jpg/productPhoto/no_photo.jpg';

const CategoryCart = ({ categoryName }) => {
  return (
    <Div>
      <div>
        {/* <Img src={photo} alt={'category ' && categoryName} width={'150px'} height={'150px'}/> */}
        <Img src={photo} alt={'category ' && categoryName} />
      </div>
      <p>{categoryName}</p>
    </Div>
  );
};

export default CategoryCart;