function getFirstItemFrom(array) {
  return array[0];
}

function getLastItemFrom(array) {
  return array[array.length - 1];
}

function getIndex3(array) {
  if(array.length >= 4) {
    return array[3];
  } else if(array.length < 4) {
    return array[array.length - 1];
  }
}

function firstItemIsNumber(array) {
  if(typeof array[0] == 'number') {
    return true;
  } else {
    return false;
  }
}

function isLongList(array) {
  if(array.length > 10) {
    return true;
  } else if(array.length === 10) {
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