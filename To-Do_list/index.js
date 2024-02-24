let getValue; 
console.log(getValue);
let btn = document.querySelector(".submit");
console.log(btn);

btn.addEventListener("click",()=>{
    getValue = document.querySelector(".input").getAttribute("placeholder");
    console.log(getValue);
});

