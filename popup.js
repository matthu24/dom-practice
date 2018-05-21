//use css transition and position fixed to transition properties 

let open = document.querySelector('.open');
let popup = document.querySelector('.popup');
let close = document.querySelector('.close');
open.addEventListener('click',function(){
  popup.style.top = '0px'
});

close.addEventListener('click',function(){
  popup.style.top = '-200px'
});
