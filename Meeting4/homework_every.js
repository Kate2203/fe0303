// Метод every() проверяет, удовлетворяют ли все элементы массива условию, заданному в передаваемой функции.
function every(arr, condition) {
    for (let i=0; i<arr.length; i++) {
        if ( !i===condition ) {
            return false;
        }
    }
    function elem(el) {
        if ( el === condition) return true;
    }
    return true;
    };
    /*var every = function(arr, callback, thisArg) {
        var i, length = arr.length;
        for (i = 0; i < length; i = i + 1) {
          if (!callback.call(thisArg, arr[i], i, arr)) {
            return false;
          }
        }
        return true;
      };*/
    
    console.log( every([1, 2, 3, 4, 5], function(el) { return el < 3; }) ); // false
    console.log( every([1, 2, 3, 4, 5], function(el) { return el > 0; }) ); // true