// buttonChoices.disabled == true;
let round = 1; //globally acknowledged for first round
let win; // add this
let draw; // add this
let cpuXO; 
let human; //needed?


//even and odd. seperated arrays
var roundPoints = {
  player1 : [],
  player2 : [],
  boxVal : [],
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
    this.redSelect = ''; //selects hidden box id
    win == false; 
    draw == false; 
    console.log(chooseXO.value)
    console.log(round)
    }
   
  //Recieves data on boxes selected selection == black box/button , selectionR = redBox
  // cpuSelected(selection, selectionR){
  
  // if (this.redSelect !== '' && this.boxSelect !== '' && !win && !draw  && round % 2 == 0)  
  // return
  //   this.selection = selection; 
  //   this.selectionR = selectionR;
  //   this.boxSelect = ''; 
  //   this.redSelect = ''; 
  //   console.log(selection, selectionR)
  //   this.cpuTileSelect();
  // }

  selected(selection, selectionR){            
    if (this.redSelect !== '' && this.boxSelect !== '' && !win && !draw  && round % !2 == 0)   
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
    this.redBoxIsSelected = redBoxIsSelected;  
    this.value = value;
    this.boxIsSelected = boxIsSelected
    console.log(redBoxIsSelected)
    console.log(markXO.value)
    
    this.collect();
  }

  //last for now        //remove alread getting values below
//   cpuTileSelect(){
// let boxIsSelected;
// let redBoxIsSelected;
// let value; 

// switch (this.selection , this.selectionR.id){ 
// case 'b1' , 'box1': 
// boxIsSelected = 'b1', value = 1; 
// this.selectionR.innerHTML = cpuXO 
// break;
// case 'b2', 'box2':
// boxIsSelected = 'b2', value = 2;
// this.selectionR.innerHTML = cpuXO
// break;
// case 'b3', 'box3':
// boxIsSelected = 'b3', value = 3;
// this.selectionR.innerHTML = cpuXO
// break;
// case 'b4', 'box4':
// boxIsSelected = 'b4', value = 4;
// this.selectionR.innerHTML = cpuXO
// break;
// case 'b5', 'box5':
// boxIsSelected = 'b5', value = 5;
// this.selectionR.innerHTML = cpuXO 
// break;
// case 'b6', 'box6':
// boxIsSelected = 'b6', value = 6;
// this.selectionR.innerHTML = cpuXO
// break;
// case 'b7', 'box7':
// boxIsSelected = 'b7', value = 7;
// this.selectionR.innerHTML = cpuXO
// break;
// case 'b8', 'box8':
// boxIsSelected = 'b8', value = 8;
// this.selectionR.innerHTML = cpuXO
// break;
// case 'b9', 'box9':
// boxIsSelected = 'b9', value = 9;
// this.selectionR.innerHTML = cpuXO
// break;

// default:
//   return;
// }
// this.redBoxIsSelected;  // new black box var
// this.value = value; //assigned strictly by given value and passed
// this.boxIsSelected = boxIsSelected
// //this.check();
// console.log(redBoxIsSelected)
// }


collect(){

  roundPoints["player1"].push(this.selectionR.id); //obj roundpoints has two arrays, pushes current value selected
  roundPoints["boxVal"].push(this.value) //grabs id for cpu() to ignore
  console.log(this.boxIsSelected)
  console.log(this.value)
  console.log(round)
  round++
  this.cpu();
  }

        //NEEDS TO NOT ALLOW VALUE OVERWRITE
    cpu(){
      //needs to: click or select button or id , be random , not be previously selected
      //for(let b =0; b < boxBtns.length; b++){
      //for(let box =0; box < roundPoints.boxVal.length; box++){
          let newBoxes = []
          let boxLen = newBoxes.length+1;
          do{
          const allRedBox = document.getElementById('box' + boxLen)
          newBoxes.push(allRedBox)
          boxLen++
          }while (boxLen<10)
          
          newBoxes.forEach(tb => console.log(tb))
          let newXO = cpuXO;   
          console.log(newXO)
          let remainingLen;
          let totalSubtract = roundPoints['player1'].length + roundPoints['player2'].length //subtract from available


          console.log(roundPoints['boxVal'])  //box values
          console.log(roundPoints['player1']) //box ids

          //console.log(boxBtns[b].id) //iterates through all buttons DONT NEED
          console.log(roundPoints.boxVal[box]) //iterates through box values
          
    
          //remainingLen = boxBtns.length - totalLen
         //var cpuChoice = Math.floor(Math.random()*remainingLen);
          // console.log(boxBtns[cpuChoice])

        
          // roundPoints["boxVal"].push(boxBtns[cpuChoice].id);
          // roundPoints["player2"].push(boxBtns[cpuChoice].value);
          
          // const red = document.getElementById('box' + boxBtns[cpuChoice].value)
          
    //       const checkSame = function(rp1 , rp2, bid){
    //         for(let num1 = 0; num1 < rp1.length; num1++)
    //         for(let num2 = 0; num2 < rp2.length; num2++)
    //         for(let num3 = 0; num3 < bid.length; num3++)
    //         if(rp1[num1] == rp2[num2]){
    //           console.log("here")
    //         //pops value and stops symbol overwrite
    //        // red.innerHTML = newXO
    //         rp2.pop(boxBtns[cpuChoice].value);
    //         bid.pop(boxBtns[cpuChoice].value);
    //         //red.id.innerText = newXO
    //         }
            
    //        }
           
    //       if (!checkSame(roundPoints["player1"],roundPoints["player2"], roundPoints["boxId"])){
    //        console.log(roundPoints["player2"])
    //         console.log(roundPoints["boxId"])
    //        console.log(red.id)
    //        console.log(boxBtns[cpuChoice].id)
    //        boxBtns[cpuChoice].style.opacity = '0';
    //        boxBtns[cpuChoice].disabled = true;
    //        //this.cpuSelected(roundPoints["boxId"], red)
    //        red.innerHTML = newXO
    //        console.log(newXO)
    //       //this.boxIsSelected = 

    //       }
    //        else if (checkSame(roundPoints["player1"],roundPoints["player2"], roundPoints["boxId"])){
    //         this.collect()
    //       }
          
    //         //redo(roundPoints["player2"], roundPoints["boxId"])
            
             
           
    // }
    }


    check(){
    
      roundPoints['player1'].forEach((plyr1)=>{
      roundPoints['player1'].forEach((plyr2)=>{
      
    
    

    plyr1 = this.playerOne;
    plyr2 = this.playerTwo;

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
      if(championNums[rows][row] = player1){
        win == win;
        draw == !draw;
        alert('Player wins!');
      }
    
      if(championNums[rows][row] = player2){
        win == win;
        draw == !draw;
        alert('Computer wins!');
      }
      }  
    }
  }
}
    })
 })
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

