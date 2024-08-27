//Array Problem
//given an array of objects convert array such that arrays's value is equal to next whole object
const array = [
    { id: "one", next: "two", value: null },
    { id: "two", next: "three", value: null },
    { id: "three", next: "null", value: null }
]
const result = (array) => {
    let array2 = [];
    array2 = array;
    for (let i = array.length - 1; i > 0; i--) {
        array2[i - 1].value = array[i];
    }
    return array2;
}
console.log(result(array));
