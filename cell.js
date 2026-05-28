// Convert grid coordinates to flat array index
function index(i, j) {
  if (i < 0 || j < 0 || i >= cols || j >= rows) return -1;
  return j * cols + i;
}

function Cell(i, j) {
  this.i = i;
  this.j = j;
  this.walls = [true, true, true, true];
  this.id = i * cols + (j + 1);

  this.randomNeighbor = function () {
    let neighbors = [];

    let top = grid[index(i, j - 1)];
    let right = grid[index(i + 1, j)];
    let bottom = grid[index(i, j + 1)];
    let left = grid[index(i - 1, j)];

    if (this.walls[0] && top) {
      neighbors.push(top);
    }
    if (this.walls[1] && right) {
      neighbors.push(right);
    }
    if (this.walls[2] && bottom) {
      neighbors.push(bottom);
    }
    if (this.walls[3] && left) {
      neighbors.push(left);
    }

    if (neighbors.length > 0) {
      let r = floor(random(0, neighbors.length));
      return neighbors[r];
    } else {
      return undefined;
    }

  }

  this.topNeighbor = function () {
    let neighbors = [];

    let top = grid[index(i, j - 1)];
  
    if (this.walls[0] && top) {
      neighbors.push(top);
    }

    if (neighbors.length > 0) {
      let r = floor(random(0, neighbors.length));
      return neighbors[r];
    } else {
      return undefined;
    }
  }


  this.rightNeighbor = function () {
    let neighbors = [];

    let right = grid[index(i + 1, j)];
  
    if (this.walls[1] && right) {
      neighbors.push(right);
    }

    if (neighbors.length > 0) {
      let r = floor(random(0, neighbors.length));
      return neighbors[r];
    } else {
      return undefined;
    }
  }

  this.bottomNeighbor = function () {
    let neighbors = [];

    let bottom = grid[index(i, j + 1)];
  
    if (this.walls[2] && bottom) {
      neighbors.push(bottom);
    }

    if (neighbors.length > 0) {
      let r = floor(random(0, neighbors.length));
      return neighbors[r];
    } else {
      return undefined;
    }
  }

  this.leftNeighbor = function () {
    let neighbors = [];

    let left = grid[index(i - 1, j)];
  
    if (this.walls[3] && left) {
      neighbors.push(left);
    }

    if (neighbors.length > 0) {
      let r = floor(random(0, neighbors.length));
      return neighbors[r];
    } else {
      return undefined;
    }
  }


  this.highlight = function (isRed) {
    let x = this.i * w;
    let y = this.j * w;
    noStroke();
    isRed ? fill('red') : fill(0, 0, 255, 100);
    isRed ? rect(x + 2, y + 2, w - 4, w - 4) : rect(x, y, w, w);

  }

  this.show = function () {
    let x = this.i * w;
    let y = this.j * w;
    stroke(255);
    if (this.walls[0]) {
      line(x, y, x + w, y);
    }
    if (this.walls[1]) {
      line(x + w, y, x + w, y + w);
    }
    if (this.walls[2]) {
      line(x + w, y + w, x, y + w);
    }
    if (this.walls[3]) {
      line(x, y + w, x, y);
    }
  }
}
