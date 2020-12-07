function array() {
    let arr = Object.create(array.prototype);
    Object.defineProperty(arr, 'length', {
        value: 0,
        enumerable: false,
        writable: true
    });
    for (key in arguments) {
        arr[key] = arguments[key];
        arr.length++;
    }
    return arr;
}

array.prototype.push = function (item) {;
    this[this.length] = item;
    this.length++;
    return this.length;
}

array.prototype.pop = function (item) {
    this.length--;
    const removed = this[this.length];
    delete this[this.length];
    return removed;
}


array.prototype.filter = function (cb) {
    let result = array();

    for (let index in this) {
        if (this.hasOwnProperty(index)) {
            const element = this[index];
            if (cb(element, index)) {
                result.push(element);
            }
        }
    }
    return result;
}

var arr1 = new array('Joe', 'Pierre');
console.log(arr1.push('Fred'));
console.log(arr1.push('Jamal'));
console.log(arr1.push('Frank'));
console.log(arr1.pop());
console.log(arr1);
var arr2 = arr1.filter((elem) => elem.charAt(0) !== 'P');
console.log(arr2.length);