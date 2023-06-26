const title = document.getElementById('title')
const plus = document.getElementById('plus')
const minus = document.getElementById('minus')
const change = document.getElementById('change')
let index = 16;

plus.addEventListener('click' , () => {
  index++
  title.style.fontSize = `${index}px`
})

minus.addEventListener('click' , () => {
  index--
  title.style.fontSize = `${index}px`
})

change.addEventListener('click' , () => {
  setTimeout(() => {
    if(title.classList.contains('active')){
      title.classList.remove('active')
      console.log('active 삭제')
    }else {
      title.classList.add('active')
      console.log('active 추가')
    }
  },1000)
} )