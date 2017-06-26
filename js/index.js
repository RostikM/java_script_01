var a = Number(prompt('Enter a'));
var b = Number(prompt('Enter b'));
var c = Number(prompt('Enter c'));

document.write('a= ' + a + ';');
document.write('b= ' + b + ';');
document.write('c= ' + c + ';');
document.write('<br>');

document.write('Equation: ' + a + 'x <sup>2</sup> + ' + b + 'x +  ' + c);
document.write('<br>');
var result = quadraticEquation(a, b, c);
document.write(result);

function quadraticEquation(a, b, c) {
    var result;
    if (a === 0) {
        result = 'Equation is not quadratic, please enter a different from zero';
        return result;
    }

    // Closure
    (function() {
        /**
         * Decimal adjustment of a number.
         *
         * @param {String}  type  The type of adjustment.
         * @param {Number}  value The number.
         * @param {Integer} exp   The exponent (the 10 logarithm of the adjustment base).
         * @returns {Number} The adjusted value.
         */
        function decimalAdjust(type, value, exp) {
            // If the exp is undefined or zero...
            if (typeof exp === 'undefined' || +exp === 0) {
                return Math[type](value);
            }
            value = +value;
            exp = +exp;
            // If the value is not a number or the exp is not an integer...
            if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
                return NaN;
            }
            // Shift
            value = value.toString().split('e');
            value = Math[type](+(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp)));
            // Shift back
            value = value.toString().split('e');
            return +(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp));
        }

        // Decimal round
        if (!Math.round10) {
            Math.round10 = function(value, exp) {
                return decimalAdjust('round', value, exp);
            };
        }
        // Decimal floor
        if (!Math.floor10) {
            Math.floor10 = function(value, exp) {
                return decimalAdjust('floor', value, exp);
            };
        }
        // Decimal ceil
        if (!Math.ceil10) {
            Math.ceil10 = function(value, exp) {
                return decimalAdjust('ceil', value, exp);
            };
        }
    })();

    var d = calcD(a, b, c);
    var x1 = (-b + Math.sqrt(d)) / 2 / a;
    var x2 = (-b - Math.sqrt(d)) / 2 / a;
    var x1 = Math.round10(x1, -3);
    var x2 = Math.round10(x2, -3);
        
    return 'x1 = ' + x1 + ', x2 = ' + x2;
}

function calcD(a, b, c) {
    return b * b - 4 * a * c;

}
