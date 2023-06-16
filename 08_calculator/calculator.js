const add = function(a , b) {
  return (a+b);
};

const subtract = function(a,b) {
	return (a-b);
};

const sum = function(num) {
	let ans = num.reduce((sum,item)=> sum+=item,0);

  return ans;
};

const multiply = function(a,...moreargs) {
  let len=moreargs.length;
  let ans =a;

  for(let i=0;i<len;i++)
  {
    ans*=moreargs[i];
  }
  return ans;
};

const power = function(a,b) {
	let ans=1;
  while(b--)
  {
    ans*=a;
  }

  return ans;
};

const factorial = function(n) {
  let ans=1;
	for(let i=1;i<=n;i++)
  {
    ans*=i;
  }

  return ans;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
