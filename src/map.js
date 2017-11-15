class Map {
  constructor(board){
    this.height = 15
    this.width = 15

    this.board = board
    this.number = this.board.mapNumber

    this.barrierCount = 200
    this.itemCount = 4

    // 4 is the limit for the monsters right now
    this.monsterCount = 4

    this.map = []

    this.createMonsters()
    this.createTiles()
    this.createPath([7, 14])
  }

  createMonsters(){
    this.monsterCoordinates = []
    let count = this.monsterCount
    // let coordinates = this.generateCoordinatesList()
    // let quarter = (this.height * this.width) / 4
    //
    // let randomOne = Math.floor(Math.random() * quarter)
    // let randomTwo = Math.floor((Math.random() * quarter) + quarter)
    // let randomThree = Math.floor((Math.random() * quarter) + (quarter * 2))
    // let randomFour = Math.floor((Math.random() * quarter) + (quarter * 3))

    // let randomArray = [
    //   randomOne,
    //   randomTwo,
    //   randomThree,
    //   randomFour
    // ]

    let positionArray = [
      [4, 3],
      [9, 7],
      [3, 8],
      [1, 9]
    ]

    while (count > 0){
      // let randomPick = Math.floor(Math.random() * 4)
      // let randomIndex = randomArray[randomPick]
      // let point = coordinates[randomIndex]
      let point = positionArray.pop()
      this.monsterCoordinates.push(point)
      count -= 1
    }

    return this.monsterCoordinates
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

  coordinatesTaken(coordinate){
    // // Starting Position for Character
    // this.monsterCoordinates.push([7, 0])
    // // Ending Position for Character
    // this.monsterCoordinates.push([7, 14])

    let takenCoordinates = [
      [4, 3],
      [9, 7],
      [3, 8],
      [1, 9],
      [7, 0],
      [7, 14]
    ]

    for (var item of takenCoordinates){
      if (item[0] === coordinate[0] && item[1] === coordinate[1]){
        return true
      }
    }

    return false
  }

  generateSpecialTiles(item, count){
    let tileNumber = this.height * this.width
    let coordinates = this.generateCoordinatesList()

    while (count > 0){
      let randomCoordinate = Math.floor(Math.random() * tileNumber)
      let randomPoint = coordinates[randomCoordinate]
      if (!this.coordinatesTaken(randomPoint)){
        this.dropTile(randomPoint, item)
        count -= 1
      }
    }
  }

  dropTile(coordinates, item){
    this.map[coordinates[0]][coordinates[1]] = item
  }

  right(coordinates){
    if (coordinates[1] !== 14){
      coordinates[1] += 1
    }

    return coordinates
  }

  left(coordinates){
    if (coordinates[1] !== 0){
      coordinates[1] -= 1
    }

    return coordinates
  }

  down(coordinates){
    if (coordinates[0] !== 14){
      coordinates[0] += 1
    }

    return coordinates
  }
  up(coordinates){
    if (coordinates[0] !== 0){
      coordinates[0] -= 1
    }

    return coordinates
  }

  createPath(endpoint){
    let directions =
    [
      this.right,
      this.down,
      this.up
    ]

    let currentTile = [7, 0]
    let path = []

    while (currentTile.toString() !== endpoint.toString()){
      let random = Math.floor(Math.random() * 3)
      this.dropTile(currentTile, 0)
      currentTile = directions[random](currentTile)
    }
  }

  returnMap(){
    return this.map
  }
}
