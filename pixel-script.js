document.addEventListener("DOMContentLoaded", function() {

  // stay below here

  console.log("The Script is working . . . ⏰")

  // set the title
  document.querySelector('title').innerText = 'Pixel-Art Maker'

  // create grid 
  function createGrid() {

    let num = window.innerWidth;

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



  let palletteBoard = document.getElementById('pallette-board')

  palletteBoard.addEventListener('click', function(event) {

    let color = event.target
    console.log(`this is target: ${event.target.classList}`)

    let pixelBoard = document.getElementById('pixel-board')
    let icon = document.getElementById('icon')

    pixelBoard.addEventListener('click', function(e) {
      console.log(`this is target e: ${e.target}`)

      let pixel = e.target
      if (pixel.classList) {
        pixel.classList.toggle(color.classList)
      }
      if (pixel.classList !== color.classList) {
        pixel.classList.toggle('pixelOff')
        console.log(pixel.classList);
      } else {
        pixel.reset()
      }

      // use icon in top left as "current color indicator"
      // if (icon) {
      //   icon.classList.replace(icon.style.backgroundColor, color.classList)
      // }
    })
  })


  // stay above here
})