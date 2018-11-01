var element, logoWidth, navWidth;

element = document.getElementById('clicked-menu-item');

navWidth = document.getElementById('nav').offsetWidth;

logoWidth = document.getElementsByClassName('header--logo')[0].offsetWidth;

document.getElementById('nav').style.width = '0';

element.onclick = function(obj) {
  if (obj.srcElement.classList.contains('clicked')) {
    document.getElementById("nav").style.width = '0';
  } else {
    document.getElementById("nav").style.width = navWidth + 'px';
    document.getElementById("nav").style.overflowX = 'auto';
  }
  obj.srcElement.classList.toggle('clicked');
  return false;
};

var last_known_scroll_position;

last_known_scroll_position = 0;

window.addEventListener('scroll', (function(event) {
  var header_element;
  last_known_scroll_position = window.scrollY;
  header_element = document.getElementsByClassName("header")[0];
  if (last_known_scroll_position > 10) {
    if (header_element.classList.contains('header__bottom-border')) {

    } else {
      header_element.classList.add('header__bottom-border');
    }
  } else {
    header_element.classList.remove('header__bottom-border');
  }
}));

var scrollToListener;

document.addEventListener("DOMContentLoaded", function() {
  var anchors, href, i, j, ref, results;
  anchors = document.getElementsByTagName("a");
  results = [];
  for (i = j = 0, ref = anchors.length; 0 <= ref ? j < ref : j > ref; i = 0 <= ref ? ++j : --j) {
    href = anchors[i].getAttribute("href");
    if (href[0] === '/' && href.length === 1) {
      results.push(anchors[i].addEventListener('click', function(event) {
        event.preventDefault();
        return window.scroll({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
      }));
    } else if (href[0] === "#") {
      results.push(anchors[i].addEventListener("click", scrollToListener));
    } else {
      results.push(void 0);
    }
  }
  return results;
});

scrollToListener = function(event) {
  var attribute;
  event.preventDefault();
  attribute = this.getAttribute('href');
  return document.querySelector(attribute).scrollIntoView({
    behavior: 'smooth'
  });
};

var canvas, cols, draw, flying, h, rows, scl, setup, terrain, w;

canvas = void 0;

cols = void 0;

rows = void 0;

w = void 0;

h = void 0;

scl = 30;

flying = 0;

terrain = void 0;

setup = function() {
  var main, myCanvas, results, x;
  main = document.getElementsByClassName("main")[0];
  myCanvas = createCanvas(main.offsetWidth, main.offsetHeight, WEBGL);
  myCanvas.parent('hero-animation');
  background('rgba(245, 244, 236, 1)');
  pixelDensity(2);
  strokeWeight(1);
  w = main.offsetWidth;
  h = main.offsetHeight;
  cols = w / scl;
  rows = h / scl;
  terrain = [];
  x = 0;
  results = [];
  while (x < cols) {
    terrain[x] = [];
    results.push(x++);
  }
  return results;
};

draw = function() {
  var x, xoff, y, yoff;
  flying -= 0.025;
  yoff = flying;
  y = 0;
  while (y < rows) {
    xoff = 0;
    x = 0;
    while (x < cols) {
      terrain[x][y] = map(noise(xoff, yoff), 0, 1, -100, 100);
      xoff += 0.2;
      x++;
    }
    yoff += 0.2;
    y++;
  }
  background(245, 244, 236);
  stroke(17, 18, 16);
  noFill();
  translate(0, 600);
  rotateX(PI / 3);
  translate(-w / 2, -h / 2);
  y = 0;
  while (y < (rows - 1)) {
    beginShape(TRIANGLE_STRIP);
    x = 0;
    while (x < cols) {
      vertex(x * scl, y * scl, terrain[x][y]);
      vertex(x * scl, (y + 1) * scl, terrain[x][y + 1]);
      x++;
    }
    endShape();
    y++;
  }
};
