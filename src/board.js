class Board {
  constructor(){
    this.createCanvas(15, 15)
    this.character = this.createCharacter(1,1)
    this.createBarriers()
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



  createCharacter(x,y){
    return new Character(x,y)
  }

  createBarriers(){
    let tile = document.getElementById(`3-3`)
    let img = document.createElement('img')
    img.src = `img/elements/bush.png`
    img.style.width = '100%'
    tile.appendChild(img)
  }
}
