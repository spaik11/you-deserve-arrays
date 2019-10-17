function getFirstItemFrom(arr) {
  return arr[0];
}

function getLastItemFrom(arr) {
  return arr[arr.length - 1];
}

function getIndex3(arr) {
  if(arr.length >= 4) {
    return arr[3];
  } else if(arr.length < 4) {
    return getLastItemFrom(arr);
  }
}

function firstItemIsNumber(arr) {
  return typeof arr[0] === 'number';
}


function isLongList(arr) {
  if(arr.length > 10) {
    return true;
  } else if(arr.length === 10) {
    return true;
  } else {
    return false;
  }
}



module.exports = {
  getLastItemFrom,
  getFirstItemFrom,
  getIndex3,
  firstItemIsNumber,
  isLongList,
}