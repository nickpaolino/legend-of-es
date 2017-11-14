class Board {
  constructor(){
    this.createCanvas(15, 15)
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
}
