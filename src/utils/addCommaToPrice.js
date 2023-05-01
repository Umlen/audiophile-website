function addCommaToPrice(price) {
  return String(price).split('').reverse().reduce((arr, cur, index) => {
    if (index % 3 === 0 && index !== 0) {
      arr.push(',', cur);
    } else {
      arr.push(cur);
    }
    return arr;
  }, []).reverse().join('');
}

export default addCommaToPrice;