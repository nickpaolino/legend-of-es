class Board {
  constructor(level){
    this.mapNumber = level
    console.log(this.mapNumber);
    this.monsters = []
    this.itemCount = 0
    this.exitCoordinates = '7-14'
    this.generateMap()
    this.createCanvas(15, 15)
    this.createPointsDiv()
    // These will be created by the map class
    this.createCharacter(7,0)
    this.createMonster()
    this.pauseSwitch = false
    this.gameOverSwitch = false
    this.flagSwitch = false
    this.pause()
  }

  nextLevel(){
    this.generateMap()
    this.itemCount = 0
    this.createCanvas(15, 15)
    this.createPointsDiv()
    new Character(7,0, this)
    this.createMonster()
    this.pauseSwitch = false
    this.gameOverSwitch = false
    this.flagSwitch = false
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
    let existingH3 = document.querySelector('h3')
    if (existingH3){
      existingH3.remove()
    }
    let h3 = document.createElement('h3')
    // h3.id = 'score'
    h3.id = "score"
    // h3.innerText += `Points: ${this.score}`
    h3.align = "center"
    document.body.appendChild(h3)
  }

  gameOver(){
    if (this.monsters.length>0 && this.character){
      for(let i = 0; i<this.monsters.length; i++){
        if(this.monsters[i].x === this.character.x && this.monsters[i].y === this.character.y){
          debugger
          console.log("Game Over")
        }
      }

    }
  }

  generateMap(){
    this.map = new Map(this)
    this.currentMap = this.map.returnMap()
    this.mapNumber += 1
    this.score = (Map.count - 1) * 100
    // console.log(this.currentMap);
  }

  createCanvas(width, height){
    var existingCanvas = document.querySelector('table')
    if (existingCanvas){
      existingCanvas.remove()
    }
    var canvas = document.createElement('table')
    canvas.style.backgroundImage = `url("img/elements/grass_2.png")`
    canvas.className = "canvas"
    document.body.appendChild(canvas)

    for (var i = 0; i < height; i++){
      var row = document.createElement('tr')
      row.id = `${i}`
      canvas.appendChild(row)

      for (var j = 0; j < width; j++){
        var tileItem = this.currentMap[i][j]

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

  createMonster(){
    let monsterCoordinates = this.map.createMonsters()
    for (var position of monsterCoordinates){
      let monster = new Monster(position[0], position[1], this)
      this.monsters.push(monster);
    }
  }

}
