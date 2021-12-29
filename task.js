const array = [];
function naturalNumber() {
    for (var i = 1; i <= 100; i++) {
        array.push(i);
        
    }
const newArray = array.filter(number => (number % 4 === 0 || number % 7 === 0));
    console.log(newArray);
}
naturalNumber();

