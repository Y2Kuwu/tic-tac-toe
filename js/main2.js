// buttonChoices.disabled == true;
let gameIsStarted = true
let win = true;
let draw = true;
let comp;
let human;
let playerUp = comp || human;

class Game{
    constructor(box, xo){
    this.box = box; //what box is selected
   //which player
   // this.stats = stats; //game status
    this.xo = xo;
    this.start(xo);
  }
  start(chooseXO){
    this.boxSelect = ''; //what box is selected //box
    //this.playerTurn = human; //is the player x or o // human or computer //player
 //   this.stat = gameIsStarted, !win , !draw; //game is started equals true  //stats
    this.xoChoice = chooseXO; //xo choose 
  }
  selected(selection){
      if (this.boxSelect !== '' && !win && !draw)
      return
      
      
    
    this.selection = selection; 
    this.boxSelect = ''
    this.tileSelect(); 
    }
  
  tileSelect(){
    let boxIsSelected;
    let value;
    
    switch (this.selection){
    case 'b1':
      boxIsSelected = 'b1', value = 1;
      break;
    case 'b2':
      boxIsSelected = 'b2', value = 2;
      break;
    case 'b3':
      boxIsSelected = 'b3', value = 3;
      break;
    case 'b4':
      boxIsSelected = 'b4', value = 4;
      break;
    case 'b5':
      boxIsSelected = 'b5', value = 5;
      break;
    case 'b6':
      boxIsSelected = 'b6', value = 6;
      break;
    case 'b7':
      boxIsSelected = 'b7', value = 7;
      break;
    case 'b8':
      boxIsSelected = 'b8', value = 8;
      break;
    case 'b9':
      boxIsSelected = 'b9', value = 9;
      break;
  
    default:
      return;
  }
    this.boxSelect = boxIsSelected && value;
    console.log(this.boxSelect)
  }


    match(value){

    if (this.playerTurn == human){
      playerOne = [];
    playerOne.push(value)
    }

    if (this.playerTurn == comp){
      playerTwo = [];
    playerTwo.push(value)
    }
      const championNums = 
  [
  [2,5,8],
  [3,6,9],
  [1,4,7],
  [3,5,7],
  [1,5,9],
  [4,5,6],
  [7,8,9],
  [1,2,3],
  ]
for(let rows = 0; rows < championNums.length; rows++){
    let row = championNums[rows];

  for(row = 0; row < rows.length; row++){
    for(validOne = 0; validOne < playerOne.length; validOne++){
    for(validTwo = 0; validTwo < playerTwo.length; validTwo++){
      if(championNums[rows][row] = playerOne[validOne]){
        win == win;
        draw == !draw;
        gameIsStarted == !gameIsStarted;
      }
     alert('Player wins!');
      if(championNums[rows][row] = playerTwo[validTwo]){
        win == win;
        draw == !draw;
        gameIsStarted == !gameIsStarted;
     alert('Computer wins!');
      }
      }  
    }
  }
}
    }
  }


const x = document.getElementById('xButton');
const o = document.getElementById('oButton');
const xo = x || o;


const boxBtns = document.querySelectorAll('.btns');
const box = document.querySelectorAll(['b']);
  
const game = new Game(box, xo);

x.addEventListener("click", xbtn=>{
  game.start(x);
  console.log(game.xoChoice);
})
o.addEventListener("click", xbtn=>{
  game.start(o);
  console.log(game.xoChoice);
})

  boxBtns.forEach(btn =>{
    btn.addEventListener('click', ()=>{
      
        // console.log(btn);
        game.selected(btn.id);
        game.tileSelect();
        game.match(btn.id.value)  // recieving above define player first and change inner html of boxes
    })
  })
