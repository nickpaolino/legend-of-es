class Board {
  constructor(){
    this.itemCount = 0
    this.generateBoard()
    this.createCanvas(15, 15)
    this.createPointsDiv()
    this.createCharacter(1,1)
    this.createMonster(4,8)
    this.pauseSwitch = false
    this.pause()
  }

  pause(){
    document.addEventListener('keydown', (ev) => {
      if(ev.which === 32){
        this.pauseSwitch = !this.pauseSwitch
      }
    })
  }

  createPointsDiv(){
    let h3 = document.createElement('h3')
    h3.innerText = "Points: "
    h3.align = "center"
    document.body.appendChild(h3)
  }

  gameOver(){
    if (this.monster && this.character){
      if (this.monster.coordinates[0] === this.character.coordinates[0] && this.monster.coordinates[1] === this.character.coordinates[1]){
        console.log("Game Over");
      }
      else if(this.itemCount === this.character.itemCount){
        console.log('You Win!')
      }
    }
  }

  generateBoard(){
    this.board = [
      [0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1],
      [0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 2, 0, 1],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 2, 0, 0, 0, 1],
      [0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1],
      [0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1],
      [0, 1, 0, 2, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1],
    ]
  }

  createCanvas(width, height){
    var canvas = document.createElement('table')
    canvas.style.backgroundImage = `url("img/elements/grass_2.png")`
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
        else if (tileItem === 2){
          this.itemCount += 1
          let img = document.createElement('img')
          img.src = `img/elements/coffee.png`
          img.style.width = '100%'
          cell.id = `${i}-${j}`
          cell.dataset.item = "item"
          cell.appendChild(img)
        }
        else {
          // cell.style.backgroundImage = `url("img/elements/grass.png")`
          cell.dataset.item = "open"
        }
        row.appendChild(cell)
      }
    }
  }
  createCharacter(x,y){
    let character = new Character(x,y, this)
    this.character = character
  }

  createMonster(x,y){
    let monster = new Monster(x,y, this)
    this.monster = monster
  }

}
