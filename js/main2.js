// buttonChoices.disabled == true;
let round = 0; //global acknowledged for first round
let win; // add this
let draw; // add this
let cpuXO; //needed?
let human; //needed?


//even and odd. seperated arrays
var roundPoints = {
  player1 : [],
  player2 : [],
  boxId : []
}

//CHECK SCORE AT 5 for plyr1
//CHECK SCORE AT 6 for plyr2

class Game{
    constructor(box, redBox, xo){
    this.box = box; //what box //button is selected
    this.redBox = redBox; //what is the corresponding box beneath
    if (this.xo !== undefined){  
    this.xo = xo;
    this.start(xo); 
    }
  }
    
   //First called passes x or o value and box selected
   //called once
   start(chooseXO){  //run once take similar code for each turn OR x o every other in array?
    this.chooseXO = chooseXO; //assign players value
    this.boxSelect = ''; //collects box //button information
    console.log('start')
    this.redSelect = ''; //selects hidden box id
    win == false; 
    draw == false; 
    console.log(chooseXO.value)
    console.log(round)
    }
   

  //Recieves data on boxes selected selection == black box/button , selectionR = redBox

  selected(selection, selectionR){
    console.log('not start')        
    round++;  
    if (round % 2 == 0){
      this.cpu();
    }                   
    if (this.redSelect !== '' && this.boxSelect !== '' && !win && !draw)   
        //if boxes do not contain data and the status of the game is not win or draw return..
    return
    this.selection = selection; //current equals var current
    this.selectionR = selectionR; //current equals var current
    this.boxSelect = ''; //equals inputted val
    this.redSelect = ''; //equals inputted val
    
    console.log(selection, selectionR.id)
    }
  
  //Checks cases of selected // not exactly required but has helped map out

  tileSelect(){
          //add cpuXO and if statement for new innerHTML?
     //round number is locally increased
    let boxIsSelected; //black box new var
    let redBoxIsSelected; //red box new var
    let value; //value assigned to black box // already assigned in HTML page
    let markXO = this.chooseXO;  //variable for xo 
    console.log(round)
    //current black box/button , current red box
    switch (this.selection , this.selectionR.id){ 
    case 'b1' , 'box1': //both by id 
      boxIsSelected = 'b1', value = 1; 
      if (round % 2 !== 0){
      this.selectionR.innerHTML = markXO.value //once black box disappears append red box 
      }
      if (round % 2 == 0){
      this.selectionR.innerHTML = cpuXO
      }
      break;
    case 'b2', 'box2':
      boxIsSelected = 'b2', value = 2;
      if (round % 2 !== 0){
      this.selectionR.innerHTML = markXO.value 
        }
      if (round % 2 == 0){
      this.selectionR.innerHTML = cpuXO
        }
      break;
    case 'b3', 'box3':
      boxIsSelected = 'b3', value = 3;
      if (round % 2 !== 0){
        this.selectionR.innerHTML = markXO.value 
        }
        if (round % 2 == 0){
        this.selectionR.innerHTML = cpuXO
        }
      break;
    case 'b4', 'box4':
      boxIsSelected = 'b4', value = 4;
      if (round % 2 !== 0){
        this.selectionR.innerHTML = markXO.value 
        }
        if (round % 2 == 0){
        this.selectionR.innerHTML = cpuXO
        }
      break;
    case 'b5', 'box5':
      boxIsSelected = 'b5', value = 5;
      if (round % 2 !== 0){
        this.selectionR.innerHTML = markXO.value 
        }
        if (round % 2 == 0){
        this.selectionR.innerHTML = cpuXO
        }
      break;
    case 'b6', 'box6':
      boxIsSelected = 'b6', value = 6;
      if (round % 2 !== 0){
        this.selectionR.innerHTML = markXO.value 
        }
        if (round % 2 == 0){
        this.selectionR.innerHTML = cpuXO
        }
      break;
    case 'b7', 'box7':
      boxIsSelected = 'b7', value = 7;
      if (round % 2 !== 0){
        this.selectionR.innerHTML = markXO.value 
        }
        if (round % 2 == 0){
        this.selectionR.innerHTML = cpuXO
        }
      break;
    case 'b8', 'box8':
      boxIsSelected = 'b8', value = 8;
      if (round % 2 !== 0){
        this.selectionR.innerHTML = markXO.value 
        }
        if (round % 2 == 0){
        this.selectionR.innerHTML = cpuXO
        }
      break;
    case 'b9', 'box9':
      boxIsSelected = 'b9', value = 9;
      if (round % 2 !== 0){
        this.selectionR.innerHTML = markXO.value 
        }
        if (round % 2 == 0){
        this.selectionR.innerHTML = cpuXO
        }
      break;
  
    default:
      return;
  }
    this.redBoxIsSelected;  // new black box var
    this.value = value; //assigned strictly by given value and passed
    this.boxIsSelected = boxIsSelected
    console.log(redBoxIsSelected)
    console.log(markXO.value)
    this.collect() //calls to collect values and determine player
  }


    //

    collect(){
   
    //let roundNum = round;  //recieved round number given new variable
    //let keyCount = "round" + round;
    let boxValue = this.value; //recieved value number given new variable
    let boxIds = this.boxIsSelected
    // let turnValue = this.chooseXO.value;
    console.log(round)
      //console.log(roundNum)
    if(round % 2 !== 0){  //checks for even/odd player 1 goes first (human)
    roundPoints["player1"].push(boxValue); //obj roundpoints has two arrays, pushes current value selected
    roundPoints["boxId"].push(boxIds) //grabs id for cpu() to ignore
    console.log(roundPoints)
    console.log(this.boxIsSelected)
    
    }
   if(round % 2 == 0){
    roundPoints["player2"].push(boxValue);
    roundPoints["boxId"].push(boxIds)
    console.log(roundPoints)
    }
  }
  
    cpu(){
      //needs to: click or select button or id , be random , not be previously selected
      console.log(cpuXO)
      
      let remainingLen;
      remainingLen =  boxBtns.length - roundPoints["boxId"].length;
      
      
      roundPoints["boxId"].forEach(randBtn=>{
      console.log(randBtn)
      //boxBtns.forEach(buttonList=>{
        //console.log(buttonList.id)
      //  for (let buttonList =0; buttonList<boxBtns.length; buttonList++)
      //  {
        if(boxBtns.id !== roundPoints["boxId"]){
          // console.log(randBtn + "fart")
        var cpuChoice = Math.floor(Math.random()*remainingLen);
         //console.log( boxBtns[buttonList].id)
         console.log(boxBtns[cpuChoice])
        }
      })
    }
         
      
    
     // })
      //console.log(boxBtns)
      //const cpuChoice = 
      //var cpuChoice = Math.floor(Math.random()*btn.length);

        
      
    
    
      // if (this.redSelect !== '' && this.boxSelect !== '' && !win && !draw) 

      // //if boxes do not contain data and the status of the game is not win or draw return..
      // return
      // this.selection = selection; //current equals var current
      // this.selectionR = selectionR; //current equals var current
      // this.boxSelect = ''; //equals inputted val
      // this.redSelect = ''; //equals inputted val
  


    


    check(){

    //let p1 = roundPoints[round1.value,round3,round5,round7,round9]
   //   let p2 = playerTwo;
    // plyr1 = this.playerOne;
    // plyr2 = this.playerTwo;

  //  console.log(p1);
  //  console.log(p2);
//       const championNums = 
//   [
//   [2,5,8],
//   [3,6,9],
//   [1,4,7],
//   [3,5,7],
//   [1,5,9],
//   [4,5,6],
//   [7,8,9],
//   [1,2,3],
//   ]
// for(let rows = 0; rows < championNums.length; rows++){
//     let row = championNums[rows];

//   for(row = 0; row < rows.length; row++){
//     for(validOne = 0; validOne < playerOne.length; validOne++){
//     for(validTwo = 0; validTwo < playerTwo.length; validTwo++){
//       if(championNums[rows][row] = playerOne[validOne]){
//         win == win;
//         draw == !draw;
//         gameIsStarted == !gameIsStarted;
//         alert('Player wins!');
//       }
    
//       if(championNums[rows][row] = playerTwo[validTwo]){
//         win == win;
//         draw == !draw;
//         gameIsStarted == !gameIsStarted;
//         alert('Computer wins!');
//       }
//       }  
//     }
//   }
// }
//     }
  }
}



const x = document.getElementById('xButton');
const o = document.getElementById('oButton');
//const xoXO = x || o;



const boxBtns = document.querySelectorAll('.btns');
const box = document.querySelectorAll(['b']);

const wrap = document.getElementById('wrapper');



const game = new Game(box);


x.addEventListener("click", xbtn=>{  
  wrap.style.display = 'none';
  cpuXO = 'O';

  game.start(x);
  // console.log(game.xoChoice);
  return x , round == 1
})
o.addEventListener("click", xbtn=>{
  wrap.style.display = 'none';
  game.start(o);
  cpuXO = 'X';
  // console.log(game.xoChoice);
  return o , round == 1
})



  boxBtns.forEach(btn =>{
    btn.addEventListener('click', ()=>{
      
        // console.log(btn);
        const redBox = document.getElementById('box' + btn.value)
        game.selected(btn.id, redBox);
        btn.style.opacity = '0';
        btn.disabled = true;
        game.tileSelect();
        console.log(btn.value)
       
      })
  })

  function cpuGo(){
    const redBox = document.getElementById('box' + btn.value)
    game.selected(btn.id, redBox);
    btn.style.opacity = '0';
    btn.disabled = true;
    game.tileSelect();
    console.log(btn.value)
  }

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
