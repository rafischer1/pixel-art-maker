document.addEventListener("DOMContentLoaded", function() {
  // stay below here

  console.log("The Script is working atleast...")
  // set title
  document.querySelector('title').innerText = 'Pixel-Art Maker'

  // declare container on which event listener is placed
  let paintBoard = document.querySelector('.pixel-board')
  // listener.classList.add = "pixelOff";
  // 
  // let pixels = document.querySelectorAll('.pixel')
  //pixel.classList.add = "pixelOff";

  function paintPixel(event, paint) {
    console.log("The event.target is: ", event.target)
    console.log('The this is:', this)
    let pixel = event.target
    if (pixel.classList.contains('pixelOff')) {
      pixel.classList.replace('pixelOff', 'pixelOn')
    } else {
      pixel.classList.replace('pixelOn', 'pixelOff')
    }

  }

  paintBoard.addEventListener('click', paintPixel)

  // classList[0]
  //   .add
  //classlist as an object of the element classList key:0 value:"red"

  function selectColor(event) {
    console.log('Event target for brush:', event.target)
    let paint = event.target[0]
    console.log(span[0])

  }
  let palletteBoard = document.querySelector('.pallette-board')

  palletteBoard.addEventListener('click', selectColor)


  // class is off go ahead and replace with class on}







  // stay above here
})