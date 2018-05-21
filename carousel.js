let images = document.querySelectorAll('.image')
let right = document.querySelector('.right')
let left = document.querySelector('.left')
//position 1: idx 0 and 1 show => images[0].style.display = 'inline-block' and images[1]
//position 2: idx 1 and 2 show
//position 3: idx 2 and 3 show
//position 4: idx 3 and 0 show

const spin = (n) => {
  let firstIndex;
  let secondIndex;

  //this logic is for spin buttons that are circular
  // if(n === images.length){
  //   firstIndex = 0;
  //   secondIndex = n-1;
  // }else if(n <1){
  //   position = images.length;
  //   firstIndex = images.length - 1;
  //   secondIndex = 0
  // }else if(n > images.length){
  //   position = 1;
  //   firstIndex = 0;
  //   secondIndex = 1;
  // }else{
    firstIndex = n -1;
    secondIndex = n;
  // }
  for(let i=0;i< images.length;i++){
    images[i].style.display = 'none';
  }
  images[firstIndex].style.display = 'inline-block'
  images[secondIndex].style.display = 'inline-block'
}

right.addEventListener('click',() => {
  if(position < 3){
    position += 1;
    // console.log(position)
    spin(position)
  }

})

left.addEventListener('click',() => {
  if(position > 1){
    position -= 1;
    // console.log(position)
    spin(position)
  }
})


let position = 1;
spin(position);
