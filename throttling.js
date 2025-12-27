//throttle limits the frequency of calls



const fnExample = (name) => {
  console.log(`I called by ${name}`);
}

const throttle = (fn, delay = 100) => {
  let limitEnable = false

  return (name) => {
    if (limitEnable) return

    limitEnable = true

    fn(name)

    setTimeout(() => {
      limitEnable = false
    }, delay)

  }

}


const throttledFn = throttle(fnExample)

//very often
throttledFn('Max')
throttledFn('Ira')
throttledFn('Roman')

//after 200ms
setTimeout(() => {
  throttledFn('Teddy')
}, 700)


