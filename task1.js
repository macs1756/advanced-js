

const tests = {
  1: "({}(){}()())", //true 
  2: "({}()}{()())", //false
  3: "({}(){())())" //false
}


const fn = (exp) => {
  const arr = exp.split('')

  //
  const countOfFirstType = arr.reduce((acc, curr) => {
    if (curr === '(' || curr ===
      ')'
    ) {
      return acc = acc + 1
    }

    return acc
  }, 0)

  //
  const countOfSecondType = arr.reduce((acc, curr) => {
    if (curr === '(' || curr ===
      ')'
    ) {
      return acc = acc + 1
    }

    return acc
  }, 0)


  if (!Number.isInteger(countOfFirstType / 2)) return false
  if (!Number.isInteger(countOfSecondType / 2)) return false

  const arrCopy = [...arr]

  for (let i = 0; i < arr.length; i++) {

    const curr = {
      index: i,
      value: arr[i]
    }

    const next = {
      index: i + 1,
      value: arr[i + 1]
    }


    //check on exist
    if (curr.value && next.value) {

      //
      if (curr.value === "(" && next.value === ")") {
        arrCopy.splice(curr.index, 1)
        arrCopy.splice(next.index, 1)
      }

      //
      if (curr.value === "{" && next.value === "}") {
        arrCopy.splice(curr.index, 1)
        arrCopy.splice(next.index, 1)
      }
    }


  }


  console.log(arrCopy);





  return true
}

// NEED TO FIX IT
console.log(fn(tests[1]))
console.log(fn(tests[2]))
console.log(fn(tests[3]))
