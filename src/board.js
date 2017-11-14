class Board {
  constructor(){
    this.createCanvas(15, 15)
    this.placeCharacter()
  }

  createCanvas(width, height){
    var canvas = document.createElement('table')
    canvas.className = "canvas"
    document.body.appendChild(canvas)

    for (var i = 1; i <= height; i++){
      var row = document.createElement('tr')
      row.id = `${i}`
      canvas.appendChild(row)

      for (var j = 1; j <= width; j++){
        var cell = document.createElement('td')
        cell.className = "tile"
        cell.id = `${i}-${j}`
        row.appendChild(cell)
      }
    }
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

  placeCharacter(){
    let character = this.createCharacter()
    let tile = document.getElementById('1-1')
    tile.appendChild(character)
  }
}
