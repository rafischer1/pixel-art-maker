document.addEventListener("DOMContentLoaded", function() {

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

    // let td = document.querySelector('td')
    let color = event.target
    console.log(`this is target: ${event.target.classList}`)

    let pixelBoard = document.getElementById('pixel-board')

    pixelBoard.addEventListener('click', function(e) {
      console.log(`this is target e: ${e.target}`)

      let pixel = e.target
      if (pixel.classList.contains('pixelOff')) {
        pixel.classList.replace('pixelOff', color.classList)
      } else {
        pixel.classList.replace(color.classList, 'pixelOff')
      }


    })
  })
  // colorPallette.addEventListener('click'function(event) {
  // 
  //   if (event.target.tagName === "pixel") {
  //     let color = document.querySelector('whatever the color is')
  // 
  //     pixel.style.background = color.style.background
  //     pixel.style.cursor = 'pointer'
  // 
  //     if (we have a color selected) {
  //       
  //     }
  // 
  // 
  //   }
  // })


  // Take a larger size view and add the event listener to the larger div and say if event target is the pallet div grab the background style and add it to the pixel board div replace function 
  // 
  // 
  // 
  // Overlay.style.width = window.innerWidth + ‘px’. You can concat strings!
  // 
  // let pixelStyle = event.target.attribute ? 
  // pixelStyle.replace(color.style.background, pixel.style.background) ?

  // function fillSquare () {
  //     this.setAttribute("style", `background-color: ${color.value}`);
  // }







  // stay above here
})