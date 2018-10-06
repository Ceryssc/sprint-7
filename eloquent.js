//question 1

function min(a, b) {
    if (a < b)
      return a;
    else
      return b;
  }
  
  
  console.log(min(0, 10));
  // → 0
  console.log(min(0, -10));
  // → -10



//question 2. solution 1


function isEven (n) {
    return (n%2 == 0) ? true: false;
  }
  
  console.log(isEven(50));
  // → true
  console.log(isEven(75));
  // → false
  console.log(isEven(-1));
  // → ??

  
//I found two solutions, not sure which is better. solution 2:

function isEven(n) {
    if (n == 0)
      return true;
    else if (n == 1)
      return false;
    else if (n < 0)
      return isEven(-n);
    else
      return isEven(n - 2);
  }


  console.log(isEven(50));
  // → true
  console.log(isEven(75));
  // → false
  console.log(isEven(-1));
  // → ??

  
//question 3. Part 1 return the 'B's 

function countBs(string){
    let count = 0;
    for(let i = 0; i < string.length; i++){
      if(string[i] == "B"){
        count ++;
      }
    }
    return count;
  }
  
  console.log(countBs("BBC"));
  // → 2

  //part 2

  function countChar(string, char){
    let count = 0;
    for(let i = 0; i < string.length; i++){
      if(string[i] == char){
        count++;
      }
    }
    return count;
  }

  //part 3


function countChar(string, char){
    var count = 0;
    for(let i = 0; i < string.length; i++){
      if(string[i] == char){
        count++;
      }
    }
    return count;
  
}
function countBs (string) {
  return countChar(string, "B");
}



console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4
