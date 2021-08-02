
function fizzBuzz() {
   let fizzArray = [];
    for (let a = 1; a < 101; a++) {
    if (a % 3 === 0 && a % 5 === 0) {
       fizzArray.push("fizzBuzz");
    } else if (a % 5 === 0) {
       fizzArray.push("buzz");
    } else if (a % 3 === 0) {
       fizzArray.push("fizz");
    } else {
       fizzArray.push(a);
    }
}
return fizzArray;
}
console.log(fizzBuzz());

