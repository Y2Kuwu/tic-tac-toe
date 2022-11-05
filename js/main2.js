// buttonChoices.disabled == true;
let round = 1; //globally acknowledged for first round
let win; // add this
let draw; // add this
let cpuXO; 
let human; //needed?


//even and odd. seperated arrays
var roundPoints = {
  player1 : [],   //remove two or more
  player2 : [],
  boxIds : [],
  boxVal1 : [],
  boxVal2 : [],
  btnVal : [],
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
  roundPoints["boxIds"].push(this.selectionR.id);
  roundPoints["btnVal"].push(this.boxIsSelected);
  roundPoints["boxVal1"].push(this.value);
  
  console.log(roundPoints["boxVal1"])
  console.log(roundPoints["boxIds"])
  console.log(roundPoints["player1"])
  console.log(roundPoints["btnVal"])
  round++
  this.cpu();
  }

        //NEEDS TO NOT ALLOW VALUE OVERWRITE
    cpu(){
     
      let newBoxes = []
      let newButtons = []
      let allRedBox;
      let allBtn;
      let addOn;

       for (let fin = 0; fin < 9; fin++){
        addOn = fin + 1
        allRedBox = document.getElementById('box' + addOn)
        newBoxes.push(allRedBox.id)
        allBtn = document.getElementById('b' + addOn)
        newButtons.push(allBtn.id)
       }
          console.log(newBoxes)
          console.log(newButtons)

          let availableChoices = newBoxes.filter(remove => !roundPoints.boxIds.includes(remove));  
          let availableBtns = newButtons.filter(remove => !roundPoints.btnVal.includes(remove)); 
          let choiceLen = availableChoices.length //need two if two for loops


          console.log(choiceLen)
          console.log(availableChoices) // of these you can choose one of choiceLen
          console.log(availableBtns)
          const cpuChoice = Math.floor(Math.random()*choiceLen);
          let btnV = (document.getElementById(availableBtns[cpuChoice]))
          let boxV = (document.getElementById(availableChoices[cpuChoice]))
           //for (let choice = 0 ; choice < choiceLen; choice++)
          // {
           // console.log(choice)
          
          //if(availableChoices.includes('box' + cpuChoice && availableBtns.includes('b' + cpuChoice))){
               roundPoints.boxIds.push(boxV.id)  //both off 
               roundPoints.player2.push(boxV.id);  //both off
               roundPoints.btnVal.push(btnV.id);
               roundPoints.boxVal2.push(btnV.value);
               console.log(roundPoints["boxIds"]) //off by one 
               console.log(roundPoints.player2)
               console.log(btnV)
               console.log(boxV)
               console.log(roundPoints.boxVal1)

            btnV.style.opacity = '0'
            boxV.innerHTML = cpuXO;
            btnV.disabled = true
           
               //roundPoints.btnVal.push('b' + cpuChoice)
               console.log(roundPoints.btnVal[choiceLen])
               this.check()
        }
      
  
  


    check(){
    
    console.log(roundPoints.boxVal1)
    console.log(roundPoints.boxVal2)

   // plyr1 = this.playerOne;
   // plyr2 = this.playerTwo;

  
      const championNums = 
  {
  w1:[2,5,8],
  w2:[3,6,9],
  w3:[1,4,7],
  w4:[3,5,7],
  w5:[1,5,9],
  w6:[4,5,6],
  w7:[7,8,9],
  w8:[1,2,3],
  }

  

  // function ply1(){
  //   for (let pl1 =0; pl1 <= roundPoints.boxVal1.length; pl1++){
  //     return roundPoints['boxVal1'][pl1]
  //   }
  // }
  // const ply1 = roundPoints.boxVal1.forEach((pl1)=>{
  //   return pl1;
  // })

  // const ply2 = roundPoints.boxVal2.forEach((pl2)=>{
  //   return pl2;
  // })

if(round >= 4){
  console.log('here')
  // ply1;
  // ply2;
 //for(let rows = 0; rows < championNums.length; rows++){
//     //let row = championNums[rows];
//     console.log(championNums[rows])
//     console.log(rows)
//    // console.log(ply1.value)
//    for(let row = 0; row < 3; row++){
//    console.log(championNums[rows][row])
console.log(championNums.w1.length)
  function a(){
  for (let w = 0; w < 9; w++){
  let winner = championNums['w'+w]
  console.log(winner)
  }
}
  
// let winner = championNums.map(function(idx){
// idx.w= idx.w.filter(function(boxVals){return boxVals == 4;})
//   return console.log('win');
// })


// let winner = championNums.filter(w => w.filter(idx=>{
//   return roundPoints.boxVal1.indexOf(idx) > -1;
// }))//.length == 2);

    // for(let validOne = 0; validOne < roundPoints.boxVal1; validOne++){
    //   console.log("here")
    // for(let validTwo = 0; validTwo < roundPoints.boxVal2; validTwo++){
    //   console.log("here")
   // console.log(ply1[row][rows])
      //console.log(ply1())
      //if(championNums[rows][row] = roundPoints.boxVal1[validOne]){
      // if(championNums[rows] == roundPoints.boxVal1[rows]){
     
      //   if (winner){
      //   console.log('here')
      //   win == win;
      //   draw == !draw;
      //   console.log('Player wins!');
      // }
     
      //if(championNums[rows][row] = roundPoints.boxVal2[validTwo]){
     // if(championNums[rows] == ply2){
        win == win;
        draw == !draw;
        console.log('Computer wins!');
      }
      }  
    }
//  }









// switch (){
//   case 

//   break;
// }
 
    
  


  


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
