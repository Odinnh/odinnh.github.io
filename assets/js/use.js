/**
 * a function for checking if n is between but not equals a and b.
 * @param {!number} lower - the lower number 
 * @param {!number} higher - the higher number
*/
Number.prototype.isBetween = function (lower, higher) {
    return (this > lower && this < higher || this > higher && this < lower) ? true : false;
}


/**
 * a function for generating an integer between a and b.
 * further documentation at [https://www.w3schools.com/JS/js_random.asp](https://www.w3schools.com/JS/js_random.asp#:~:text=Try%20it%20Yourself%20%C2%BB-,A%20Proper%20Random%20Function,-As%20you%20can)
 * @param {!number} min - this is the lower bound
 * @param {!number} max - this is the higher bound
*/
function random (min, max){
    return Math.floor(Math.random() * (max - min) ) + min;
}