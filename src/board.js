class Board {
  constructor(){
    this.boardArray = []
    this.generateBoard()
    this.createCanvas(15, 15)
    this.character = this.createCharacter(1,1)
    // this.createBarriers()
  }

  generateBoard(){
    this.board = [
      [0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0],
      [0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
      [0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0],
      [0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0],
      [0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0],
      [0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0],
      [0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0],
      [0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0],
    ]
  }

  createCanvas(width, height){
    var canvas = document.createElement('table')
    canvas.style.backgroundImage = `url("img/elements/grass.png")`
    canvas.className = "canvas"
    document.body.appendChild(canvas)

    for (var i = 0; i < height; i++){
      var row = document.createElement('tr')
      row.id = `${i}`
      canvas.appendChild(row)

      for (var j = 0; j < width; j++){
        var tileItem = this.board[i][j]

        var cell = document.createElement('td')
        cell.className = "tile"
        cell.id = `${i}-${j}`

        if (tileItem === 1){
          let img = document.createElement('img')
          img.src = `img/elements/bush.png`
          img.style.width = '100%'
          cell.id = `${i}-${j}`
          cell.dataset.item = "barrier"
          cell.appendChild(img)
        }
        else {
          cell.style.backgroundImage = `url("img/elements/grass.png")`
          cell.dataset.item = "open"
        }

        row.appendChild(cell)
      }
    }
  }
  createCharacter(x,y){
    return new Character(x,y)
  }
  //
  // createBarriers(){
  //   let tile = document.getElementById(`3-3`)
  //   let img = document.createElement('img')
  //   img.src = `img/elements/bush.png`
  //   img.style.width = '100%'
  //   tile.appendChild(img)
  // }
}
