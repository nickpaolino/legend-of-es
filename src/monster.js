class Monster{
  constructor(x,y){
    this.x = x
    this.y = y
    this.coordinates = [this.x,this.y]
    this.createMonster()
    this.placeMonster()
    this.moveMonster()
  }

  formatCoordinates(coordinatesArray){
    return `${coordinatesArray[0]}-${coordinatesArray[1]}`
  }


  createMonster(){
    let monster = document.createElement('div')
    monster.style.borderRadius = "50%"
    monster.style.marginLeft = "30%"
    monster.style.marginRight = "30%"
    monster.style.backgroundColor = "red"
    monster.innerText = 'es'
    monster.id = "monster"
    return monster
  }

  removeMonster(){
    let monster = document.getElementById('hero')
    if (monster){
      monster.remove()
    }
  }

}
