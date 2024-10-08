let boxes= document.querySelectorAll(".box");
let rstbtn = document.querySelector("#reset-btn");
let newGamebtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let turnX=false;
let ct=0;
const winpattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
const resetGame = () => {
    ct=0;
    turnX=false;
    enablebox();
    msgContainer.classList.add("hide");
};
boxes.forEach((box)=>{
    box.addEventListener("click",() =>{
        console.log("box was clicked");
        if(turnX)
        {
            box.style.color="blue";
            box.innerText="X";
            turnX=false;
        }
        else{
  
            box.innerText="O";
            turnX=true;
        }
        box.disabled=true;
        ct++;
        if(ct==9){ draw();}
        checkwinner();
    });
});
const disablebox = () => {
    for(let box of boxes)
    {
        box.disabled=true;
    }
};
const enablebox = () => {
    for(let box of boxes)
    {
        box.disabled=false;
        box.innerHTML="";
    }
};
const showwinner = (winner) =>{
    msg.innerText=`Congrats, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disablebox();
};
const checkwinner = () => {
    for(let pattern of winpattern){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
        if(pos1!='' && pos2!='' && pos3!='')
        {
            if(pos1==pos2 && pos2==pos3)
            {
                console.log("winner is " + pos1);
                showwinner(pos1);
            }
        }
    }
};
const draw = () =>{
    msg.innerText=`Game is Drawn`;
    msgContainer.classList.remove("hide");
    disablebox();
};
newGamebtn.addEventListener("click",resetGame);
rstbtn.addEventListener("click",resetGame);