

// It's works
const obj = {
  name: 'Max',
  getName () { return this.name }
}

// в даному випадку функція getName викликається в контексті лівої частини а тобто є привязка до obj
console.log(obj.getName())




//It's not
const obj2 = {
  name: 'Max',
  getName() { return this.name }
}

// просто посилання на функцію
const fn = obj2.getName

//console.log('fn2', fn()) // це просто посилання, this втрачено бо немає лівого операнта як контекст 

console.log('fn2', fn.call(obj2)) // явно вказуємо this і викликаємо її