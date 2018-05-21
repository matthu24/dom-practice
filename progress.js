//100 % is 246px in width
let progressElement = document.querySelector('.progress');
let percentage = document.querySelector('.percentage');
let progressPixels = 0
let percentageValue = 0;

function progress(){
  //need to update two things: the progress div and the percentage label
  let animation = setInterval(frame,100);
  function frame(){
    if(progressPixels > 245){
      clearInterval(animation)
    }else{
      progressPixels += 5;
      percentageValue += 2;
      progressElement.style.width = `${progressPixels}px`;
      percentage.innerHTML = `${percentageValue}%`
    }
  }
}

function clearProgress(){
  progressPixels = 0;
  percentageValue = 0;
  progressElement.style.width = '0px';
  percentage.innerHTML = `0%`
}

let button = document.querySelector('.load-progress');
let clear = document.querySelector('.clear-progress');
button.addEventListener('click',() => {
  progress();
});

clear.addEventListener('click',() => {
  clearProgress();
})
