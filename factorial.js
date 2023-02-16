function factorial(n){
    let i, f = 1;
    for(i = 1; i <= n; i++)  
    {
      f *= i;   
    }  
    console.log(f);
  }

  factorial(5);

module.exports = factorial;
