// buttonChoices.disabled == true;
let round = 1; //globally acknowledged for first round
let cpuXO; 



//even and odd. seperated arrays
var roundPoints = {
  player1 : [],  
  player2 : [],
  boxIds : [],
  boxVal1 : [],
  boxVal2 : [],
  btnVal : [],
}



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
    console.log(chooseXO.value)
    console.log(round)
    }
   
 

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
    this.collect();
  }




collect(){

  roundPoints["player1"].push(this.selectionR.id); 
  roundPoints["boxIds"].push(this.selectionR.id);
  roundPoints["btnVal"].push(this.boxIsSelected);
  roundPoints["boxVal1"].push(this.value);
  
  console.log(roundPoints["boxVal1"])
  console.log(roundPoints["boxIds"])
  console.log(roundPoints["player1"])
  console.log(roundPoints["btnVal"])
  round++
  this.check();
  this.cpu();
  
  }


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

          const cpuChoice = Math.floor(Math.random()*choiceLen);
          let btnV = (document.getElementById(availableBtns[cpuChoice]))
          let boxV = (document.getElementById(availableChoices[cpuChoice]))
         
          
          //if(availableChoices.includes('box' + cpuChoice && availableBtns.includes('b' + cpuChoice))){
               roundPoints.boxIds.push(boxV.id)  //both off 
               roundPoints.player2.push(boxV.id);  //both off
               roundPoints.btnVal.push(btnV.id);
               roundPoints.boxVal2.push(btnV.value-'');
            btnV.style.opacity = 0
            boxV.innerHTML = cpuXO;
            btnV.disabled = true
               this.check()
        }
      
  
  


    check(){
    if(round >= 4){

    console.log(roundPoints.boxVal1)
    console.log(roundPoints.boxVal2)

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
 
  const user = roundPoints.boxVal1;
  const cpuUser = roundPoints.boxVal2;
  const w01 = championNums.w1
  const w02 = championNums.w2
  const w03 = championNums.w3
  const w04 = championNums.w4
  const w05 = championNums.w5
  const w06 = championNums.w6
  const w07 = championNums.w7
  const w08 = championNums.w8
   
const check1 = (wins, ply1)=>
wins.every((match1)=>
ply1.includes(match1));

const check2 = (win, ply2)=>
win.every((match2)=>
ply2.includes(match2));

switch(true){
    //user 1//
  case check1(w01, user):
    alert('User Wins!');
    this.reset();
  
  break;
  case check1(w02, user):
    alert('User Wins!');
    this.reset();
  
  break;
  case check1(w03, user):
    alert('User Wins!');
    this.reset();
  
  break;
  case check1(w04, user):
    alert('User Wins!');
    this.reset();
  break;
  case check1(w05, user):
    alert('User Wins!');
    this.reset();
  
  break;
  case check1(w06, user):
    alert('User Wins!');
    this.reset();

  break;
  case check1(w07, user):
    alert('User Wins!');
    this.reset();

  break;
  case check1(w08, user):
    alert('User Wins!');
    this.reset();

  break;
  case check2(w01, cpuUser):
    alert('Terminator Wins!');
    this.reset();
  
  break;
  case check2(w02, cpuUser):
    alert('Terminator Wins!');
    this.reset();
  
  break;
  case check2(w03, cpuUser):
    alert('Terminator Wins!');
    this.reset();
  
  break;
  case check2(w04, cpuUser):
    alert('Terminator Wins!');
    this.reset();

  break;
  case check2(w05, cpuUser):
    alert('Terminator Wins!');
    this.reset();
  
  break;
  case check2(w06, cpuUser):
    alert('Terminator Wins!');
    this.reset();

  break;
  case check2(w07, cpuUser):
    alert('Terminator Wins!');
    this.reset();

  break;
  case check2(w08, cpuUser):
    alert('Terminator Wins!');
    this.reset();
  
  break
  
  case roundPoints.boxIds.length == 9:
    alert('DRAW!')
  break;

  default:
    
  return;
  

}
}
    }
 reset(){
     
  roundPoints.boxIds = []
  roundPoints.player1 = []
  roundPoints.player2 = []
  roundPoints.boxVal1 = []
  roundPoints.boxVal2 = []
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
