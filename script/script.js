// Mátrix definíció
const matrix = Array.from({ length: 11 }, () => Array(11).fill(0));
const placeMatrix = Array.from({length: 3}, () => Array(3).fill(0));

//CONSTANTS
const missionTable = document.querySelector('#challenges');
const missionOne = document.getElementById('m1');
const missionTwo = document.getElementById('m2');
const missionThree = document.getElementById('m3');
const missionFour = document.getElementById('m4');
const challSum = document.querySelector('#challSum');
let timeforThis = 0;
let m1Sum = 0;
let m2Sum = 0;
let m3Sum = 0;
let m4Sum = 0;
const timeToPlace = document.querySelector('#timeforThis');
const m1h = document.getElementById('m1h');
const m2h = document.getElementById('m2h');
const m3h = document.getElementById('m3h');
const m4h = document.getElementById('m4h');
const summer = document.querySelector('#summerTable');
const winter = document.querySelector('#winterTable');
const autumn = document.querySelector('#autumnTable');
const spring = document.querySelector('#springTable');
const urpointsare = document.querySelector('#urpointsare');
const newGameButton = document.querySelector('#newGameButton');
const endGameButton = document.querySelector('#endGameButton');
enabled = true;
prevPoints = 0;

seasonChalls = [];
const seasonname = ["", "Tavasz", "Nyár", "Ősz", "Tél"];
points = 0;
let pointsSum = 0;
const summerpoints = 0;
const autumnpoints = 0;
const winterpoints = 0;
const springpoints = 0;
nexttime = 0;
time = 0;
season = 1;
const elements = [
  {
      time: 2,
      type: 'water',
      shape: [[1,1,1],
              [0,0,0],
              [0,0,0]],
  },
  {
      time: 2,
      type: 'town',
      shape: [[1,1,1],
              [0,0,0],
              [0,0,0]],
      
  },
  {
      time: 1,
      type: 'forest',
      shape: [[1,1,0],
              [0,1,1],
              [0,0,0]],

  },
  {
      time: 2,
      type: 'farm',
      shape: [[1,1,1],
              [0,0,1],
              [0,0,0]],
 
      },
  {
      time: 2,
      type: 'forest',
      shape: [[1,1,1],
              [0,0,1],
              [0,0,0]],
 
  },
  {
      time: 2,
      type: 'town',
      shape: [[1,1,1],
              [0,1,0],
              [0,0,0]],

  },
  {
      time: 2,
      type: 'farm',
      shape: [[1,1,1],
              [0,1,0],
              [0,0,0]],

  },
  {
      time: 1,
      type: 'town',
      shape: [[1,1,0],
              [1,0,0],
              [0,0,0]],
 
  },
  {
      time: 1,
      type: 'town',
      shape: [[1,1,1],
              [1,1,0],
              [0,0,0]],

  },
  {
      time: 1,
      type: 'farm',
      shape: [[1,1,0],
              [0,1,1],
              [0,0,0]],
 
  },
  {
      time: 1,
      type: 'farm',
      shape: [[0,1,0],
              [1,1,1],
              [0,1,0]],
 
  },
  {
      time: 2,
      type: 'water',
      shape: [[1,1,1],
              [1,0,0],
              [1,0,0]],
 
  },
  {
      time: 2,
      type: 'water',
      shape: [[1,0,0],
              [1,1,1],
              [1,0,0]],
 
  },
  {
      time: 2,
      type: 'forest',
      shape: [[1,1,0],
              [0,1,1],
              [0,0,1]],

  },
  {
      time: 2,
      type: 'forest',
      shape: [[1,1,0],
              [0,1,1],
              [0,0,0]],

  },
  {
      time: 2,
      type: 'water',
      shape: [[1,1,0],
              [1,1,0],
              [0,0,0]],
  },
]
const challenges = 
{
  "basic": [
    {
      "title": "Az erdő széle",
      "description": "A térképed szélével szomszédos erdőmezőidért egy-egy pontot kapsz.",
      "link" : "assets/missions_hun/Group 69.png"
    },
    {
      "title": "Álmos-völgy",
      "description": "Minden olyan sorért, amelyben három erdőmező van, négy-négy pontot kapsz.",
      "link" : "assets/missions_hun/Group 74.png"
    },
    {
      "title": "Krumpliöntözés",
      "description": "A farmmezőiddel szomszédos vízmezőidért két-két pontot kapsz.",
      "link" : "assets/missions_hun/Group 70.png"
    },
    {
      "title": "Határvidék",
      "description": "Minden teli sorért vagy oszlopért 6-6 pontot kapsz.",
      "link" : "assets/missions_hun/Group 78.png"
    }
  ],
  "extra": [
    {
      "title": "Fasor",
      "description": "A leghosszabb, függőlegesen megszakítás nélkül egybefüggő erdőmezők mindegyikéért kettő-kettő pontot kapsz. Két azonos hosszúságú esetén csak az egyikért.",
      "link" : "assets/missions_hun/Group 68.png"
    },
    {
      "title": "Gazdag város",
      "description": "A legalább három különböző tereptípussal szomszédos falurégióidért három-három pontot kapsz.",
      "link" : "assets/missions_hun/Group 71.png"
    },
    {
      "title": "Öntözőcsatorna",
      "description": "Minden olyan oszlopodért, amelyben a farm illetve a vízmezők száma megegyezik, négy-négy pontot kapsz. Mindkét tereptípusból legalább egy-egy mezőnek lennie kell az oszlopban ahhoz, hogy pontot kaphass érte.",
      "link" : "assets/missions_hun/Group 75.png"
    },
    {
      "title": "Mágusok völgye",
      "description": "A hegymezőiddel szomszédos vízmezőidért három-három pontot kapsz.",
      "link" : "assets/missions_hun/Group 76.png"
    },
    {
      "title": "Üres telek",
      "description": "A városmezőiddel szomszédos üres mezőkért 2-2 pontot kapsz.",
      "link" : "assets/missions_hun/Group 77.png"
    },
    {
      "title": "Sorház",
      "description": "A leghosszabb, vízszintesen megszakítás nélkül egybefüggő falumezők mindegyikéért kettő-kettő pontot kapsz.",
      "link" : "assets/missions_hun/Group 72.png"
    },
    {
      "title": "Páratlan silók",
      "description": "Minden páratlan sorszámú teli oszlopodért 10-10 pontot kapsz.",
      "link" : "assets/missions_hun/Group 73.png"
    },
    {
      "title": "Gazdag vidék",
      "description": "Minden legalább öt különböző tereptípust tartalmazó sorért négy-négy pontot kapsz.",
      "link" : "assets/missions_hun/Group 79.png"
    }
  ],
}
firstij = [-1, -1];


// Táblázat készítése
const table = document.getElementById('mapTable');
for (let i = 0; i < 11; i++) {
  const row = document.createElement('tr');
  for (let j = 0; j < 11; j++) {
    const cell = document.createElement('td');
    row.appendChild(cell);
  }
  table.appendChild(row);
}

/*PLACETABLE CREATE AND UPDATE */
const placeTable = document.getElementById('placeTable');
for(let i = 0; i < 3; i++){
  const row= document.createElement('tr');
  for(let j = 0; j < 3; j++){
    const cell = document.createElement('td');
    row.appendChild(cell);
  }
  placeTable.appendChild(row);
}

//EVENTLISTNENERS




const rotateButton = document.querySelector('#rotateButton');
const mirrorButton = document.querySelector('#mirrorButton');
newGameButton.addEventListener('click', function(){
  startGame();
});
endGameButton.addEventListener('click', function(){
  endGame()
});
rotateButton.addEventListener('click', function() {
  rotatePlaceMatrix();
});

mirrorButton.addEventListener('click', function() {
  mirrorPlaceMatrix();
});





function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}



//MOSEOVER

table.addEventListener('mouseover', function(event) {
  const target = event.target;
  if (target.tagName === 'TD') {
    const index = getIndexFromCell(target);
    const list = findElements();
    highlightCell(index, list);
  }
});

table.addEventListener('mouseout', function(event) {
  const target = event.target;
  if (target.tagName === 'TD') {
    const index = getIndexFromCell(target);
    const list = findElements();
    removeHighLight(index, list);
    
  }
});


table.addEventListener('click', function(event) {
  if(enabled){
    const target = event.target;
    const index = getIndexFromCell(target);
    const list = findElements();
    placeElements(index, list);
  }
  
});

function getIndexFromCell(cell){
  const row = cell.parentNode.rowIndex;
  const col = cell.cellIndex;
  return [row, col];
}
function highlightCell(index, list){
  const matI = index[0];
  const matJ = index[1];
  bool = false;
  const highlightlist = [];
  for(let i = 0; i < list.length; i++){
    const cordI = matI + list[i][0];
    const cordJ = matJ + list[i][1];
    if(cordI >= 0 && cordI <= 10 && cordJ >= 0 && cordJ <= 10 && matrix[cordI][cordJ] == 0){
      highlightlist.push([cordI, cordJ]);
    }
    else if(cordI >= 0 && cordI <= 10 && cordJ >= 0 && cordJ <= 10){
      highlightlist.push([cordI, cordJ]);
      bool = true;
    }
    else{
      bool = true;
    }
  }
  if(bool){
    for(let i = 0; i < highlightlist.length; i++){
      
      const cell = document.getElementById(`mapTable`).getElementsByTagName('td')[highlightlist[i][0] * 11 + highlightlist[i][1]];
      cell.style.backgroundColor = 'red';
    }
  }
  else{
    for(let i = 0; i < highlightlist.length; i++){
      const cell = document.getElementById(`mapTable`).getElementsByTagName('td')[highlightlist[i][0] * 11 + highlightlist[i][1]];
      cell.style.backgroundColor = 'green';
    }
  }
}
function removeHighLight(index, list){
  
  const matI = index[0];
  const matJ = index[1];
  for(let i = 0; i < list.length; i++){
    const cordI = matI + list[i][0];
    const cordJ = matJ + list[i][1];
    
    if(cordI >= 0 && cordI <= 10 && cordJ >= 0 && cordJ <= 10){
      
      const cell = document.getElementById(`mapTable`).getElementsByTagName('td')[cordI * 11 + cordJ];
      cell.style.backgroundColor = '';
    }
  }
}
function placeElements(index, list){
  const matI = index[0];
  const matJ = index[1];
  bool = true;
  for(let i = 0; i < list.length; i++){
    const cordI = matI + list[i][0];
    const cordJ = matJ + list[i][1];
    if(cordI >= 0 && cordI <= 10 && cordJ >= 0 && cordJ <= 10 && matrix[cordI][cordJ] === 0){
    }
    else{
      bool = false;
    }
  }
  if(bool){
    for(let i = 0; i < list.length; i++){
      const cordI = matI + list[i][0];
      const cordJ = matJ + list[i][1];
      matrix[cordI][cordJ] = placeMatrix[firstij[0] + list[i][0]][firstij[1] + list[i][1]];
      
    }
    
    time += nexttime;
    setNewPLace();
    updateTable();
  }
  else{
  }
  

}
  

function findElements(){
  firsti = -1;
  firstj = -1;
  found = false;
  for(let i = 0 ; i < 3; i++){
    for (let j = 0; j < 3 ; j++){
      if(placeMatrix[i][j] != 0 && found === false){
        firsti = i;
        firstj = j;
        found = true;
        break;
      }
    }
  }
  const list = [];
  for(let i = 0 ; i < 3; i++){
    for (let j = 0; j <3 ; j++){
      if(placeMatrix[i][j] != 0){
        list.push([(firsti - i) * -1, (firstj - j) * -1]);
      }
    }
  }
  firstij = [firsti, firstj];
  return list;
}





//NEW SEASON
function newSeason(){
  if(time-7 > 0){
    time = 1;
  }
  else{
    time = 0;
  }
  
  document.querySelector('#timeLeftFromSeason').innerHTML = "Évszakból eltelt idő : " + time + "/7";
  season += 1;
  document.querySelector('#thisSeason').innerHTML = "Jelenlegi évszak: "+ seasonname[season];
  switch (season) {
    case 2:
      spring.classList.remove('highlightTable');
      summer.classList.add('highlightTable');
      m1h.classList.remove('highlightImage');
      m3h.classList.add('highlightImage');
      checkMission([seasonChalls[0]+1]);
 
      pointsSum += points;
      m1Sum += points;
      points = 0;
      checkMission([seasonChalls[1]+1]);

      pointsSum += points;
      m2Sum += points;
      points = 0;
      spring.querySelector('tr:nth-child(2) td').innerHTML = pointsSum - prevPoints;
      prevPoints = pointsSum;
      break;
    case 3:
      
      summer.classList.remove('highlightTable');
      autumn.classList.add('highlightTable');
      m2h.classList.remove('highlightImage');
      m4h.classList.add('highlightImage');
      checkMission([seasonChalls[1]+1]);
   
      pointsSum += points;
      m2Sum += points;
      points = 0;
      checkMission([seasonChalls[2]+1]);

      pointsSum += points;
      m3Sum += points;
      points = 0;
      summer.querySelector('tr:nth-child(2) td').innerHTML = pointsSum - prevPoints;
      prevPoints = pointsSum;
      break;
    case 4:
      m3h.classList.remove('highlightImage');
      m1h.classList.add('highlightImage');
      autumn.classList.remove('highlightTable');
      winter.classList.add('highlightTable');
      checkMission([seasonChalls[2]+1]);

      pointsSum += points;
      m3Sum += points;
      points = 0;
      checkMission([seasonChalls[3]+1]);

      pointsSum += points;
      m4Sum += points;
      points = 0;
      autumn.querySelector('tr:nth-child(2) td').innerHTML = pointsSum - prevPoints;
      prevPoints = pointsSum;
      break;
    case 5:
      checkMission([seasonChalls[3]+1]);
  
      pointsSum += points;
      m4Sum += points;
      points = 0;
      checkMission([seasonChalls[0]+1]);
  
      pointsSum += points;
      m1Sum += points;
      points = 0;
      winter.querySelector('tr:nth-child(2) td').innerHTML = pointsSum - prevPoints;
      prevPoints = pointsSum;
      endGame();
    default:
      break;
  }
  document.querySelector('#pointSum').innerHTML = "Összesen: " + pointsSum + " pont";
}
function reSetTable(){
  for(let i = 0; i < 11; i++){
    for(let j = 0; j < 11; j++){
      matrix[i][j] = 0;
      
    }
  }
  setTable();
}
// Mátrix update
function updateTable() {
  const cells = document.querySelectorAll('#mapTable td');
  cells.forEach((cell, index) => {
    const row = Math.floor(index / 11);
    const col = index % 11;
    switch (matrix[row][col]) {
      case -1:
          cell.style.backgroundImage = 'url("assets/tiles/mountain_tile.png")';
          break;
      case 1:
          cell.style.backgroundImage = 'url("assets/tiles/water_tile.png")';
          break;
      case 2:
          cell.style.backgroundImage = 'url("assets/tiles/forest_tile.png")';
          break;
      case 3:
          cell.style.backgroundImage = 'url("assets/tiles/plains_tile.png")';
          break;
      case 4:
          cell.style.backgroundImage = 'url("assets/tiles/village_tile.png")';
          break;
      default:
          cell.style.backgroundImage = 'url("assets/tiles/base_tile.png")';
          break;
    }
  
  });
  document.querySelector('#timeLeftFromSeason').innerHTML = "Évszakból eltelt idő : " + time + "/7"; 
  if(time >= 7){
    newSeason();
  }
}
function startGame(){
  pointsSum = 0;
  points = 0;
  time = 0;
  nexttime = 0;
  season = 1;
  prevPoints = 0;
  m1Sum = 0;
  m2Sum = 0;
  m3Sum = 0; 
  m4Sum = 0;
  updatePLaceTable();
  reSetTable();
  updateTable();
  setNewMissions();
  newGameButton.style.visibility = 'hidden';
  endGameButton.style.visibility = 'visible';
  urpointsare.style.visibility = 'hidden';
  summer.querySelector('tr:nth-child(2) td').innerHTML = "0";
  autumn.querySelector('tr:nth-child(2) td').innerHTML = "0";
  winter.querySelector('tr:nth-child(2) td').innerHTML = "0";
  spring.querySelector('tr:nth-child(2) td').innerHTML = "0";
  document.querySelector('#pointSum').innerHTML = "Összesen: " + pointsSum + " pont";
  spring.classList.add('highlightTable');
  summer.classList.remove('highlightTable');
  autumn.classList.remove('highlightTable');
  winter.classList.remove('highlightTable');
  m1h.classList.add('highlightImage');
  m2h.classList.add('highlightImage');
  m3h.classList.remove('highlightImage');
  m4h.classList.remove('highlightImage');
  challSum.style.visibility ='hidden';
  setNewPLace();
  enabled = true;
  
  
}
function endGame(){
  urpointsare.innerHTML = "Elért pontjaid: " + pointsSum;
  urpointsare.style.visibility = 'visible';
  newGameButton.style.visibility = 'visible';
  endGameButton.style.visibility = 'hidden';
  challSum.style.visibility ='visible';
  challSum.innerHTML = "Küldetéseken elért pontok: A: " + m1Sum + ", B: " +m2Sum + ", C: " + m3Sum + ", D: " + m4Sum;
  enabled = false;
  
}
function setTable(){
  (2,2), (4,9), (6,4), (9,10), (10,6)
  matrix[2][2] = -1;
  matrix[4][9] = -1;
  matrix[6][4] = -1;
  matrix[9][10] = -1;
  matrix[10][6] = -1;
}


function updatePlaceMatrix(matrix){
  for(let i = 0; i < 3; i++){
    for(let j = 0; j <3 ;j++){
      placeMatrix[i][j] = matrix[i][j];
    }
  }
  updatePLaceTable();
}
function updatePLaceTable(){
  const cells = document.querySelectorAll('#placeTable td');
  cells.forEach((cell, index) => {
    const row = Math.floor(index / 3);
    const col = index % 3;
    switch (placeMatrix[row][col]) {
      case -1:
          cell.style.backgroundImage = 'url("assets/tiles/mountain_tile.png")';
          break;
      case 1:
          cell.style.backgroundImage = 'url("assets/tiles/water_tile.png")';
          break;
      case 2:
          cell.style.backgroundImage = 'url("assets/tiles/forest_tile.png")';
          break;
      case 3:
          cell.style.backgroundImage = 'url("assets/tiles/plains_tile.png")';
          break;
      case 4:
          cell.style.backgroundImage = 'url("assets/tiles/village_tile.png")';
          break;
      default:
          cell.style.backgroundImage = 'url("assets/tiles/base_tile.png")';
          break;
    }
  
  });
}
   
function rotatePlaceMatrix() {
  for (let i = 0; i < 3; i++) {
      for (let j = i; j < 3; j++) {
          const temp = placeMatrix[i][j];
          placeMatrix[i][j] = placeMatrix[j][i];
          placeMatrix[j][i] = temp;
      }
  }

  for (let i = 0; i < 3; i++) {
      placeMatrix[i].reverse();
  }
  updatePLaceTable();
}


function mirrorPlaceMatrix() {
  for (let i = 0; i < 3; i++) {
      placeMatrix[i].reverse();
  }
  updatePLaceTable();
}


function setNewPLace(){
  const rand = getRandomInt(15);
  const mat = elements[rand].shape;
  timeforThis = elements[rand].time;
  timeToPlace.innerHTML = "Lehelyezendő elem: (Időigény: " + timeforThis + ")";
  nexttime = elements[rand].time;
  for(let i = 0; i < 3; i++){
    for (let j = 0; j < 3; j++){
      if(mat[i][j] == 1){
        switch (elements[rand].type) {
          case 'water':
              
              mat[i][j] = 1;
              break;
          case 'town':
              
              mat[i][j] = 4;;
              break;
          case 'forest':
              
              mat[i][j] = 2;;
              break;
          case 'farm':
              
              mat[i][j] = 3;;
              break;
          default:
              
              mat[i][j] = 0;;
              break;
        }
      }
    }
  }
  updatePlaceMatrix(mat);
}
function generateRandomNumbers(amount, max) {
  if (amount > max) {
    console.error('Amount should be less than or equal to the maximum value.');
    return null;
  }

  const uniqueNumbers = new Set();

  while (uniqueNumbers.size < amount) {
    const randomNumber = Math.floor(Math.random() * max);
    uniqueNumbers.add(randomNumber);
  }

  return Array.from(uniqueNumbers);
}
function setNewMissions(){
  randlist = generateRandomNumbers(4, 11);
  seasonChalls = randlist;
  if(randlist[0] <= 3){
    missionOne.src = challenges.basic[randlist[0]].link;
  }
  else{
    missionOne.src = challenges.extra[randlist[0] - 4].link;
  }
  if(randlist[1] <= 3){
    missionTwo.src = challenges.basic[randlist[1]].link;
  }
  else{
    missionTwo.src = challenges.extra[randlist[1] - 4].link;
  }
  if(randlist[2] <= 3){
    missionThree.src = challenges.basic[randlist[2]].link;
  }
  else{
    missionThree.src = challenges.extra[randlist[2] - 4].link;
  }
  if(randlist[3] <= 3){
    missionFour.src = challenges.basic[randlist[3]].link;
  }
  else{
    missionFour.src = challenges.extra[randlist[3] - 4].link;
  }

}

function checkMission(num){
  
  num.forEach(element => {
    switch (element) {
      case 1:
        
        for(let i = 0; i < 11; i++){
          if(matrix[0][i] === 2){
            points += 1;
            
          }
          if(matrix[10][i] === 2){
            points += 1;
            
          }
        }
        for(let i = 1; i < 10; i++){
          if(matrix[i][0] === 2){
            points += 1;
            
          }
          if(matrix[i][10] === 2){
            points += 1;
            
          }
        }
        break;
      
      case 2:
        
        for(let i = 0; i < 11; i++){
          count = 0;
          for(let j = 0; j < 11; j++){
            if(matrix[i][j] === 2){
              count += 1;
            }
          }
          if(count === 3){
            points += 4;
            
          } 
        }
        break;
      case 3:
        
        count = 0;
        
        for (let i = 0; i < 11; i++) {
          for (let j = 0; j < 11; j++) {
            if (matrix[i][j] === 1) {
              bool = false;
              if (i - 1 >= 0 && i + 1 < 11 && j + 1 < 11 && j - 1 >= 0) {
                
                if((matrix[i - 1][j] === 3 || matrix[i+1][j] === 3 || matrix[i][j+1] === 3 ||matrix[i][j-1] === 3)){
                  bool = true;
                  
                }
                
              }
              else{
                bool = false;
              }
              if(bool === true){
                count += 1;
                bool = false;
              }
            }
          }
        }
        points += (count * 2);
        
        break;
      case 4:
        
        count = 0;
        for (let i = 0; i < 11; i++) {
          bool = true;
          for(let j = 0; j < 11; j++){
            if(matrix[i][j] === 0){
              bool = false;
            }
          }
          if(bool){
            count += 1;
          }
        }
        for (let i = 0; i < 11; i++) {
          bool = true;
          for(let j = 0; j < 11; j++){
            if(matrix[j][i] === 0){
              bool = false;
            }
          }
          if(bool){
            count += 1;
          }
        }
        points += count * 6;
        
        break;
      case 5:
        
        let maximum = 0;
        for(let i = 0; i < 11; i++){
          colmax = 0;
          for(let j = 0; j <11; j++){
            if(matrix[i][j] === 2){
              colmax += 1;
            }
            h = 1;
            while(i+h < 11 && matrix[i+h][j] === 2){
              colmax += 1;
              h += 1;
            }
            if(maximum < colmax && colmax > 1){
              maximum = colmax;
            }
            h = 0;
            colmax = 0;
          }
        }
        points += (maximum * 2);
        
        break;
      case 6:
        
        for(let i = 0; i < 11; i++){
          for(let j = 0; j < 11; j++){
            if(matrix[i][j] === 4){
              let list = [];
        
              if (i + 1 < 11 && !list.includes(matrix[i + 1][j])) {
                list.push(matrix[i + 1][j]);
              }
              if (i - 1 >= 0 && !list.includes(matrix[i - 1][j])) {
                list.push(matrix[i - 1][j]);
              }
              if (j + 1 < 11 && !list.includes(matrix[i][j + 1])) {
                list.push(matrix[i][j + 1]);
              }
              if (j - 1 >= 0 && !list.includes(matrix[i][j - 1])) {
                list.push(matrix[i][j - 1]);
              }
              list = list.filter(element => element !== 0);
              if(list.length >= 3){
                points += 3;
                list = [];

              }
            }
          }
        }
        break;
      case 7:
        
        for(let i = 0; i < 11; i++){
          water = 0;
          farm = 0;
          for(let j = 0; j < 11; j++){
            if(matrix[j][i] === 1){
              water += 1;
            }
            else if(matrix[j][i] === 3){
              farm += 1;
            }
          }
          if(water === farm && water != 0 && farm != 0){
            points += 4
            
          }
        }
        break;
      case 8:
        
        for(let i = 0; i < 11; i++){
          for(let j = 0; j < 11; j++){
            if(matrix[i][j] === -1){
              count = 0;
              if (i + 1 < 11 && matrix[i + 1][j] === 1) {
                count += 1;
              }
              if (i - 1 >= 0 && matrix[i - 1][j] === 1) {
                count += 1;
              }
              if (j + 1 < 11 && matrix[i][j + 1] === 1) {
                count += 1;
              }
              if (j - 1 >= 0 && matrix[i][j - 1] === 1) {
                count += 1;
              }
              points += count * 3;
              count = 0;
            }
          }
        }
        break;
      case 9:
        let list = [];

        for (let i = 0; i < 11; i++) {
          for (let j = 0; j < 11; j++) {
            if (matrix[i][j] === 4) {
              if (i + 1 < 11 && matrix[i + 1][j] === 0 && !list.some(item => item[0] === i + 1 && item[1] === j)) {
                list.push([i + 1, j]);
              }
              if (i - 1 >= 0 && matrix[i - 1][j] === 0 && !list.some(item => item[0] === i - 1 && item[1] === j)) {
                list.push([i - 1, j]);
              }
              if (j + 1 < 11 && matrix[i][j + 1] === 0 && !list.some(item => item[0] === i && item[1] === j + 1)) {
                list.push([i, j + 1]);
              }
              if (j - 1 >= 0 && matrix[i][j - 1] === 0 && !list.some(item => item[0] === i && item[1] === j - 1)) {
                list.push([i, j - 1]);
              }
            }
          }
        }

        points += list.length * 2;



        break;
      case 10:
        
        let max = 0;
        let counter = 0;
        for (let i = 0; i < 11; i++) {
          let colmax = 0;
          for (let j = 0; j < 11; j++) {
            if (matrix[i][j] === 4) {
              colmax += 1;
            } else {
              if (max < colmax && colmax > 1) {
                max = colmax;
                counter = 1;
              } else if (max === colmax && colmax > 1) {
                counter += 1;
              }

              colmax = 0;
            }
          }
          if (max < colmax && colmax > 1) {
            max = colmax;
            counter = 1;
          } else if (max === colmax && colmax > 1) {
            counter += 1;
          }
        }
        points += max * 2 * counter;
       
        break;
      case 11:
     
        for(let i = 0; i < 11; i += 2){
          bool = true;
          for(let j = 0; j < 11; j++){
            if(matrix[j][i] === 0){
              bool = false;
            }
          }
          if(bool){
            points += 10;
       
          }
        }
        break;
      case 12:

        for(let i = 0; i <11 ; i++){
          let list = [];
          for(j = 0; j < 11; j++){
            if(!list.includes(matrix[i][j])){
              list.push(matrix[i][j]);
            }
            
          }
          if(list.length >= 5){
            points += 4;
     
          }
          list = [];
        }
      break;
        
  
  
      default:
        break;
    }
  });
}
startGame();


