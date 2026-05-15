let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector(".resetbtn");
let newgamebtn= document.querySelector(".newbtn");
let msgcontainer= document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turn0=true;
const winpatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

const resetgame=()=>{
turn0=true;
enableboxes();
msgcontainer.classList.add("hide");
}
 
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
       
        box.innerText="x";
        if(turn0===true){
            box.innerText="x";
            turn0=false;
        }else{
            box.innerText="0";
            turn0=true;
        }
        box.disabled=true;

        checkwinner();
    });
});

const disableboxes=()=>{
    for(let box of boxes ){
        box.disabled=true;
        }
};
const enableboxes=()=>{
    for(let box of boxes ){
        box.disabled=false;
        box.innerText="";
        }
};

const showwinner=(winner)=>{
    msg.innerText=`Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableboxes();
};

const checkwinner=()=>{
    for(let pattern of winpatterns){
  let pos1val=boxes[pattern[0]].innerText;
  let pos2val=boxes[pattern[1]].innerText;
  let pos3val=boxes[pattern[2]].innerText;

  if(pos1val!="" && pos2val !="" && pos3val !=""){
    if(pos1val === pos2val && pos2val === pos3val){
       
        showwinner (pos1val);
    }
  }
    }
};

newgamebtn.addEventListener("click", resetgame);
resetbtn.addEventListener("click", resetgame);