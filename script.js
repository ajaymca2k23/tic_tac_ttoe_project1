let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-btn");
let newgamebtn=document.querySelector("#new_btn");
let msg=document.querySelector("#msg");
let msgcontainer=document.querySelector(".msg-container");
let turnO=true; //playerx & playerO

let drawcnt=0;

const winpattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const restGame=()=>{
    turnO=true;
    enableBoxes();
    msgcontainer.classList.add("hide");
    drawcnt=0;
};
newgamebtn.addEventListener("click",restGame);
resetbtn.addEventListener("click",restGame);
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO==true){
            box.innerText="O";
            box.style.color="red";
            turnO=false;
        }
        else{
            box.innerText="X";
            box.style.color="blue";
            turnO=true;
        }
        box.disabled=true;
        drawcnt++;
        if(drawcnt==9){
            drawGame();
        }
        checkWinner();
    });
});
const drawGame=()=>{
    msg.innerText="Its A Draw";
    msgcontainer.classList.remove("hide");
};
const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const showWiner=(winner)=>{
    msg.innerText=`Congratulatin! the Winner is Player ${winner}`;
    msgcontainer.classList.remove("hide");
    disableBoxes();
    drawcnt=0;
}
const checkWinner=()=>{
    for(let pattern of winpattern){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;

        if(pos1!="" && pos2!="" && pos3!=""){
            if(pos1==pos2 && pos2==pos3){
                showWiner(pos1)
            }
        }
    }
};