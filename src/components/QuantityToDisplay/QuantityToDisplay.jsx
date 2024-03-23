import {
  Form,
  Input,
  Img,
  Select,
  Option,
} from "./QuantityToDisplay.styled";

import chevron from "assets/images/svg/chevron-down.svg";


const QuantityToDisplay = ({ itemsPerPage, isFocus, handleFocus, handleChange }) => {
  return (
    <Form name="Form">
      <div
        onClick={handleFocus}
        // onMouseOver={handleFocus}
      >
        <Img src={chevron} alt="chevron down" />
        <Input
          type="text"
          value={itemsPerPage}
          // onMouseOver={handleFocus}
          onChange={handleFocus}       
        />
      </div>
      {isFocus && <Select name="quantityToDisplay" size="5">
        {/* <option value="8" selected="selected" onClick={() => handleChange(8)}>8</option> */}
        {/* <Option value="8" onClick={() => handleChange(8)}>8</Option> */}
        <Option value="10" onClick={() => handleChange(10)}>10</Option>
        <Option value="20" onClick={() => handleChange(20)}>20</Option>
        <Option value="50" onClick={() => handleChange(50)}>50</Option>
        <Option value="100" onClick={() => handleChange(100)}>100</Option>
      </Select>}
    </Form>
  )
};

export default QuantityToDisplay;