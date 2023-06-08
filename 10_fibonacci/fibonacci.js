const fibonacci = function(num) {
    if(num<0) return "OOPS";

    num = +num;
    let a=1;
    let sum=0;
    let temp;
    for(let i=0;i<(num);i++)
    {
        temp = sum;
        sum += a;
        a = temp;
    }

    return sum;
};

// Do not edit below this line
module.exports = fibonacci;
