// const tableDefault = document.getElementById("board");
// const btn1 = document.getElementById("b1a");
// const btn2 = document.getElementById("b2a");
// const btn3 = document.getElementById("b3");
// const btn4 = document.getElementById("b4");
// const btn5 = document.getElementById("b5");
// const btn6 = document.getElementById("b6");
// const btn7 = document.getElementById("b7");
// const btn8 = document.getElementById("b8");
// const btn9 = document.getElementById("b9");

// const newBox1 = document.getElementById("boxS1");
// const newBox2=  document.getElementById("boxS2");
// const newBox3 = document.getElementById("boxS3");
// const newBox4 = document.getElementById("boxS4");
// const newBox5 = document.getElementById("boxS5");
// const newBox6 = document.getElementById("boxS6");
// const newBox7 = document.getElementById("boxS7");
// const newBox8 = document.getElementById("boxS8");
// const newBox9 = document.getElementById("boxS9");


// const setXO = document.getElementById("wrapper");
// const x = document.getElementById("xButton");  
// const o = document.getElementById("oButton");

// let buttonChoices = [btn1,btn2,btn3,btn4,btn5,btn6,btn7,btn8,btn9];
// let boxChoices = [newBox1, newBox2, newBox3, newBox3, newBox4, newBox5, newBox6, newBox7, newBox8, newBox9];









// // let playerChoice;
// let playerActive;
// let digiChoice;

// const xClick = x.onclick = function(){
//   player == 'X';
//   setXO.style.display = "none";
  
//   return (gameIsStarted = !gameIsStarted, buttonChoices = !true, player)
// }
// //win = !win, lose = !lose , draw = !draw


// const oClick = o.onclick = function(){
//   player == 'O';
//   setXO.style.display = "none";
//   return (gameIsStarted = !gameIsStarted, buttonChoices = !true, player)
// }


// // if (setXO.style.display === "none" && gameIsStarted == true) {
// //     setXO.style.display = "block";
 
// // } else {
// //   setXO.style.display = "none";
// //   digiChoice = "X";
// // }


//   //   setXO.style.display = "block";
//   //   buttonChoices.disabled = false;
//   //   // x.disabled = false;
//   //   // o.disabled = false;
//   // if(n == 8) {
//   //   setXO.style.display = "none";
//   //   digiChoice = "O";
//   //   buttonChoices.disabled = false;
//   //   humanVComp(digiChoice);
//   //   playerChoice = "X";
//   //   console.log('x')

//   // }
//   //  if(n == 9){
//   //    setXO.style.display = "none";
//   //    digiChoice = "O";
//   //    buttonChoices.disabled = false;
//   //    humanVComp(digiChoice);
//   //    playerChoice = "O";
//   //    console.log('o')
//   //    }
//   //  }

// // function humanChoice(){

// //   return resizeBy;
// // }

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






// //trigger after user selects x or o 
//   //run only during turn and iterate after comp turn


// //   let checkBoxes = document.querySelectorAll(".boxList");
// //   checkBoxes.forEach(function (box , boxdex){
// //   let currentBox = checkBoxes.length-1;
// //   if (currentBox >= boxdex){
// //   currentBox++;
// //   return (checkBoxes[box].innerHTML == player)
// //   }
// // })


// // for(let idx = 0; idx < ind.length; idx++){
// // let btn [] = new Button[6]

// // let ind = [];
// // let btns = document.querySelectorAll("b" , num)
// // async function aw(){
// // await ind.push(num.value);

// // for (ind = 0; ind < btns.length; ind++){
// //   btns[ind].addEventListener("click", function (){
// //     console.log(ind)
// //     console.log('fart')
// //   });
// // }
// // }
// //   btns = document.getElementById ('b' , ++ind)
// // }


// // let ind = 1;
// // // for(let idx = 0; idx < ind.length; idx++){

// // let buttonList = document.getElementsByName(`#b${ind}`)
// // // match = buttonList.length-1;
// // // for(let btns = 0; btns < buttonList.length; btns++){
// //   // buttonList.addEventListener("click", function(){
// // let i = [1 ,2, 3, 4, 5, 6, 7, 8, 9];
// // for(let id = 0; id < i.length; id++){
// //   console.log(idx)
// //   buttonList.forEach(function (bl ,id){
// //   bl.onclick = function (){
// //   if(i[id] <= idx){
// //   //if (btns >= match){
// //   // if (btns == idx){
// //   console.log(buttonList[idx])
// //   console.log(buttonList[i])
// //   }
// //   }
// // })
// // }




// /////////////
// //   let checkButtons = document.getElementById(".buttons") //not getting ids 

// //   // let button = document.getElementById(`${checkButtons[idx]}`)
// //   let currentButton = checkButtons.length+1;
  
// //   checkButtons.forEach(function (btn ,idx){  

// //   btn.onclick = function() {

// //   if (currentButton >= idx){
  
// //   checkButtons[idx].style.display =="none";
// //   currentButton++;
// //   console.log(checkButtons[idx]);
// //   }
// //   else{
// //     checkButtons[idx].style.display =="block";
// //   }
// //////////////




// // }
// // })
//   // for(let select = 0; select < checkButtons.length; select++){
//   // for(let box = 0; box < checkBoxes.length; box++){
  
  
    
    



//     // console.log(checkButtons[select].value)
  

//     //keep this
//   // for(let rows = 0; rows < championNums.length; rows++){
//   //   let row = championNums[rows];
//   // for(row = 0; row < rows.length; row++){
//   //     if(championNums[rows][row] = select){
//         // return (buttonChoices[select] , boxChoices[box])
//        //
       
    
// //       }  
// //     }
// //   }
// // }



// // while(gameIsStarted && playersTurn == true && !termChoice || !win || !draw || !lose);
    



// // async function getTurn(){
  
// //   if (buttonChoices[select].style.display === "none") {
// //       buttonChoices[select].style.display = "block";
// //     } 
// //     else {
// //       checkButtons[select].style.display = "none";
// //       checkBoxes[box].innerHTML = player.value;
     
// //       // human.push(1);
// //       // checkScore(machine, human);
// //       // terminatorChoice(buttonChoices, boxSelect);
// //     }
// //   }





// // btn1.addEventListener("click" ,function(){
// //     if (btn1.style.display === "none") {
// //         btn1.style.display = "block";
// //       } else {
// //         btn1.style.display = "none";
// //         newBox1.innerHTML = player.value;
// //         human.push(1);
// //         checkScore(machine, human);
// //         terminatorChoice(buttonChoices, boxSelect);
// //       }
// // });
// // btn2.addEventListener("click" ,function(){
// //     if (btn2.style.display === "none") {
// //         btn2.style.display = "block";
// //       } else {
// //         btn2.style.display = "none";
// //         newBox2.innerHTML = player.value;
// //         human.push(2);
// //         checkScore(machine, human);
// //         terminatorChoice(buttonChoices, boxSelect);
// //       }
// // });
// // btn3.addEventListener("click" ,function(){
// //     if (btn3.style.display === "none") {
// //         btn3.style.display = "block";
// //       } else {
// //         btn3.style.display = "none";
// //         newBox3.innerHTML = player.value;
// //         human.push(3);
// //         terminatorChoice(buttonChoices, boxSelect);
// //       }
// // });
// // btn4.addEventListener("click" ,function(){
// //     if (btn4.style.display === "none") {
// //         btn4.style.display = "block";
// //       } else {
// //         btn4.style.display = "none";
// //         newBox4.innerHTML = player.value;
// //         human.push(4);
// //         checkScore(machine, human);
// //         terminatorChoice(buttonChoices, boxSelect);
// //       }
// // });
// // btn5.addEventListener("click" ,function(){
// //     if (btn5.style.display === "none") {
// //         btn5.style.display = "block";
// //       } else {
// //         btn5.style.display = "none";
// //         newBox5.innerHTML = player.value;
// //         human.push(5);
// //         checkScore(machine, human);
// //         terminatorChoice(buttonChoices, boxSelect);
// //       }
// // });
// // btn6.addEventListener("click" ,function(){
// //     if (btn6.style.display === "none") {
// //         btn6.style.display = "block";
// //       } else {
// //         btn6.style.display = "none";
// //         newBox6.innerHTML = player.value;
// //         human.push(6);
// //         checkScore(machine, human);
// //         terminatorChoice(buttonChoices, boxSelect);
// //       }
// // });
// // btn7.addEventListener("click" ,function(){
// //     if (btn7.style.display === "none") {
// //         btn7.style.display = "block";
// //       } else {
// //         btn7.style.display = "none";
// //         newBox7.innerHTML = playe.valuer;
// //         human.push(7);
// //         checkScore(machine, human);
// //         terminatorChoice(buttonChoices, boxSelect);
// //       }
// // });
// // btn8.addEventListener("click" ,function(){
// //     if (btn8.style.display === "none") {
// //         btn8.style.display = "block";
// //       } else {
// //         btn8.style.display = "none";
// //         newBox8.innerHTML = player.value;
// //         human.push(8);
// //         checkScore(machine, human);
// //         terminatorChoice(buttonChoices, boxSelect);
// //       }
// // });
// // btn9.addEventListener("click" ,function(){
// //     if (btn9.style.display === "none") {
// //         btn9.style.display = "block";
// //       } else {
// //         btn9.style.display = "none";
// //         newBox9.innerHTML = player.value;
// //         human.push(9);
// //         checkScore(machine, human);
// //         terminatorChoice(buttonChoices, boxSelect);
// //       }
// //  });