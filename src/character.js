class Character{
  constructor(x,y){
    this.coordinates = [x,y]
    this.placeCharacter(x,y)
  }

  createCharacter(){
    let character = document.createElement('div')
    character.style.borderRadius = "50%"
    character.style.marginLeft = "30%"
    character.style.marginRight = "30%"
    character.style.backgroundColor = "red"
    character.innerText = 'es'
    return character
  }

  placeCharacter(x,y){
    let character = this.createCharacter()
    let tile = document.getElementById(`${x}-${y}`)
    tile.appendChild(character)
  }

  moveCharacter(){

  }

}
