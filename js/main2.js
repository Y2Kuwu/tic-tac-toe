// buttonChoices.disabled == true;
let round = 0; //globally acknowledged for first round
let win; // add this
let draw; // add this
let cpuXO; 
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
  cpuSelected(selection, selectionR){
  
  if (this.redSelect !== '' && this.boxSelect !== '' && !win && !draw  && round % 2 !== 0)  
  return
    
    this.selection = selection; //current equals var current
    this.selectionR = selectionR; //current equals var current
    this.boxSelect = ''; //equals inputted val
    this.redSelect = ''; //equals inputted val
    console.log(selection, selectionR.id)
    this.cpuTileSelect();
  }

  selected(selection, selectionR){            
    if (this.redSelect !== '' && this.boxSelect !== '' && !win && !draw)   
        //if boxes do not contain data and the status of the game is not win or draw return..
    return
    round++;
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
      this.selectionR.innerHTML = markXO.value //once black box disappears append red box 
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
    this.value = value; //assigned strictly by given value and passed
    this.boxIsSelected = boxIsSelected
    console.log(redBoxIsSelected)
    console.log(markXO.value)
    
    this.collect();
  }

  collect(){
    //let roundNum = round;  //recieved round number given new variable
    //let keyCount = "round" + round;
    
    let boxValue = this.value; //recieved value number given new variable
    let boxIds = this.boxIsSelected
    // let turnValue = this.chooseXO.value;
    console.log(round)
      //console.log(roundNum)
   // if(round % 2 !== 0){  //checks for even/odd player 1 goes first (human)
    roundPoints["player1"].push(boxValue); //obj roundpoints has two arrays, pushes current value selected
    roundPoints["boxId"].push(boxIds) //grabs id for cpu() to ignore
    console.log(this.boxIsSelected)
    
    console.log(round)
    this.cpu();
    }
  
  
    
  //last for now
  cpuTileSelect(){
let boxIsSelected;
let redBoxIsSelected;
let value; 

switch (this.selection , this.selectionR.id){ 
case 'b1' , 'box1': 
boxIsSelected = 'b1', value = 1; 
this.selectionR.innerHTML = cpuXO 
break;
case 'b2', 'box2':
boxIsSelected = 'b2', value = 2;
this.selectionR.innerHTML = cpuXO
break;
case 'b3', 'box3':
boxIsSelected = 'b3', value = 3;
this.selectionR.innerHTML = cpuXO
break;
case 'b4', 'box4':
boxIsSelected = 'b4', value = 4;
this.selectionR.innerHTML = cpuXO
break;
case 'b5', 'box5':
boxIsSelected = 'b5', value = 5;
this.selectionR.innerHTML = cpuXO 
break;
case 'b6', 'box6':
boxIsSelected = 'b6', value = 6;
this.selectionR.innerHTML = cpuXO
break;
case 'b7', 'box7':
boxIsSelected = 'b7', value = 7;
this.selectionR.innerHTML = cpuXO
break;
case 'b8', 'box8':
boxIsSelected = 'b8', value = 8;
this.selectionR.innerHTML = cpuXO
break;
case 'b9', 'box9':
boxIsSelected = 'b9', value = 9;
this.selectionR.innerHTML = cpuXO
break;

default:
  return;
}
this.redBoxIsSelected;  // new black box var
this.value = value; //assigned strictly by given value and passed
this.boxIsSelected = boxIsSelected
console.log(redBoxIsSelected)
}

    
        //THIS IS ONE AHEAD OF SCHEDULE
    cpu(){
      
      //needs to: click or select button or id , be random , not be previously selected
      
      console.log(cpuXO)

      let remainingLen;
      console.log(roundPoints["boxId"]) //all 
      remainingLen = boxBtns.length-round //- roundPoints["boxId"].length;  //-1
      //roundPoints["boxId"].forEach(randBtn=>{
        console.log(boxBtns.length) 
       //console.log(randBtn)
        var cpuChoice = Math.floor(Math.random()*remainingLen);
       // if(boxBtns.id !== roundPoints["boxId"]){
        //boxBtns.forEach(cpuButton =>{
        
        // if(cpuButton !== randBtn){
        //   console.log(cpuButton)
        if (boxBtns[cpuChoice] !== roundPoints["boxId"]){
        console.log(cpuChoice)
        console.log(boxBtns[cpuChoice])
        const red = document.getElementById('box' + boxBtns[cpuChoice].value)
        console.log(red)

        roundPoints["player2"].push(boxBtns[cpuChoice].value); //value
        roundPoints["boxId"].push(boxBtns[cpuChoice].id)
        console.log(roundPoints["boxId"])
        console.log(roundPoints["player2"])
        boxBtns[cpuChoice].style.opacity = '0';
        boxBtns[cpuChoice].disabled = true;
        // this.cpuSelected(boxBtns[cpuChoice].value, boxBtns[cpuChoice].id)
        this.cpuSelected(boxBtns[cpuChoice].id, red)

        // this.tileSelect(); THINK IT NEEDS TO BE CALLED AROUND HERE still off by one
       // cpuGo(boxBtns[cpuChoice].id)
        }
      //  })
      
      
    }
     // })
    //  })
    
  
         
      
    
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
  


    


    //check(){

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
 // }
//}
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

