let id;
let dragElement = document.querySelector('.drag-element')
let dragZone = document.querySelector('.dragzone')
let dropZone = document.querySelector('.dropzone')


//steps: 1. grab drag element and drop zone elements
//2. dragstart event on element: grab id of element and save it
//3. dragover event on drop zone: prevent default so that you can drop it, basically prep for dropping
//4. drop event on drop zone: grab the id of element you dragged (we saved it in step 2) and append element to dropzone

//dragstart event happens when you start dragging an element;
dragElement.addEventListener('dragstart',function(e){
  id = e.target.id;
  // console.log(id)
})

//dragover event happens when you drag something and hover over drop zone, before it is dropped
dropZone.addEventListener('dragover',function(e){
  e.preventDefault();
})

//drop event happens when you drop something into drop zone
dropZone.addEventListener('drop',function(e){
  //same as: dropZone.append(document.querySelector('#drag-element'))
  dropZone.append(document.querySelector(`#${id}`))
})

dragZone.addEventListener('dragover',function(e){
  e.preventDefault();
})

//drop event happens when you drop something into drop zone
dragZone.addEventListener('drop',function(e){
  //same as: dropZone.append(document.querySelector('#drag-element'))
  dragZone.append(document.querySelector(`#${id}`))
})
