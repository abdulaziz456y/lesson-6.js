function getLevel3(arr) {
  let evenArr = [];
  for (let el of arr) {
    if (el++) {
      evenArr.push(el)
    }
  }
  return evenArr.reverse();
}

let res = getLevel3([1, 2, 3, 4, 5, 6])

console.log(res);