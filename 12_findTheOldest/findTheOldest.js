const findTheOldest = function(arr) {
    let old = arr.map((item)=> 
    {
        let temp;
        if(item.yearOfDeath === undefined) temp = new Date().getFullYear() - item.yearOfBirth;
        else temp = item.yearOfDeath - item.yearOfBirth;
        return temp;
    });
    let max = old[0];
    let i=0;
    old.forEach((item,index)=>{if(item>max) {max = item; i=index;}});
    return arr[i];
};

// Do not edit below this line
module.exports = findTheOldest;
