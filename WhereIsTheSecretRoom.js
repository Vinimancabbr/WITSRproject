/*randomNumber*/
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
/*chanceTest*/
function randomizer(percentage) {
    return percentage >= (Math.random() * 100);
}
/*Queue*/
class Queue {
    constructor() {
      this.elements = {};
      this.head = 0;
      this.tail = 0;
    }
    enqueue(element) {
      this.elements[this.tail] = element;
      this.tail++;
    }
    dequeue() {
      const item = this.elements[this.head];
      delete this.elements[this.head];
      this.head++;
      return item;
    }
    peek() {
      return this.elements[this.head];
    }
    length() {
      return this.tail - this.head;
    }
    isEmpty() {
      return this.length == 0;
    }
  }
let grid = [];
grid[0] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
grid[1] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
grid[2] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
grid[3] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
grid[4] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
grid[5] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
grid[6] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
grid[7] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
grid[8] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
grid[9] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
grid[10] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
grid[11] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
grid[12] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
var elementN = 1
for (let i = 0; i < 13; i++) {
    let x = 0;
    grid[i].forEach(element => {
        element = document.createElement('div')
        element.setAttribute('class','gridCell')
        element.setAttribute('id', elementN)
        document.getElementById('grid').appendChild(element)
        document.getElementById(elementN).innerText = `x${x}` + `y${i}`
        elementN++
        x++
    }); 
}
var numberOfRooms;
var curseV = 3;
var q = new Queue;
var usedRooms = 0;
var allRInfo = [];
/*floor Generator*/
function floorStatusGenerator(f) {
    console.log('floor generation started')
    grid[6][6] = 1;
    q.enqueue([6, 6])
    /*grid[y][x]*/
        /*determine the curse*/
    let curse = []
    /*curse of the XL*/
    curse[0] = Math.round(1.8 * (3.33 * f + getRndInteger(5, 6)) + getRndInteger(2, 3));
    /*Lost chance*/ 
    curse[1] = Math.round((3.33 * (f + 1) + getRndInteger(5, 6)) + getRndInteger(2, 3));
    /*normalChance*/ 
    curse[2] = Math.round((3.33 * f + getRndInteger(5, 6)) + getRndInteger(2, 3)) 
    if (curseV > 2) {
    f / 2 != 0 && randomizer(100) ? curseV = 0 : curseV = getRndInteger(1,2); 
        }  
    numberOfRooms = curse[curseV];
    console.log(`${numberOfRooms} rooms`)
    let BRoomChance = 70;
    while (q.length() != 0) {
      let cell = q.dequeue()
      let y = cell[0];
      let x = cell[1];
      let checkP;
      checkP = 0;
      let fix;
      /*right*/
      if (randomizer(50)) {
        console.log('random')
      if ((numberOfRooms > usedRooms + 4) && randomizer(BRoomChance) && numberNeighbours(y, x + 1) + numberNeighbours(y, x + 2) < 2) {
        console.log('first if')
        if (numberNeighbours(y + 1, x + 1) + numberNeighbours(y + 1, x + 2) < 2) {
          fix = y + 1
          checkP++}
        if (numberNeighbours(y - 1, x + 1) + numberNeighbours(y - 1, x + 2) < 2 && checkP == 0) {
          fix = y - 1
          checkP++}
          console.log(checkP + 'checkP Value')
          console.log(fix + 'fix value')
          if (checkP != 0) {
            console.log('trying switch case right')
          switch (getRndInteger(0, 5)) {
          case 0: console.log('case 0'); placeRoom(y, x + 1, -1); placeRoom(y, x + 2, -1);  placeRoom(fix, x + 1, -1); placeRoom(fix, x + 2, -1); console.log('end')
            break;
          case 1: console.log('case 1'); placeRoom(y, x + 1, -1); placeRoom(fix, x + 1, -1); placeRoom(fix, x + 2, -1); console.log('end');
            break;
          case 2: console.log('case 2'); placeRoom(y, x + 1, -1); placeRoom(y, x + 2, -1); placeRoom(fix, x + 1, -1); console.log('end');
            break;
          case 3: console.log('case 3'); placeRoom(y, x + 1, -1); placeRoom(y, x + 2, -1); placeRoom(fix, x + 2, -1); console.log('end');
            break;
          case 4: console.log('case 4'); placeRoom(y, x + 1, -1); placeRoom(y, x + 2, -1); console.log('end');
            break;
          case 5: console.log('case 5'); placeRoom(y, x + 1, -1); placeRoom(fix, x + 1, -1); console.log('end');
          }  
          BRoomChance = 10
        } else {
        numberNeighbours(y, x + 1) < 2 && (numberOfRooms != usedRooms) ? placeRoom(y, x + 1, numberNeighbours(y, x + 1)) : console.log(`${y}` + `${x + 1} was not decided!`)}
      } else {
        numberNeighbours(y, x + 1) < 2 && (numberOfRooms != usedRooms) ? placeRoom(y, x + 1, numberNeighbours(y, x + 1)) : console.log(`${x + 1}` + `${y} was not decided!`);
      }
    } else {
      console.log('room not decided')
    }
      /*left*/
      if (randomizer(50)) {
      if ((numberOfRooms > usedRooms + 4) && randomizer(BRoomChance) && numberNeighbours(y, x - 1) + numberNeighbours(y, x - 2) < 2) {
        if (numberNeighbours(y + 1, x - 1) + numberNeighbours(y + 1, x - 2) < 2) {
          fix = y + 1
          checkP++}
        if (numberNeighbours(y - 1, x - 1) + numberNeighbours(y - 1, x - 2) < 2 && checkP == 0) {
          fix = y - 1
          checkP++}
          if (checkP != 0) {
          switch (getRndInteger(0, 5)) {
          case 0: placeRoom(y, x - 1, -1); placeRoom(y, x - 2, -1); placeRoom(fix, x - 1, -1); placeRoom(fix, x - 2, -1);
            break;
          case 1: placeRoom(y, x - 1, -1); placeRoom(fix, x - 1, -1); placeRoom(fix, x - 2, -1);
            break;
          case 2: placeRoom(y, x - 1, -1); placeRoom(y, x - 2, -1); placeRoom(fix, x - 1, -1);
            break;
          case 3: placeRoom(y, x - 1, -1); placeRoom(y, x - 2, -1); placeRoom(fix, x - 2, -1);
            break;
          case 4: placeRoom(y, x - 1, -1); placeRoom(y, x - 2, -1);
            break;
          case 5: placeRoom(y, x - 1, -1); placeRoom(fix, x - 1, -1);
          }  
          BRoomChance = 10
        } else {
          numberNeighbours(y, x - 1) < 2 && (numberOfRooms != usedRooms) ? placeRoom(y, x - 1, numberNeighbours(y, x - 1)) : console.log(`${y}` + `${x - 1} was not decided!`);}
      } else {
        numberNeighbours(y, x - 1) < 2 && (numberOfRooms != usedRooms) ? placeRoom(y, x - 1, numberNeighbours(y, x - 1)) : console.log(`${y}` + `${x - 1} was not decided!`);
      } 
    }
      /*bot*/
      if (randomizer(50)) {
      if ((numberOfRooms > usedRooms + 4) && randomizer(BRoomChance) && numberNeighbours(y + 1, x) + numberNeighbours(y + 2, x) < 2) {
        if (numberNeighbours(y + 1, x - 1) + numberNeighbours(y + 2, x - 1) < 2) {
          fix = x - 1
          checkP++}
        if (numberNeighbours(y + 1, x + 1) + numberNeighbours(y + 2, x + 1) < 2 && checkP == 0) {
          fix = x + 1
          checkP++}
          if (checkP != 0) {
          switch (getRndInteger(0, 5)) {
          case 0: placeRoom(y + 1, x, -1); placeRoom(y + 2, x, -1); placeRoom(y + 1, fix, -1); placeRoom(y + 2, fix, -1);
            break;
          case 1: placeRoom(y + 1, x, -1); placeRoom(y + 1, fix, -1); placeRoom(y + 2, fix, -1);
            break;
          case 2: placeRoom(y + 1, x, -1); placeRoom(y + 2, x, -1); placeRoom(y + 1, fix, -1);
            break;
          case 3: placeRoom(y + 1, x, -1); placeRoom(y + 2, x, -1); placeRoom(y + 2, fix, -1);
            break;
          case 4: placeRoom(y + 1, x, -1); placeRoom(y + 2, x, -1);
            break;
          case 5: placeRoom(y + 1, x, -1); placeRoom(y + 1, fix, -1);
          }  
          BRoomChance = 10
        } else {
          numberNeighbours(y + 1, x) < 2 && (numberOfRooms != usedRooms) ? placeRoom(y + 1, x, numberNeighbours(y + 1, x)) : console.log(`${y + 1}` + `${x} was not decided!`);}
      } else {
        numberNeighbours(y + 1, x) < 2 && (numberOfRooms != usedRooms) ? placeRoom(y + 1, x, numberNeighbours(y + 1, x)) : console.log(`${y + 1}` + `${x} was not decided!`);
      }
    }
      /*top*/
      if ((numberOfRooms > usedRooms + 4) && randomizer(BRoomChance) && numberNeighbours(y - 1, x) + numberNeighbours(y - 2, x) < 2) {
        if (numberNeighbours(y - 1, x - 1) + numberNeighbours(y - 2, x - 1) < 2) {
          fix = x + 1
          checkP++}
        if (numberNeighbours(y - 1, x + 1) + numberNeighbours(y - 2, x + 1) < 2 && checkP == 0) {
          fix = x + 1
          checkP++}
          if (checkP != 0) {
          switch (getRndInteger(0, 5)) {
          case 0: placeRoom(y - 1, x, -1); placeRoom(y - 2, x, -1); placeRoom(y - 1, fix, -1); placeRoom(y - 2, fix, -1);
            break;
          case 1: placeRoom(y - 1, x, -1); placeRoom(y - 1, fix, -1); placeRoom(y - 2, fix, -1);
            break;
          case 2: placeRoom(y - 1, x, -1); placeRoom(y - 2, x, -1); placeRoom(y - 1, fix, -1);
            break;
          case 3: placeRoom(y - 1, x, -1); placeRoom(y - 2, x, -1); placeRoom(y - 2, fix, -1);
            break;
          case 4: placeRoom(y - 1, x, -1); placeRoom(y - 2, x, -1);
            break;
          case 5: placeRoom(y - 1, x, -1); placeRoom(y - 1, fix, -1);
          }  
          BRoomChance = 10
        } else {
          numberNeighbours(y - 1, x) < 2 && (numberOfRooms != usedRooms) ? placeRoom(y - 1, x, numberNeighbours(y - 1, x)) : console.log(`${y - 1}` + `${x} was not decided!`);}
      } else {
        numberNeighbours(y - 1, x) < 2 && (numberOfRooms != usedRooms) ? placeRoom(y - 1, x, numberNeighbours(y - 1, x)) : console.log(`${y - 1}` + `${x} was not decided!`);
      }
    console.log(usedRooms)}
    console.warn(numberOfRooms)
    console.log(grid)
    if (usedRooms < numberOfRooms){
      clearFloor(f)
    }
      for (let y = 1; y < 168; y++) {
        allRInfo[y] = [];
      }
      let y;
      let x;
      let h = 0;
      for (y = 0; y < grid.length; y++) {
        for (x = 0; x < grid[y].length; x++) { 
          let deadEnd = 0     
          numberNeighbours(y, x) == 1 && grid[y][x] == (1 || -1) && deadEnd++
          allRInfo[h] = [`${x},${y}`, numberNeighbours(y, x), h, deadEnd]
          h++
          if (grid[y][x] === 1) {
            document.getElementById(y * 13 + x + 1).style.backgroundColor = 'rgba(128, 128, 128, 0.781)';
        } else if (grid[y][x] === -1) {
          document.getElementById(y * 13 + x + 1).style.backgroundColor = 'rgba(124, 129, 59, 0.881)';
        }
      }
    }
    console.log(allRInfo)
  }
function numberNeighbours(y, x) {
  let numberNeighbours = 0;
  if (13 > y && y > -1 && 13 > x && x > -1){
    console.log(`${y}y` + `${x}x`)
  if (grid[y][x] == (1) || grid[y][x] == (-1)){
    return 10
  } else {
       13 > y - 1 && y - 1 > -1 && 13 > x && x > -1 && grid[y - 1][x] == (1) && numberNeighbours++;
       13 > y - 1 && y - 1 > -1 && 13 > x && x > -1 && grid[y - 1][x] == (-1) && numberNeighbours++;
       13 > y + 1 && y + 1 > -1 && 13 > x && x > -1 && grid[y + 1][x] == (1) && numberNeighbours++;
       13 > y + 1 && y + 1 > -1 && 13 > x && x > -1 && grid[y + 1][x] == (-1) && numberNeighbours++;
       13 > y && y > -1 && 13 > x - 1 && x - 1 > -1 && grid[y][x - 1] == (1) &&  numberNeighbours++; 
       13 > y && y > -1 && 13 > x - 1 && x - 1 > -1 && grid[y][x - 1] == (-1) &&  numberNeighbours++;
       13 > y && y > -1 && 13 > x + 1 && x + 1 > -1 && grid[y][x + 1] == (1) && numberNeighbours++;
       13 > y && y > -1 && 13 > x + 1 && x + 1 > -1 && grid[y][x + 1] == (-1) && numberNeighbours++;
  return numberNeighbours; 
  }
  }
  }
  function placeRoom(y, x, numberNeighbours) {
    console.warn(`${y}` + `${x}` + numberNeighbours)
    if (numberNeighbours < 2  && x < 13 && y < 13 && x > -1 && y > -1) {
        grid[y][x] = 0 + numberNeighbours;
        console.log(grid[y][x] + 'cell')
        console.log(`${numberNeighbours} vizinhas`)
        q.enqueue([y, x]);
        usedRooms++
        console.warn(`${x} + ${y} placed`)
      }  else {
        console.log('not placed!')
      }
    }
  function clearFloor (f) {
    usedRooms = 0
      let i;
      let j;
      for (i = 0; i < grid.length; i++) {
        for (j = 0; j < grid[i].length; j++) {
            grid[i][j] = 0;
            document.getElementById(i * 13 + j + 1).style.backgroundColor = '#040403';
      }
    }
    while (Queue.length > 0) {
      Queue.dequeue()
    }
    floorStatusGenerator(f);
  }
 