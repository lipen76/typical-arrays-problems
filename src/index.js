exports.min = function min (array) {
  if(array === undefined || array.length === 0) {
    return 0;
}
  return Math.min.apply(null, array);
  
}

exports.max = function max (array) {
  if(array === undefined || array.length === 0) {
    return 0;
}
  return Math.max.apply(null, array);
}

exports.avg = function avg (array) {
  let sum = 0;
  let count = 0;
  if(array === undefined || array.length === 0) {
    return 0;
}
  for (let i = 0; i < array.length; i++) {
    sum = sum + array[i];
    count +=1; 
  }
  return sum / count;
}
