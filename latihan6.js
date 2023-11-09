
function addnumber(...numbers) {
  let num = 0;
  for (let i = 0; i < numbers.length; i++) {
    num += numbers[i];
  }
  return num;
}

console.log(addnumber(2, 4, 5)); // 11
console.log(addnumber(10, 45, 34, 130)); // 219

