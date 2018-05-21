let nameElement = document.querySelector('.name');
let passwordElement = document.querySelector('.password');
let submitBtn = document.querySelector('.submit');
let nameList = document.querySelector('.name-list');
let text1 = document.querySelector('.text-animate');
// setTimeout(() => {
//   text1.style.margin= '60px';
// },2000);


submitBtn.addEventListener('click',() => {
  let nameValue = nameElement.value;
  let passwordValue = passwordElement.value;
  // alert(`name is ${nameValue} and pw is ${passwordValue}`)

  appendElement(nameValue);
  nameElement.value = '';
  passwordElement.value = '';
})

function appendElement(nameValue){
  let nameItem = document.createElement('li');
  nameItem.textContent = nameValue;
  nameList.append(nameItem);
}

nameList.addEventListener('click',(e) => {
  console.log(`You clicked on ${e.target.innerHTML}`)
  setTimeout(() => {
    e.target.style.color='red'

  },1000)
  setTimeout(() => {
    e.target.style.color = 'blue'
  },2000)
})
