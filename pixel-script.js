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

    let icon = document.querySelector('h1')
    // use icon in top left as "current color indicator"
    console.log(`icon: ${icon.classList}`);
    if (icon.classList.contains('h1')) {
      console.log(icon.classList);
      icon.classList.toggle(color.classList)
    }

    let pixelBoard = document.getElementById('pixel-board')

    pixelBoard.addEventListener('click', function(e) {
      console.log(`this is target e: ${e.target.classList}`)

      let pixel = e.target


      if (pixel.classList.contains('pixelOff')) {
        pixel.classList.toggle(color.classList)
      } else if (pixel.classList.contains(color.classList)) {
        pixel.classList.toggle('pixelOff')
        pixel.style.backgroundColor = 'pixelOff'
      }

      if (pixel.classList.length > 2) {
        // console.log(pixel.classList.length)
        // console.log(pixel.classList[1])
        pixel.classList.remove(pixel.classList[1])
      }






    })
  })


  // stay above here
})