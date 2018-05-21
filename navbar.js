let navItem = document.querySelector('.nav-item');
let menu = document.querySelector('.menu');
navItem.addEventListener('mouseover',function(){
  menu.style.display = 'block'
})

navItem.addEventListener('mouseout',function(){
  menu.style.display = 'none'
})

menu.addEventListener('mouseover',function(){
  menu.style.display = 'block'

})

menu.addEventListener('mouseout',function(){
  menu.style.display = 'none'
})
