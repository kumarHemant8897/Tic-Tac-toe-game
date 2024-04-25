console.log("yes this is my second project");

let boxes = document.querySelectorAll("box");
let newBtn = document.querySelectorAll("#reset-btn");
let GameBtn = document.querySelector("#new-btn");
let msgcontainer = document.querySelector("msg-container");


let turnO =true;
let count =0;

const winpattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
    
];


const resetGame = () => {
    turnO=true;
    count=0;
    enable boxes();
    msg-container.classlist.add("hide")

};

boxes.forEach((box) => {
    box.addEventListener("click", ()=>{
        if(turnO){
            box.innertext="0";
            turnO=false;
        }
        else {
            box.innertext="X";
turnO  =false; 
     }
     box.disobled=true;
     count++;
     let iswinner = checkwinner();
     if(count===9 &&! iswinner) {
        game-draw();  
       }
    });
});


const gamedraw = () => {
    msg.innertext="game was draw";
    msgcontainer.classList.remove("hide");
    disabled boxes();

};

const enable boxe = () => {
    for(let box of boxes) {
        box.disobled= false;
        box.innertext = "";

    }
};


const showwinner = (winner)=> {
    msg.innertext= "congratulation you won the game" $(winner)
    
}