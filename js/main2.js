// buttonChoices.disabled == true;
let round = 0;
let win;
let draw;
let comp;
let human;


class Game{
    constructor(box, redBox, xo){
    this.box = box; //what box is selected
    this.redBox = redBox;
    this.xo = xo;
   //which player
   // this.stats = stats; //game status
      let notXO
    for (round = 0; round < 8; round++){
    if (xo !== undefined && round == 0){  //make sure to skip this if it's not the first round maybe a global bool
    round++
   
    this.start(xo.value , notXO);  
    }
    else if (xo !== undefined && round > 0){
      round++;
      this.nextRound()
    }
    }
    }
  
  start(chooseXO , noXO){  //run once take similar code for each turn OR x o every other in array?
    this.boxSelect = ''; //what box is selected //box
    //this.playerTurn = human; //is the player x or o // human or computer //player
 //   this.stat = gameIsStarted, !win , !draw; //game is started equals true  //stats
    console.log('start')
    // if (chooseXO = 'X')
    // {
    // return this.noXO = 'O'
    
    // }
    // if (chooseXO = 'O')
    // {
    // return this.noXO.value = 'X'
  
    // }
   
    this.redSelect = '';
    win == false;
    draw == false;
    this.chooseXO = chooseXO; //xo choose 
    // this.noXO = noXO;
    // console.log(noXO.value)
    console.log(chooseXO.value)
    // return(chooseXO.value);
    }
  
    nextRound(){ 
      console.log('fart')
      this.redSelect = '';
      this.boxSelect = '';
      win == false;
      draw == false;
    }


  selected(selection, selectionR){
    console.log('not start')
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
    this.boxIsSelected = value;
    console.log(redBoxIsSelected)
    console.log(markXO.value)
    console.log(value)
  }


    match(){
      //renamin 
      let boxValue = this.boxIsSelected;
      let turnValue = this.chooseXO.value;
      let playerOne = [];
      let playerTwo = [];
      console.log(turnValue, boxValue)

    if (turnValue == 'x'){
    playerOne.push(boxValue)
      console.log(playerOne[0])
      console.log("player = human");
    }

    else if (turnValue == 'o'){
      
    playerTwo.push(boxValue)
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
        alert('Player wins!');
      }
    
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

const wrap = document.getElementById('wrapper');



const game = new Game(box);

x.addEventListener("click", xbtn=>{  
  wrap.style.display = 'none';
 
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








  // function humanVComp(digi){
// return digi;
// }
// function terminatorChoice(termChoice, sel) //makeMark)   //add function to listeners
// {
    
//     for(let matchChoice = 0; matchChoice <= termChoice.length; matchChoice++)
//     {    
//     var randChoice = Math.floor(Math.random()*termChoice.length);

//     const choice = termChoice[randChoice];
   
//     const mark = sel[randChoice];
//     if (termChoice[randChoice].style.display === "none") {
//         termChoice[randChoice].display = "block";
//       } else {
//         termChoice[randChoice].style.display = "none";
//         sel[randChoice].innerHTML = humanVComp(digiChoice);
//         machine.push(mark);
       
//         checkScore(machine, human);
//    return choice, mark; //, mark;
//       }
//     }
// }