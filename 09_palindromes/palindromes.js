const palindromes = function (str) {
    let arr = (str.toLowerCase()).split("");
    let len = arr.length;

    if(arr[len-1]==="." || arr[len-1]==="!" || arr[len-1]===","||arr[len-1]==="?") arr.splice(len-1,1);
    for(let i=0;i<len;i+=0)
    {
        if(arr[i]==="." || arr[i]==="!" || arr[i]===","||arr[i]==="?"||arr[i]===":" || arr[i]===" ")
        {
            arr.splice(i,1);
            len--;
            i--;
        }
        i++;
    }
    
    let rarr = arr.reverse();
    len = rarr.length;
    for(let i =0;i<len;i++)
    {
        if(rarr[i] !== arr[len-i-1]) return false;
    }

    return true;

};

// Do not edit below this line
module.exports = palindromes;
