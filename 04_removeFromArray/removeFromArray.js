const removeFromArray = function(nums, ...moreargs) {
    let index;
    let len=nums.length;
    let size = moreargs.length;

    for(let i=0;i<len;i++)
    {
        for(let j=0;j<size;j++)
        {
            if(nums[i] === moreargs[j]){
                nums.splice(i,1);
                moreargs.splice(j,1);
                i--;
                len--;
                size--;
                j--;
                break;
            }
        }
    }
    return nums;
};

// Do not edit below this line
module.exports = removeFromArray;
