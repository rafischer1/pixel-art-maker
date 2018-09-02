document.addEventListener("DOMContentLoaded", function() {
  // code below here

  // is the DOMContentLoaded working?
  console.log("The Script is working . . . ⏰")

  // set title
  document.querySelector('title').innerText = 'Pixel-Art Maker'

  let paintBoard = document.querySelector('.pixel-board')
  let color = document.getElementById('#paint')

  paintBoard.addEventListener('click', selectColor)
  let current = document.querySelector('.pallette-board')
  // palletteBoard.addEventListener('click', selectColor)

  function selectColor(event) {
    let pallette = document.getElementById('pallette board')
    console.log(pallette)
    let brush = event.target
    console.log(`this is brush: ${brush}`)
  }

  function paintPixel(event, color) {
    let brush = getElementById('paint').classList

    console.log("The event target for pixel: ", event.target)

    let pixel = event.target
    if (pixel.classList.contains('pixelOff')) {
      pixel.classList.replace('pixelOff', 'color')
    } else {
      pixel.classList.replace('color', 'pixelOff')
    }

  }


  colorClassesArr = ["red", "black", "blue", "green", "yellow", "purple", "brown", "teal", "pink"]



  // place event listener on pallette parent div to catch paint color selection





  // add event listener to div parent "paintBoard"



  // declare function for catching color selection



  // define pallette parent div

  // place event listener on pallette parent div to catch paint color selection



  // declare an array of the color class names


  // console.log(colorSelector.classList)
  // console.log(colorClassesArr[i])
  // console.log(paint[i] = i + 1)


  // notes on movign forward 
  // microgoals: declare function to capture the colorClassesArr[i] as the selected color

  // store the state of your application in JavaScript

  // classList[0]
  //   .add
  //classlist as an object of the element classList key:0 value:"red"
  // make paint a class again

  // function selectColor(event) {
  //   console.log('Event target for brush:', event.target)
  //   // paint is the span with an id of paint aka the event.target for "paint brush"
  //   let paint = event.target
  //   // console.log(`this is: ${paint.classList}`)
  //   let colorValue = paint.classList
  //   let color = colorValue.value
  //   console.log(`this is the value of color.value: ${color}`)
  // 
  // }
  // 
  // 
  // function paintPixel(event, color) {
  // 
  //   // colorClassesArr = ["red", "black", "blue", "green", "yellow", "purple", "brown", "teal", "pink"]
  //   let brush = getElementById('paint').classList
  //   console.log(`hi I'm ${color}`)
  //   // colorSelector = document.querySelector("#paint")
  //   console.log("The event target for pixel: ", event.target)
  //   // console.log('The this is:', this)
  //   let pixel = event.target
  //   if (pixel.classList.contains('pixelOff')) {
  //     pixel.classList.replace('pixelOff', 'color')
  //   } else {
  //     pixel.classList.replace('color', 'pixelOff')
  //   }
  // 
  // }

  // function setCurrent() {
  //   let current = document.querySelect('currentColor')
  //   currrent.classList.replace('blank', 'red')
  //   if (currrent.classList.replace('blank', 'red') {
  //       currrent.classList.replace('red', 'blank')
  //     }
  //   }








  // stay above here
})