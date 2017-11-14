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
    let tile = document.getElementById(position)
    tile.appendChild(character)
  }

  moveCharacter(){

    this.moveDown()
    this.moveUp()
    this.moveRight()
    this.moveLeft()
  }

  // checkBarriers(barrierList){
  //   for(let barrier of barrierList){
  //     if(barrier[0] === this.x )
  //   }
  // }

  moveDown(){
    document.addEventListener('keydown', (ev) => {
      if (ev.which === 40){
        this.x += 1
        this.placeCharacter([this.x, this.y])
      }
    })
  }

  moveUp(){
    document.addEventListener('keydown', (ev) => {
      if (ev.which === 38){
        this.x -= 1
        this.placeCharacter([this.x, this.y])
      }
    })
  }
  moveRight(){
    document.addEventListener('keydown', (ev) => {
      if (ev.which === 39){
        this.y += 1
        this.placeCharacter([this.x, this.y])
      }
    })
  }
  moveLeft(){
    document.addEventListener('keydown', (ev) => {
      if (ev.which === 37){
        this.y -= 1
        this.placeCharacter([this.x, this.y])
      }
    })
  }

}
