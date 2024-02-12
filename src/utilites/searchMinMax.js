// const findMinMaxPrice = (filteredProducts) => {
export const searchMinMaxPrice = filteredProducts => {
  const max = filteredProducts.reduce(
    (accumulator, currentValue) =>
      (accumulator =
        currentValue.price > accumulator ? currentValue.price : accumulator),
    0
  );

  const min = filteredProducts.reduce(
    (accumulator, currentValue) =>
      (accumulator =
        currentValue.price < accumulator ? currentValue.price : accumulator),
    max
  );

  return [min, max];
};

// export default findMinMaxPrice;