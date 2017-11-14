class Monster{
  constructor(x,y, board){
    this.board = board
    this.x = x
    this.y = y
    this.coordinates = [this.x,this.y]
    this.createMonster()
    this.placeMonster(this.coordinates)
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
    monster.style.backgroundColor = "purple"
    monster.innerText = 'M'
    monster.id = "monster"
    return monster
  }

  removeMonster(){
    let monster = document.getElementById('monster')
    if (monster){
      monster.remove()
    }
  }

  placeMonster(coordinatesArray){
    this.board.gameOver()
    this.removeMonster()
    let monster = this.createMonster()
    let position = this.formatCoordinates(coordinatesArray)
    let tile = document.getElementById(position)
    tile.appendChild(monster)
  }


  moveMonster(){
    setInterval(() => {
      let randomNumber = Math.floor(Math.random() * 4)
      if (randomNumber === 0) this.moveDown();
      else if (randomNumber === 1) this.moveUp();
      else if (randomNumber === 2) this.moveLeft();
      else this.moveRight();
    }, 1000)
  }



  moveDown(){
    let coord = this.formatCoordinates([this.x + 1, this.y])
    let tile = document.getElementById(coord)
    if (tile.dataset.item === "open"){
      this.x += 1
      this.coordinates = [this.x, this.y]
      this.placeMonster([this.x, this.y])
    }
  }
  moveUp(){
        let coord = this.formatCoordinates([this.x - 1, this.y])
        let tile = document.getElementById(coord)
        if (tile.dataset.item === "open"){
          this.x -= 1
          this.coordinates = [this.x, this.y]
          this.placeMonster([this.x, this.y])
        }
  }
  moveRight(){
        let coord = this.formatCoordinates([this.x, this.y + 1])
        let tile = document.getElementById(coord)
        if (tile.dataset.item === "open"){
          this.y += 1
          this.coordinates = [this.x, this.y]
          this.placeMonster([this.x, this.y])
        }
  }
  moveLeft(){
        let coord = this.formatCoordinates([this.x, this.y - 1])
        let tile = document.getElementById(coord)
        if (tile.dataset.item === "open"){
          this.y -= 1
          this.coordinates = [this.x, this.y]
          this.placeMonster([this.x, this.y])
        }
  }


}
