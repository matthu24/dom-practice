let dialpad = document.querySelector('.dialpad');
let number = document.querySelector('.number');
let deleteButton = document.querySelector('.delete');

deleteButton.addEventListener('click',function(){
  number.textContent = number.textContent.slice(0,number.textContent.length-1)
});

dialpad.addEventListener('click',function(e){
  console.log(e.target.className)
  if(e.target.className !== 'dialpad'){
    number.textContent = number.textContent + e.target.textContent;

  }
})
