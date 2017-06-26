var a = Number(prompt('Enter a'));
var b = Number(prompt('Enter b'));
var c = Number(prompt('Enter c'));

document.write('a= ' + a +';');
document.write('b= ' + b +';');
document.write('c= ' + c +';');
document.write('<br>');

document.write('Equation: ' + a + 'x <sup>2</sup> + ' + b + 'x +  ' + c);
document.write('<br>');var result = quadraticEquation(a, b, c);
document.write(result);

function quadraticEquation(a, b, c) {
    var result;
    if (a === 0) {
        result = 'Equation is not quadratic, please enter a different from zero';
        return result;
    }


var d = calcD(a, b, c);
var x1 = Math.round((-b + Math.sqrt(d)) / 2 / a);
var x2 = Math.round((-b - Math.sqrt(d)) / 2 / a);
return 'x1 = ' + x1 + ', x2 = ' + x2;
}
function calcD(a, b, c) {
    return b * b - 4 * a * c;

}
