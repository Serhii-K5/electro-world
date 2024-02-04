
const createMemoArray = memo => {
  return (memo + ';')
    .replace(';;', '')
    .split(';')
    .map(item => {
      const arr = item.split(':');
      return (
        arr.length > 0 &&
        arr[0] !== '' && {
          key: arr[0].trim(),
          value: arr.length > 0 ? arr[1].trim() : '',
        }
      );
    })
    .filter(el => el);
};

export default createMemoArray;