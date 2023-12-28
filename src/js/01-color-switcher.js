function getRandomHexColor() {  
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    }
const body = document.querySelector("body")
const buttons = document.querySelectorAll("button");


function randomChange() {
    return new Promise(resolve => setTimeout(resolve, 500));
  }

function changeBack(){
    const color = getRandomHexColor()
    body.setAttribute("style", `background-color: ${getRandomHexColor()}`)
}

async function loopColor(){
    await randomChange()
}

const run = () => {
    loopColor().then(result => {
        if(buttons[0].hasAttribute("disabled")){
        changeBack()
        setTimeout(() => {
            run()
        }, 500)
    }
    });

}
function removeDisabled(){
    buttons[0].removeAttribute("disabled")
}

function addDisabled(){
    buttons[0].setAttribute("disabled", "") 
}

buttons[0].addEventListener("click", () =>{
    run(); 
    addDisabled();
})
buttons[1].addEventListener("click", removeDisabled)