
var insertionSort = function(array) {
  for (var i=1; i < array.length; ++i) {
    var current = array[i]
    var count = i - 1
    for(;count >= 0 && array[count] > current; --count) {
      array[count+1] = array[count];
    }
    array[count+1] = current;
  }
}

module.exports = insertionSort;
