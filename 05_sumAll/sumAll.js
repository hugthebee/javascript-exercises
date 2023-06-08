const sumAll = function(a,b) {

    if(typeof a !== "number" || typeof b !== "number") return "ERROR";
    if(a<0 || b<0) return "ERROR";
    
    let ans=0;
    let start,end;
    if(a>b) {start=b; end=a;}
    else {start=a; end=b;}

    for(let i=start;i<=end;i++)
    {
        ans+=i;
    }

    return ans;
};

// Do not edit below this line
module.exports = sumAll;
