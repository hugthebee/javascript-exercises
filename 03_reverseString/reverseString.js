const reverseString = function(string) {
    let len = string.length;
    let array = string.split("");
    let ans = "";

    for(let i=0;i<len;i++)
    {
        if(array[len-i-1]===null || array[len-i-1]===undefined)
        {
            continue;
        }
        ans += `${array[len-i-1]}`;
    }
    return ans;
};

// Do not edit below this line
module.exports = reverseString;
