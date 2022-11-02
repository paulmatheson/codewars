//CodeWars: Build Tower Exercise

//Build Tower by the following given argument:
//number of floors (integer and always greater than 0).

//Tower block is represented as *

//code:

function towerBuilder(nFloors) {
  var tower = [];

  for (var i = 1; i <= nFloors; i++) {
    tower.push("");

    for (var k = 0; k < (nFloors - i); k++) {
      tower[i - 1] += " ";
    }

    for (var k = 0; k < ((i * 2) - 1); k++) {
      tower[i - 1] += "*";
    }

    for (var k = 0; k < (nFloors - i); k++) {
      tower[i - 1] += " ";
    }
  }
  return tower;
}