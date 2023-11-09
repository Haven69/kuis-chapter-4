function reversenum(num) {
    let str = num.toString();
    
    let reversed = str.split('').reverse().join('');
    
    return reversed;
  }
  
  console.log(reversenum(123));  // Output: 321
  console.log(reversenum(5872)); // Output: 2785