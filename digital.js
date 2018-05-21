let clock = document.querySelector('.digital-clock');

const showTime = () => {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  if(String(hours).length === 1){
    hours = '0' + String(hours)
  }
  if(String(minutes).length === 1){
    minutes = '0' + String(minutes)
  }
  if(String(seconds).length === 1){
    seconds = '0' + String(seconds)
  }
  clock.textContent = convert(`${hours}:${minutes}:${seconds}`)
}

const convert = (str) => {
  let hours = parseInt(str.slice(0,2));
  if(hours === 12){
    return str + 'PM'
  }else if(hours === 0){
    return '12' + str.slice(2) + 'AM'
  }else if(hours > 12){
    hours = hours - 12;
    if(hours>9){
      return String(hours) + str.slice(2) + 'PM'
    }else{
      return '0' + String(hours) + str.slice(2) + 'PM'
    }
  }else{
    return str + 'AM'
  }
}
showTime();
setInterval(showTime,1000)
