import {
  Div,
} from "./CategoryCart.styled";

import photo from "assets/images/jpg/no_photo.jpg";

const CategoryCart = ({ categoryName }) => {
  return (
    <Div>
      <div>
        <img src={photo} alt={'category ' && categoryName} width={'150px'} height={'150px'}/>
      </div>
      <p>{categoryName}</p>
    </Div>
  );
};

export default CategoryCart;