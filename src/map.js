class Map {
  constructor(board){
    this.height = 15
    this.width = 15

    this.board = board
    this.number = this.board.mapNumber

    this.barrierCount = 100
    this.itemCount = 3
    this.monsterCount = 2

    this.map = []

    this.createTiles()
    this.createMonsters()
  }

  createMonsters(){
    let monsterCoordinates = []
    let count = this.monsterCount
    let coordinates = this.generateCoordinatesList()
    let quarter = (this.height * this.width) / 4

    let randomOne = Math.floor(Math.random() * quarter)
    let randomTwo = Math.floor((Math.random() * quarter) + quarter)
    let randomThree = Math.floor((Math.random() * quarter) + (quarter * 2))
    let randomFour = Math.floor((Math.random() * quarter) + (quarter * 3))

    let randomArray = [
      randomOne,
      randomTwo,
      randomThree,
      randomFour
    ]

    while (count > 0){
      let randomPick = Math.floor(Math.random() * 4)
      let randomIndex = randomArray[randomPick]
      let point = coordinates[randomIndex]
      monsterCoordinates.push(point)
      count -= 1
    }

    return monsterCoordinates
  }

  createTiles(){
    this.generateEmptyBoard()
    this.generateBarriers()
    this.generateItems()
  }

  generateEmptyBoard(){
    for (var i = 0; i < this.height; i++){
      let rowArray = []
      for (var j = 0; j < this.width; j++){
        rowArray.push(0)
      }
      this.map.push(rowArray)
    }
    return this.map
  }

  generateCoordinatesList(){
    let coordinatesArray = []
    for (var x = 0; x < this.height; x++){
      for (var y = 0; y < this.width; y++){
        coordinatesArray.push([x, y])
      }
    }
    return coordinatesArray
  }

  generateBarriers(){
    this.generateSpecialTiles(1, this.barrierCount)
  }

  generateItems(){
    this.generateSpecialTiles(2, this.itemCount)
  }

  generateSpecialTiles(item, count){
    let tileNumber = this.height * this.width
    let coordinates = this.generateCoordinatesList()

    while (count > 0){
      let randomCoordinate = Math.floor(Math.random() * tileNumber)
      let randomPoint = coordinates[randomCoordinate]
      this.dropTile(randomPoint, item)
      count -= 1
    }
  }

  dropTile(coordinates, item){
    this.map[coordinates[0]][coordinates[1]] = item
  }

  returnMap(){
    return this.map
  }
}