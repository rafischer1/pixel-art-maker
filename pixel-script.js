document.addEventListener("DOMContentLoaded", function() {

  // stay below here
  console.log("The Script is working . . . ⏰")

  // set the title
  document.querySelector('title').innerText = 'Pixel-Art Maker'

  // create grid 
  function createGrid() {

    let num = window.innerWidth / 1.5;

    for (var i = 0; i <= num; i++) {
      let board = document.getElementById('pixel-board')
      var table = document.createElement("TABLE");
      let tr = document.createElement('TR')
      let td = document.createElement('TD')
      board.appendChild(table)
      table.appendChild(tr)
      for (var c = 0; c < num * 2; c++) {
        tr.appendChild(td)
        td.setAttribute('class', 'pixelOff')
      }
    }
  }
  createGrid()

  // pixel painting set up
  let palletteBoard = document.getElementById('pallette-board')

  // pixel painting main function
  palletteBoard.addEventListener('click', function(event) {


    // if (event.target.className !== 'container') {
    // 
    // }

    let color = event.target
    let icon = document.querySelector('h1')
    icon.className = color.className
    console.log(`this is color: ${color.className}`)


    // use icon in top left as "current color indicator"
    let pixelBoard = document.getElementById('pixel-board')

    pixelBoard.addEventListener('click', function(e) {
      console.log(`this is target e: ${e.target.classList}`);

      let pixel = e.target

      if (color.className !== 'container') {
        pixel.className = color.className
      }
      // not toggling...

      //  else if (pixel.className === color.className) {
      //   pixel.className.replace(color.className, 'pixelOff')
      //   // pixel.style.backgroundColor = 'pixelOff'
      // }

      // set eraser icon when white is selected

      // let eraser = document.getElementById('eraser')
      // eraser.style.display = "block"

    })
  })


  // stay above here
})