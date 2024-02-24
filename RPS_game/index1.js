let myScore =0;
let compScore = 0;

let choices = document.querySelectorAll(".img");
choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click",()=>{
        console.log("Choice is made");
        let userChoice = choice.getAttribute("id");
        console.log(userChoice);
        playGame(userChoice);
        
    });
});

let compChoice =()=>{
    let arr = ["rock","paper","scissors"];
    let arrIdx = Math.floor(Math.random()*3);
    return arr[arrIdx];
}


let playGame = (userChoice)=>{
   
     let selectMyscore = document.querySelector(".myScore");
     let selectComscore = document.querySelector(".compScore");
     let numMy =0;
     let numComp =0;
     let display = document.querySelector(".result")
     console.log("User choice is",userChoice);
     let CompChoice = compChoice();
     console.log("Computer choice is",CompChoice);
     let userWin = `You Win! Your ${userChoice} beats  ${CompChoice}`;
     let compWin = `You lost.  ${CompChoice} beats ${userChoice}`;
     let whoWin;
     if(CompChoice==userChoice)
     {
        display.innerHTML="Match Draw, Play Again";
     }
     else if(userChoice=="rock")
     {
         whoWin =(CompChoice =="paper")?compWin:userWin;
         display.innerHTML= whoWin;
     }
     else if(userChoice=="paper")
     {
        whoWin =(CompChoice=="rock")?userWin:compWin;
        console.log(whoWin);
       
        display.innerHTML= whoWin;
      
     }
     else
     {
        whoWin =(CompChoice=="rock")?compWin:userWin
       
        display.innerHTML= whoWin;
        
     }

}















