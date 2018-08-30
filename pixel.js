document.addEventListener("DOMContentLoaded", function() {
  // stay below here

  console.log("The Script is working atleast...")
  // set title
  document.querySelector('title').innerText = 'Pixel-Art Maker'

  //let the parent element with the grid be the this
  // the place holding the event listener
  // addEventListener on each createSquare
  // apply background-color: red;

  // declare container on which event listener is placed
  let paintBoard = document.querySelector('.pixel-board')
  // listener.classList.add = "pixelOff";
  // 
  // let pixels = document.querySelectorAll('.pixel')

  //pixel.classList.add = "pixelOff";

  function paintPixel(event) {
    console.log("The event.target is: ", event.target)
    console.log('The this is:', this)
    let pixel = event.target
    if (pixel.classList.contains('pixelOff')) {
      pixel.classList.replace('pixelOff', 'pixelOn')
    } else {
      pixel.classList.replace('pixelOn', 'pixelOff')
      console.log('toggling?');
    }
  }

  paintBoard.addEventListener('click', paintPixel)




  // class is off go ahead and replace with class on}









  // find body
  // let body = document.getElementsByTagName('body')[0]
  // // make a container for the grid
  // let container = document.createElement('div')
  // container.classList.add('board')
  // container.classList.add('container')
  // body.appendChild(container)
  // 
  // const rowNum = 2
  // for (var j = 0; j < rowNum; j++) {
  //   container.appendChild(createRow(j))
  // }
  // 
  // function createRow(j) {
  //   // create a row
  //   let row = document.createElement('div')
  //   row.classList.add('row')
  //   row.classList.add('no-gutters')
  //   // add row to the body
  //   //container.appendChild(row)
  //   // loop to create columns
  //   createColumns(row, j)
  //   return row
  // }
  // 
  // function createColumns(row, j) {
  //   const colNum = 8
  //   for (let i = 0; i < colNum; i++) {
  //     // make the bootstrap column
  //     let col = document.createElement('div')
  //     col.classList.add('col')
  //     col.appendChild(createSquare((i + j) % 2))
  //     row.appendChild(col)
  //   }
  // }
  // 
  // function createSquare() {
  //   let div = document.createElement('div')
  //   div.classList.add('square')
  // }


  // stay above here
})