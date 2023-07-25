// open-btn 버튼 클릭시 overlay한테 is-open class add 
document.querySelector('.open-btn').addEventListener('click', function(){
  document.querySelector('.overlay').classList.add('is-open')
})

// clost-btn 버튼 클릭시 overlay한테 is-open class remove
document.querySelector('.close-btn').addEventListener('click',function(){
  document.querySelector('.overlay').classList.remove('is-open')
})

document.querySelector('.overlay').addEventListener('click', function(e){
  if(e.target == document.querySelector('overlay')){
    document.querySelector('.overlay').classList.remove('is-open')
  }
})