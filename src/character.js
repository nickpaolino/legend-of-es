class Character{
  constructor(x,y, board){
    this.board = board
    this.x = x
    this.y = y
    this.coordinates = [this.x, this.y]
    this.img = 'img/characters/ES/down/Es_01.png'
    this.createCharacter()
    this.placeCharacter(this.coordinates)
    this.moveCharacter()
  }

  formatCoordinates(coordinatesArray){
    return `${coordinatesArray[0]}-${coordinatesArray[1]}`
  }

  createCharacter(){
    // let character = document.createElement('div')
    // character.style.borderRadius = "50%"
    let character = document.createElement('img')
    // if(this.direction === "up"){
    //
    // }
    character.src = this.img
    character.style.width = '100%'
    character.id = "hero"
    return character
  }

  removeCharacter(){
    let character = document.getElementById('hero')
    if (character){
      character.remove()
    }
  }

  placeCharacter(coordinatesArray){
    this.board.gameOver()
    this.removeCharacter()
    let character = this.createCharacter()
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

  moveDown(){
    document.addEventListener('keydown', (ev) => {
      if (ev.which === 40){
        let coord = this.formatCoordinates([this.x + 1, this.y])
        let tile = document.getElementById(coord)
        if (tile.dataset.item === "open"){
          this.img = `img/characters/ES/down/Es_01.png`
          this.x += 1
          this.coordinates = [this.x, this.y]
          this.placeCharacter([this.x, this.y])
        }
      }
    })
  }

  moveUp(){
    document.addEventListener('keydown', (ev) => {
      if (ev.which === 38){
        let hero = document.getElementById('hero')
        let coord = this.formatCoordinates([this.x - 1, this.y])
        let tile = document.getElementById(coord)
        if (tile.dataset.item === "open"){
          this.img = `img/characters/ES/up/Es_01.png`
          this.x -= 1
          // this.direction = "up"
          this.coordinates = [this.x, this.y]
          this.placeCharacter([this.x, this.y])
        }
      }
    })
  }
  moveRight(){
    document.addEventListener('keydown', (ev) => {
      if (ev.which === 39){
        let coord = this.formatCoordinates([this.x, this.y + 1])
        let tile = document.getElementById(coord)
        if (tile.dataset.item === "open"){
          this.y += 1
          this.img = `img/characters/ES/right/Es_01.png`
          // this.direction = "right"
          this.coordinates = [this.x, this.y]
          this.placeCharacter([this.x, this.y])
        }
      }
    })
  }
  moveLeft(){
    document.addEventListener('keydown', (ev) => {
      if (ev.which === 37){
        let coord = this.formatCoordinates([this.x, this.y - 1])
        let tile = document.getElementById(coord)
        if (tile.dataset.item === "open"){
          this.y -= 1
          // this.direction = "left"
          this.img = `img/characters/ES/left/Es_01.png`
          this.coordinates = [this.x, this.y]
          this.placeCharacter([this.x, this.y])
        }
      }
    })
  }

}
