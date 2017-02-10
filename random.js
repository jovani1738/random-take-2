var namespace = "http://www.w3.org/2000/svg"


// Fill in this function so that it draws something using SVG shapes!
// You need to use at least 3 different types of shape.
// Remember, for the shapes to show up on the canvas, you'll need to CALL the function.
function createFirstScene() {
    makeRect(0, 0, 1000, 1000, "red", 1)
    makeCircle(100, 50, 25, "black")
    makeEllipse(100, 60, 24, 15)
    makeEllipse(100, 60, 23.7, 14.7, "#ffe6cc")
    makeEllipse(100, 57, 19, 10, "black")
    makeEllipse(100, 56.5, 19, 10, "#ffe6cc")
    makeEllipse(92, 43, 16, 10, "#ffe6cc", 1, "rotate(90 92 43)")
    makeEllipse(108, 43, 16, 10, "#ffe6cc", 1, "rotate(90 108 43)")
    makeCircle(75, 25, 12, "black")
    makeCircle(125, 25, 12, "black")
    makeEllipse(96, 43, 8.5, 3, "black", 1, "rotate(85 96 43)")
    makeEllipse(96, 43, 8, 2.5, "white", 1, "rotate(85 96 43)")
    makeEllipse(104, 43, 8.5, 3, "black", 1, "rotate(95 104 43)")
    makeEllipse(104, 43, 8, 2.5, "white", 1, "rotate(95 104 43)")
    makeEllipse(97.3, 46, 3, 1.5, "black", 1, "rotate(88 97.3 46)")
    makeEllipse(102.7, 46.1, 3, 1.5, "black", 1, "rotate(90 102.7 46.1)")
    makeEllipse(100, 55.5, 10, 7)
    makeEllipse(100, 56, 12, 7, "#ffe6cc")
    makeEllipse(100, 55, 7, 4) 
    
}


// Fill in this function so that it draws something using SVG shapes!
// You need to use at least 3 different types of shape.
// Remember, for the shapes to show up on the canvas, you'll need to CALL the function.
function createSecondScene() {
    makeRect(0, 0, 1000, 1000, "#ff99dd", 1)
    makeEllipse(85, 20, 17.3, 10.3, "black", 1, "rotate(90 85 20)") 
    makeEllipse(85, 20, 17, 10, "pink", 1, "rotate(90 85 20)")
    makeEllipse(115, 20, 17.3, 10.3, "black", 1, "rotate(90 115 20)")
    makeEllipse(115, 20, 17, 10, "pink", 1, "rotate(90 115 20)") 
    makeCircle(100, 22, 6.3, "black")
    makeCircle(100, 22, 6, "pink")
    makeCircle(90, 25, 3, "white")
    makeCircle(80, 15, 3, "white")
    makeCircle(91, 16, 3, "white")
    makeCircle(87, 8, 3, "white")
    makeCircle(102, 20, 3, "white")
    makeCircle(117, 15, 3, "white")
    makeCircle(111, 9, 3, "white")
    makeCircle(110, 25, 3, "white")
    makeCircle(108.3, 17, 3, "white")
    makeCircle(118.5, 8, 3, "white")
    
    makeCircle(100, 50, 25, "black")
    makeCircle(75, 25, 12, "black")
    makeCircle(125, 25, 12, "black")
    
    makeEllipse(100, 60, 24, 15)
    makeEllipse(100, 60, 23.7, 14.7, "#ffe6cc")
    makeEllipse(100, 57, 19, 10, "black")
    makeEllipse(100, 56.5, 19, 10, "#ffe6cc")
    makeEllipse(92, 43, 16, 10, "#ffe6cc", 1, "rotate(90 92 43)")
    makeEllipse(108, 43, 16, 10, "#ffe6cc", 1, "rotate(90 108 43)")
    makePolyline("95,40 90,35", "black", .3, 1) 
    makePolyline("95,38 90,32", "black", .3, 1)
    makePolyline("95,36 90,28", "black", .3, 1) 
    makeEllipse(96, 43, 8.5, 3, "black", 1, "rotate(85 96 43)")
    makeEllipse(96, 43, 8, 2.5, "white", 1, "rotate(85 96 43)")
   makePolyline("105,40 109,35", "black", .3, 1) 
   makePolyline("105,38 109,32", "black", .3, 1) 
   makePolyline("105,36 109,28", "black", .3, 1)
    makeEllipse(104, 43, 8.5, 3, "black", 1, "rotate(95 104 43)")
    makeEllipse(104, 43, 8, 2.5, "white", 1, "rotate(95 104 43)")
    makeEllipse(97.3, 46, 3, 1.5, "black", 1, "rotate(88 97.3 46)")
    makeEllipse(102.7, 46.1, 3, 1.5, "black", 1, "rotate(90 102.7 46.1)")
    makeEllipse(100, 55.5, 10, 7)
    makeEllipse(100, 56, 12, 7, "#ffe6cc")
    makeEllipse(100, 55, 7, 4)
     
}


// Fill in this function so that it draws something using SVG shapes!
// You need to use at least 3 different types of shape.
// Remember, for the shapes to show up on the canvas, you'll need to CALL the function.
function createThirdScene() {
    makeRect(0, 0, 1000, 1000, "green", 1)
    
    makeEllipse(108, 23, 6.2, 4.2, "black", 1, "rotate(12 103 27)")
    makeEllipse(103, 22, 7.2, 5.2, "black", 1, "rotate(60 105 24)")
    makeEllipse(103, 22, 7, 5, "#91fd4f", 1, "rotate(60 105 24)")
    makeEllipse(108, 23, 6, 4, "#91fd4f", 1, "rotate(12 103 27)")
    makeRect(100.5, 22, 11.4, 10.5, "black", 1, "rotate(33 100.5 22)")
    makeRect(101, 21.5, 11, 10.5, "#91fd4f", 1, "rotate(33 101 21.5)")
    makeRect(99.6, 23, 11.4, 5, "black", 1, "rotate(33 99.5 23)")
    makeEllipse(103, 31, 8.2, 4.2, "black", 1, "rotate(18 103 27)")
    makeEllipse(103, 31, 8, 4, "#91fd4f", 1, "rotate(18 103 27)")
    makeRect(96, 30.5, 11.4, 11, "black", 1, "rotate(13 96 30.5)")
    makeRect(96.3, 30, 11, 11, "#91fd4f", 1, "rotate(13 96.3 30)")
    makeCircle(100, 47, 11, "black")
    
    
    makeEllipse(97.5, 46, 12, 5, "black", 1, "rotate(90 97.5 46)")
    makeEllipse(103.5, 46, 12, 5, "black", 1, "rotate(95 103.5 46)")
    makeEllipse(97.5, 47, 10, 3.5, "white", 1, "rotate(90 97.5 47)")
    makeEllipse(103.3, 47, 10, 3.5, "white", 1, "rotate(96 103.3 47)")
    makeEllipse(100, 69, 9.5, 11.5, "black")
    makeEllipse(100, 69, 9, 11, "#ffe6cc")
    makeEllipse(100, 69.7, 5, 3, "black")
    makeEllipse(100, 69, 6, 3, "#ffe6cc")
    makeEllipse(100, 67, 5, 3, "black")
    makeRect(87.5, 69, 6, 5.5, "black")
    makeRect(88, 69, 5, 5, "white")
    makeRect(106.5, 69, 6, 5.5, "black")
    makeRect(107, 69, 5, 5, "white")
    
    
    
    makeEllipse(93, 64, 11.5, 7, "black", 1, "rotate(170 93 64)")
    makeEllipse(91, 55, 5, 3.5, "black", 1, "rotate(40 91 55)")
    makeEllipse(91, 55, 4.5, 3, "#ffe6cc", 1, "rotate(40 91 55)")
    makeEllipse(107, 64, 11.5, 7, "black", 1, "rotate(10 107 64)")
    makeEllipse(98.7, 50, 3, 1.5, "black", 1, "rotate(90 98.7 50)")
    makeEllipse(102.3, 50, 3, 1.5, "black", 1, "rotate(95 102.3 50)")
    
    makeEllipse(109, 55, 5, 3.5, "black", 1, "rotate(140 109 55)")
    makeEllipse(109, 55, 4.5, 3, "#ffe6cc", 1, "rotate(140 109 55)")
    makeRect(90, 55, 20, 5.3, "black")
    makeRect(90.5, 54, 19, 5, "#ffe6cc")

    makeEllipse(100, 55.5, 7, 3)
    makeEllipse(100, 56.3, 7.5, 3, "#ffe6cc")
   
    makeEllipse(93, 64, 11, 6.5, "#ffe6cc", 1, "rotate(170 93 64)")

    makeEllipse(107, 64, 11, 6.5, "#ffe6cc", 1, "rotate(10 107 64)")
    makeEllipse(100, 58, 7, 3)
    makeEllipse(100, 58.8, 7.5, 3, "#ffe6cc")
    makeEllipse(100, 61, 7, 3)
    
}






// FILL IN THIS FUNCTION!
// This function is called whenever you press the "Go!" button.
function createRandomScene() {
    // Generate a random number between 0 and 1, and store it in a variable.
 var rando = Math.random()
    // If the number is less than 0.33, call the function to create your first scene.
    if(rando < 0.33){
    createFirstScene()
    }
    // Else, if the number is less than 0.67, call the function to create your second scene.
    else if(rando < 0.67){
createSecondScene()
    }
    
    // Else, call the function to create your third scene.
    else{
    createThirdScene()
    }
}



// DO NOT EDIT ANYTHING BELOW THIS LINE!
// These are the functions you should call to
// easily create shapes in JavaScript. Feel free
// to check them out if you're curious how they
// work, but don't change them!
// <3 Ms. Squires
function makeCircle(cx, cy, r, fill, opacity) {
  var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", cx)
  circle.setAttribute("cy", cy)
  circle.setAttribute("r", r)
  circle.setAttribute("fill", fill)
  circle.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(circle)
  return circle
}

function makeRect(x, y, width, height, fill, opacity, transform) {
  var rect = document.createElementNS(namespace, "rect")
  rect.setAttribute("x", x)
  rect.setAttribute("y", y)
  rect.setAttribute("width", width)
  rect.setAttribute("height", height)
  rect.setAttribute("fill", fill)
  rect.setAttribute("opacity", opacity)
    rect.setAttribute("transform", transform)

  var canvas = document.getElementById("canvas")
  canvas.appendChild(rect)
  return rect
}

function makeEllipse(cx, cy, rx, ry, fill, opacity, transform) {
  var ellipse = document.createElementNS(namespace, "ellipse")
  ellipse.setAttribute("cx", cx)
  ellipse.setAttribute("cy", cy)
  ellipse.setAttribute("rx", rx)
  ellipse.setAttribute("ry", ry)
  ellipse.setAttribute("fill", fill)
  ellipse.setAttribute("opacity", opacity)
  ellipse.setAttribute("transform", transform)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(ellipse)
  return ellipse
}

function makeLine(x1, y1, x2, y2, stroke, strokeWidth, opacity) {
  var line = document.createElementNS(namespace, "line")
  line.setAttribute("x1", x1)
  line.setAttribute("y1", y1)
  line.setAttribute("x2", x2)
  line.setAttribute("y2", y2)
  line.setAttribute("stroke", stroke)
  line.setAttribute("stroke-width", strokeWidth)
  line.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(line)
  return line
}

function makePolyline(points, stroke, strokeWidth, opacity) {
  var polyline = document.createElementNS(namespace, "polyline")
  polyline.setAttribute("points", points)
  polyline.setAttribute("stroke", stroke)
  polyline.setAttribute("stroke-width", strokeWidth)
  polyline.setAttribute("opacity", opacity)
  polyline.setAttribute("fill", "none")
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(polyline)
  return polyline
}

function makePolygon(points, fill, opacity) {
  var polygon = document.createElementNS(namespace, "polygon")
  polygon.setAttribute("points", points)
  polygon.setAttribute("opacity", opacity)
  polygon.setAttribute("fill", fill)

  var canvas = document.getElementById("canvas")
  canvas.appendChild(polygon)
  return polygon
}

function makeText(message, x, y, fontSize, fontFamily, fill, opacity) {
  var text = document.createElementNS(namespace, "text")
  text.innerHTML = message
  text.setAttribute("x", x)
  text.setAttribute("y", y)
  text.setAttribute("font-size", fontSize)
  text.setAttribute("font-family", fontFamily)
  text.setAttribute("fill", fill)
  text.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(text)
  return text
}

function makeImage(url, x, y, width, height, opacity) {
  var image = document.createElementNS(namespace, "image")
  image.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", url)
  image.setAttribute("x", x)
  image.setAttribute("y", y)
  image.setAttribute("width", width)
  image.setAttribute("height", height)
  image.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(image)
  return image
}