const array = [];
function naturalNumber() {
    for (var i = 1; i <= 100; i++) {
        array.push(i);
        
    }
const newArray = array.filter(arra => (arra % 4 === 0 || arra % 7 === 0));
    console.log(newArray);
}
naturalNumber();

 


// const array = [1, 2, 3, 4,5];
// array.map(array => array * 2);