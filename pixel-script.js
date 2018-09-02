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



  let palletteBoard = document.getElementById('pallette-board')

  palletteBoard.addEventListener('click', function(event) {

    let color = event.target
    console.log(`this is color: ${event.target.classList}`)

    let pixelBoard = document.getElementById('pixel-board')

    pixelBoard.addEventListener('click', function(e) {
      console.log(`this is target e: ${e.target.classList}`)

      let pixel = e.target


      if (pixel.classList.contains('pixelOff')) {
        pixel.classList.replace('pixelOff', color.classList)
        pixel.style.backgroundColor = color.value
      } else if (pixel.classList.contains(color.classList)) {
        pixel.classList.replace(color.classList, 'pixelOff')
        pixel.style.backgroundColor = 'pixelOff'
      }




      let icon = document.querySelector('.fas')
      // use icon in top left as "current color indicator"
      icon.classList.replace('h1', color.classList)

    })
  })


  // stay above here
})