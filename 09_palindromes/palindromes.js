const palindromes = function (str) {
    let lower = str.toLowerCase().replace(/[^a-z]/g, "");
    if(lower.split("").reverse().join("")===lower) return true;
    return false;

};

// Do not edit below this line
module.exports = palindromes;
