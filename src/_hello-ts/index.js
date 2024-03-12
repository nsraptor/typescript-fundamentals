/**
 * This file contains the "hello world" example shown in
 * the beginning of the TypeScript Fundamentals course.
 *
 * This code is not intended to be executed
 * and is for demonstration purposes, only.
 *
 * The code is contained inside of an anonymous function,
 * which allows it to compile as its scope is contained to the function.
 */
(function () {
    var x = 7;
    var y = 11;
    var sum = x + y;
    var result = "The sum of ".concat(x, " and ").concat(y, " is ").concat(sum);
    console.log(result);
});
