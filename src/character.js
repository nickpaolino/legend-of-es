class Character{
  constructor(x,y){
    this.x = x
    this.y = y
    this.coordinates = [this.x, this.y]
    this.createCharacter()
    this.placeCharacter(this.coordinates)
    this.moveCharacter()
  }

  formatCoordinates(coordinatesArray){
    return `${coordinatesArray[0]}-${coordinatesArray[1]}`
  }

  createCharacter(){
    let character = document.createElement('div')
    character.style.borderRadius = "50%"
    character.style.marginLeft = "30%"
    character.style.marginRight = "30%"
    character.style.backgroundColor = "red"
    character.innerText = 'es'
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
    this.removeCharacter()
    let character = this.createCharacter()
    let position = this.formatCoordinates(coordinatesArray)
    console.log(position);
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
        console.log(this.x)
        console.log(`projected - ${this.x+1}`)
        let coord = this.formatCoordinates([this.x + 1, this.y])
        let tile = document.getElementById(coord)
        if (tile.dataset.item === "open"){
          this.x += 1
          this.placeCharacter([this.x, this.y])
        }
      }
    })
  }

  moveUp(){
    document.addEventListener('keydown', (ev) => {
      if (ev.which === 38){
        let coord = this.formatCoordinates([this.x - 1, this.y])
        let tile = document.getElementById(coord)
        if (tile.dataset.item === "open"){
          this.x -= 1
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
          this.placeCharacter([this.x, this.y])
        }
      }
    })
  }

}
