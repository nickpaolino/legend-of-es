class Character{
  constructor(x,y, board){
    this.board = board
    this.level = this.board.mapNumber
    this.x = x
    this.y = y
    this.coordinates = [this.x, this.y]
    this.img = 'img/characters/ES/right/Es_01.png'
    this.createCharacter(this.coordinates)
    this.itemCount = 0
    this.moveCharacter() //why does the listener work but not the gameOver?
  }

  formatCoordinates(coordinatesArray){
    return `${coordinatesArray[0]}-${coordinatesArray[1]}`
  }
  createCharacter(coordinatesArray){
    let character = document.createElement('img')
    character.src = this.img
    character.style.width = '100%'
    character.id = "hero"
    let position = this.formatCoordinates(coordinatesArray)
    let tile = document.getElementById(position)
    tile.appendChild(character)
    return character
  }

  displayScore(){
    let score = document.getElementById("score")
    score.innerHTML = `Coffees Left: ${this.board.itemCount-this.itemCount}`
  }



  placeCharacter(coordinatesArray){
    // this.flagAlert()
    this.board.gameOver()
    this.displayScore()
    let character = document.getElementById('hero')
    character.src = this.img
    let position = this.formatCoordinates(coordinatesArray)
    let tile = document.getElementById(position)
    tile.appendChild(character)
  }


  moveCharacter(){
    this.moveDown()
    this.moveUp()
    this.moveRight()
    this.moveLeft()
  }

  moveConstraints(tile, axis, value){
    if (tile.dataset.item === "open"){
      if(axis === 'x'){this.x += value}
      else{this.y += value}
      this.coordinates = [this.x, this.y]
      this.placeCharacter([this.x, this.y])
    }
    else if (tile.dataset.item === "item"){
      let coffeeImg = tile.children[0]
      coffeeImg.remove()
      tile.dataset.item = "open"
      if(axis === 'x'){this.x += value}
      else{this.y += value}
      this.coordinates = [this.x, this.y]
      this.itemCount++

      if(this.board.itemCount === this.itemCount && !(this.board.flagSwitch)){
        let flagTile = document.getElementById(this.board.exitCoordinates)
        flagTile.dataset.item = "flag"
        let img = document.createElement('img')
        img.src = `img/elements/flag.png`
        img.style.width = "100%"
        this.board.flagSwitch = true
        flagTile.appendChild(img)
      }

      this.placeCharacter([this.x, this.y])
    }
    else if (tile.dataset.item === "flag"){
      this.board.nextLevel()
    }
  }

  moveDown(){
    document.addEventListener('keydown', (ev) => {
      if (this.board.pauseSwitch === true){
        console.log('down is paused')
      }
      else if (ev.which === 40){
        let coord = this.formatCoordinates([this.x + 1, this.y])
        let tile = document.getElementById(coord)
        this.img = `img/characters/ES/down/Es_01.png`
        this.moveConstraints(tile,'x',1)
        }
      })
    }


  moveUp(){
    document.addEventListener('keydown', (ev) => {
      if (this.board.pauseSwitch === true){
        console.log('paused')
      }
      else if (ev.which === 38){
        let coord = this.formatCoordinates([this.x - 1, this.y])
        let tile = document.getElementById(coord)
        this.img = `img/characters/ES/up/Es_01.png`
        this.moveConstraints(tile,'x',-1)
      }
    })
  }
  moveRight(){
    document.addEventListener('keydown', (ev) => {
      if (this.board.pauseSwitch === true){
        console.log('paused')
      }
      else if (ev.which === 39){
        let coord = this.formatCoordinates([this.x, this.y + 1])
        let tile = document.getElementById(coord)
        this.img = `img/characters/ES/right/Es_01.png`
        this.moveConstraints(tile,'y',1)
      }
    })
  }
  moveLeft(){
    document.addEventListener('keydown', (ev) => {
      if (this.board.pauseSwitch === true){
        console.log('paused')
      }
      else if (ev.which === 37){
        let coord = this.formatCoordinates([this.x, this.y - 1])
        let tile = document.getElementById(coord)
        this.img = `img/characters/ES/left/Es_01.png`
        this.moveConstraints(tile,'y',-1)
      }
    })
  }

}
