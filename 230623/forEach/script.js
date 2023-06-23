const app = document.getElementById('app')
const list = ['a','b','c','d']

list.forEach((item) => {
  const p =document.createElement('p')
  p.textContent = item
  app.appendChild(p)
})

console.log(list.length)