


const counter = () => {
  let count = 0
  return {
    increment: () => count += 1,
    decrement: () => count -= 1,
    get: () => count
  }
}


const counterFn = counter()

counterFn.increment()
counterFn.increment()
counterFn.increment()
counterFn.increment()

counterFn.decrement()

console.log(counterFn.get());

