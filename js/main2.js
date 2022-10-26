// buttonChoices.disabled == true;
let gameIsStarted;
let win = true;
let draw = true;
let comp;
let human;


class Game{
    constructor(box, redBox, xo){
    this.box = box; //what box is selected
    this.redBox = redBox;
   //which player
   // this.stats = stats; //game status
    this.xo = xo;
    if (xo !== undefined && gameIsStarted == true){  //make sure to skip this if it's not the first round maybe a global bool
    this.start(xo.value);  
    }
    }
  start(chooseXO){  //run once take similar code for each turn OR x o every other in array?
    this.boxSelect = ''; //what box is selected //box
    //this.playerTurn = human; //is the player x or o // human or computer //player
 //   this.stat = gameIsStarted, !win , !draw; //game is started equals true  //stats
    this.redSelect = '';
    win == !win;
    draw == !draw;
    this.chooseXO = chooseXO; //xo choose 
    console.log(chooseXO.value)
    // return(chooseXO.value);
    }
  
  selected(selection, selectionR){
      if (this.redSelect !== '' && this.boxSelect !== '' && !win && !draw)   
      return
    this.selection = selection; 
    this.selectionR = selectionR;
    this.boxSelect = '';
    this.redSelect = '';
    console.log(selection, selectionR.id)
    }
  
  tileSelect(){
    let boxIsSelected;
    let value;
    let markXO = this.chooseXO;  //variable for xo 
    let redBoxIsSelected;
    switch (this.selection , this.selectionR.id){
    case 'b1' , 'box1':   // may need to change
      boxIsSelected = 'b1', value = 1;
      this.selectionR.innerHTML = markXO.value
      // redSelect.innerHTML = markXO; //changing inner text to display x or o
      break;
    case 'b2', 'box2':
      boxIsSelected = 'b2', value = 2;
      this.selectionR.innerHTML = markXO.value
      break;
    case 'b3', 'box3':
      boxIsSelected = 'b3', value = 3;
      this.selectionR.innerHTML = markXO.value
      break;
    case 'b4', 'box4':
      boxIsSelected = 'b4', value = 4;
      this.selectionR.innerHTML = markXO.value
      break;
    case 'b5', 'box5':
      boxIsSelected = 'b5', value = 5;
      this.selectionR.innerHTML = markXO.value
      break;
    case 'b6', 'box6':
      boxIsSelected = 'b6', value = 6;
      this.selectionR.innerHTML = markXO.value
      break;
    case 'b7', 'box7':
      boxIsSelected = 'b7', value = 7;
      this.selectionR.innerHTML = markXO.value
      break;
    case 'b8', 'box8':
      boxIsSelected = 'b8', value = 8;
      this.selectionR.innerHTML = markXO.value
      break;
    case 'b9', 'box9':
      boxIsSelected = 'b9', value = 9;
      this.selectionR.innerHTML = markXO.value
      break;
  
    default:
      return;
  }
    this.redBoxIsSelected;
    this.boxSelect = value;
    console.log(redBoxIsSelected)
    console.log(markXO.value)
    console.log(this.boxSelect)
  }


    match(boxSelect, chooseXO){
      console.log(chooseXO)

    if (chooseXO == 'x'){
      let playerOne = [];
    playerOne.push(boxSelect)
      console.log(playerOne[0])
      console.log("player = human");
    }

    else if (chooseXO == 'o'){
      let playerTwo = [];
    playerTwo.push(boxSelect)
    console.log(playerTwo[0])
    console.log("player = comp");
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
//const xoXO = x || o;

//not running//delete
async function a(val){    //starts as undefined 
val = x.addEventListener('click');
val = o.addEventListener('click');
return val;                  //keep eye on this function, may cause issues later on
};
//make boxBtns lock, still receiving values before   disable?

const boxBtns = document.querySelectorAll('.btns');
const box = document.querySelectorAll(['b']);


// const redBoxes = function(idx){  
//   // console.log('box' + idx);
//   let redBoxSelect = ('box' + idx);
//   const redBox = document.getElementById(redBoxSelect);
//   console.log(redBox)
//   game.selected(redBox.id)
//   return redBox;
// }


// const redBoxes = document.getElementsByClassName('.boxList');
// 
// const xoRequest1 = document.querySelector('.bg');
// const xoRequest2 = document.querySelector('.bg2');
const wrap = document.getElementById('wrapper');

const game = new Game(box);




x.addEventListener("click", xbtn=>{  
  wrap.style.display = 'none';
  // xoRequest1.style.display = 'none';
  // xoRequest2.style.display = 'none';
  game.start(x);
  // console.log(game.xoChoice);

  return x
})
o.addEventListener("click", xbtn=>{
  wrap.style.display = 'none';
  game.start(o);
  // console.log(game.xoChoice);
  return o
})

  

  //return document.getElementById(redBoxSelect), console.log(redBoxSelect);
  


  boxBtns.forEach(btn =>{
    btn.addEventListener('click', ()=>{
      
        // console.log(btn);
        const redBox = document.getElementById('box' + btn.value)
        game.selected(btn.id, redBox);
        btn.style.opacity = '0';
        game.tileSelect();
        console.log(btn.value)
        // redBoxes(btn.value);
        
        game.match(btn.id)  // recieving above define player first and change inner html of boxes
      })
  })

    
  // async function clickXO (){
  //   if (clicked){

