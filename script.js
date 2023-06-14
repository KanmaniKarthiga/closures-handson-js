// Q2. Guess the output
let count = 0;
(function () {
    if (count === 0) {
        let count = 1;
        console.log(count); // What is logged?
    }
    console.log(count); // What is logged?
})();
// Output is 1 ,0

// Q3. Guess the output
for (var i = 0; i < 3; i++) {
    setTimeout(function log() {
        console.log(i); // What is logged?
    }, 1000);
}
// Output is 3,3,3

// Q4.  Write a code to calculate area of a rectangle using inner function. In this case outer function should accept parameter length and inner function should accept parameter breadth.
function outer(length) {
    function inner(breadth) {
        console.log(length * breadth)
    }
    inner(20)
}
outer(30)
// Output will be 600.

// Q5. Take a variable in outer function and create an inner function to increase the counter every time it is called
function outer1(){
    var count = 0
    function inner1(){
        return count += 1
    }
    return inner1
}
var result = outer1()
console.log(outer1())

// Q6."Print Output"
var a = 12;
(function () {
  alert(a);
})();
// Output is 12

// Q7. "Print Output"
var a = 10;
var x = (function () {
    var a = 12;
    return function () {
      alert(a);
    };
  })();
  x();
// Output is 12

// Q8. "Print Output"
var globalVar = "xyz"

(function outerFunc(outerArg) {
    var outerVar = 'a';
    
    (function innerFunc(innerArg) {
    var innerVar = 'b';
    
    console.log(
        "outerArg = " + outerArg + "\n" +
        "innerArg = " + innerArg + "\n" +
        "outerVar = " + outerVar + "\n" +
        "innerVar = " + innerVar + "\n" +
        "globalVar = " + globalVar);
    
    })(456);
})(123);