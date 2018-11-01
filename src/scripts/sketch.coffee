canvas = undefined
cols = undefined
rows = undefined
w = undefined
h = undefined
scl = 30
flying = 0
terrain = undefined

setup = ->
  main = document.getElementsByClassName("main")[0]
  myCanvas = createCanvas(main.offsetWidth, main.offsetHeight, WEBGL)
  myCanvas.parent('hero-animation')
  background 'rgba(245, 244, 236, 1)'
  #scale(2, 2)
  pixelDensity(2)
  strokeWeight(1)
  #setAttributes('antialias', true)

  w = main.offsetWidth
  h = main.offsetHeight
  cols = w / scl
  rows = h / scl

  terrain = []
  x = 0
  while x < cols
    terrain[x] = []
    x++

draw = ->

  flying -= 0.025
  yoff = flying
  y = 0
  while y < rows
    xoff = 0
    x = 0
    while x < cols
      terrain[x][y] = map(noise(xoff, yoff), 0, 1, -100, 100)
      xoff += 0.2
      x++
    yoff += 0.2
    y++

  background 245, 244, 236
  stroke 17, 18, 16
  noFill()
  
  translate(0, 600)

  rotateX PI / 3
  translate -w / 2, -h / 2
  y = 0
  while y < (rows - 1)
    beginShape TRIANGLE_STRIP
    x = 0
    while x < cols
      vertex x * scl, y * scl, terrain[x][y]
      vertex x * scl, (y + 1) * scl, terrain[x][y+1]
      x++
    endShape()
    y++
 
  return
