// const findMinMaxPrice = (filteredProducts) => {
export const findMinMaxPrice = (filteredProducts) => {
  const max = filteredProducts.reduce((accumulator, currentValue) => (
    accumulator = currentValue.price > accumulator ? currentValue.price : accumulator
  ), 0
  );
    
  const min = filteredProducts.reduce((accumulator, currentValue) => (
    accumulator = currentValue.price < accumulator ? currentValue.price : accumulator
  ), max
  );
  
  return (max, min)
};

// export default findMinMaxPrice;