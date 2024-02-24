//Failed attemp
let img = document.querySelectorAll("img");
console.log(img);
let arr = [];
for(let i =0; i<=img.length-1; i++)
{
    arr[i] = img[i];
}
let generate;
let rock = document.querySelector("#img1");
rock.addEventListener("click",(evt)=>{
     generate = 1;
    console.log(generate);
})
let paper = document.querySelector("#img2");
paper.addEventListener("click",(evt)=>{
     generate = 2;
    console.log(generate);
})
let secissor = document.querySelector("#img3");
secissor.addEventListener("click",(evt)=>{
     generate = 3;
    console.log(generate);
})
let randComp = Math.floor(Math.random()*3)+1;
console.log(randComp);
console.log(generate);


if(randComp==generate)
{
    console.log("Match Draw");
}
else if(generate==1 && randComp==2)
{
    console.log("Computer win!");
}
else if(generate==1 && randComp==3)
{
    console.log("I win");
}
else if(generate==2 && randComp==1)
{
    console.log("I Win");
}


// if(randComp);


