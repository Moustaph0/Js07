function factorial(nbr){
    let i, f = 1;
    for(i = 1; i <= nbr; i++)  
    {
      f *= i;   
    }  
    console.log(f);
  }
  factorial(5);