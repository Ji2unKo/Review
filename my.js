const number = [1,2,3,4,5]

// for(i = 0; i < numbers.length; i++){
//   console.loge(number[i])
// }

number.forEach((number,index,array) => {
  console.log(array)
})

const myArr = ['강아지','고양이','거북이','다람쥐']

myArr.forEach ((el,i) => {
  console.log(i)
  console.log(el)
  if(el === '고양이') {
    myArr.shift()
  }
})

console.log(myArr)

const list = ['a','b','c']

list.forEach((a,index) => {
  console.log(a,index)
})