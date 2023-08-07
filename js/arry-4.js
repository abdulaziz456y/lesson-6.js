function getLevel3(arr) {
  let evenArr = [];
  for (let el of arr) {
    if (el % 2 === 1) {
      evenArr.push(el)
    }
  }
  return evenArr;
}

let res = getLevel3([4, 5, 7, 8, 6, 9])

console.log(res);