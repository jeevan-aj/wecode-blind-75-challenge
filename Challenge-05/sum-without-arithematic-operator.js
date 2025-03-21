/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
    
    while (b !== 0) {
        let carry = a & b; // Find carry bits
        a = a ^ b;         // Add without carry
        b = carry << 1;    // Shift carry left
    }
    return a;

};