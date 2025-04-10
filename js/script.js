
const test = document.getElementById("test");
const main = document.getElementById("main");

let cont = 0;
let interval;

let posX = 0;
let posY = 0;

// main.addEventListener("click",()=>{
//     cont = 0;
    
//     for(let i=0;i<16;i++){
//         setTimeout(()=>{
//             cont++;
//             test.innerHTML = `<img src="/assets/png/Idle (${cont}).png">`;
//         }, i * 500);
//     }

    
// })
MAX = 16

function IdleAnimation(){
    cont =0;
    interval = setInterval(()=>{
        for(let i=0;i<MAX;i++){
            setTimeout(()=>{cont++;
            test.innerHTML = `<img src="/assets/png/Idle (${cont}).png">`;
            if(cont == MAX || cont>MAX){
                cont = 0;
            }},i*250);
        }
    }, 500);
}

IdleAnimation();

main.addEventListener("click",(event)=>{
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    posX = mouseX;
    posY = mouseY;

    document.documentElement.style.setProperty('--custom-x', `${mouseX}px`);
    document.documentElement.style.setProperty('--custom-y', `${mouseY}px`);

    console.log(mouseX, mouseY, posX, posY);
    clearInterval(interval);
    test.innerHTML = `<img src="/assets/png/Idle (1).png">`
})