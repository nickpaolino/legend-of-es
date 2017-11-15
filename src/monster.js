class Monster{
  constructor(x,y, board){
    this.board = board
    this.x = x
    this.y = y
    this.coordinates = [this.x,this.y]
    this.img = 'img/characters/MONSTER/down/monster_01.png'
    this.createMonster(this.coordinates)
    this.moveMonster()
  }

  formatCoordinates(coordinatesArray){
    return `${coordinatesArray[0]}-${coordinatesArray[1]}`
  }

  createMonster(coordinatesArray){
    let monster = document.createElement('img')
    monster.src = this.img
    monster.style.width = '100%'
    monster.id = "monster"
    let position = this.formatCoordinates(coordinatesArray)
    let tile = document.getElementById(position)
    tile.appendChild(monster)
  }

  // removeMonster(){
  //   let monster = document.getElementById('monster')
  //   if (monster){
  //     monster.remove()
  //   }
  // }

  placeMonster(coordinatesArray){
    this.board.gameOver()
    let monster = document.getElementById('monster')
    monster.src = this.img
    let position = this.formatCoordinates(coordinatesArray)
    let tile = document.getElementById(position)
    tile.appendChild(monster)
  }


  moveMonster(){
    setInterval(() => {
      if(this.board.pauseSwitch){
        clearInterval(id)
      }
      else{
        let randomNumber = Math.floor(Math.random() * 4)
        if (randomNumber === 0) this.moveDown();
        else if (randomNumber === 1) this.moveUp();
        else if (randomNumber === 2) this.moveLeft();
        else this.moveRight();
      }
    }, 1000)
  }



  moveDown(){
    let coord = this.formatCoordinates([this.x + 1, this.y])
    let tile = document.getElementById(coord)
    if (tile.dataset.item === "open"){
      this.img = 'img/characters/MONSTER/down/monster_01.png'
      this.x += 1
      this.coordinates = [this.x, this.y]
      this.placeMonster([this.x, this.y])
    }
  }
  moveUp(){
        let coord = this.formatCoordinates([this.x - 1, this.y])
        let tile = document.getElementById(coord)
        if (tile.dataset.item === "open"){
          this.img = 'img/characters/MONSTER/up/monster_01.png'
          this.x -= 1
          this.coordinates = [this.x, this.y]
          this.placeMonster([this.x, this.y])
        }
  }
  moveRight(){
        let coord = this.formatCoordinates([this.x, this.y + 1])
        let tile = document.getElementById(coord)
        if (tile.dataset.item === "open"){
          this.img = 'img/characters/MONSTER/right/monster_01.png'
          this.y += 1
          this.coordinates = [this.x, this.y]
          this.placeMonster([this.x, this.y])
        }
  }
  moveLeft(){
        let coord = this.formatCoordinates([this.x, this.y - 1])
        let tile = document.getElementById(coord)
        if (tile.dataset.item === "open"){
          this.img = 'img/characters/MONSTER/left/monster_01.png'
          this.y -= 1
          this.coordinates = [this.x, this.y]
          this.placeMonster([this.x, this.y])
        }
  }


}
