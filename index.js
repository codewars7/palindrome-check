const palindrome = (str) => {
  // regex replaces all characters that ane not in char set
  // with ^
  let letters = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
  const arr = str.split(" ")
  const reversed = [];

  for (let i = letters.length - 1; i >= 0; i--){
    reversed.push(letters[i])
   }
  const rv = reversed.join("")
   if(rv == letters){
    return true;
   }
  else return false
}

console.log(palindrome("1 eye for of 1 eye."))
