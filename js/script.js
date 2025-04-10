
const test = document.getElementById("test");
const main = document.getElementById("main");

let interval;


// main.addEventListener("click",()=>{
//     cont = 0;
    
//     for(let i=0;i<16;i++){
//         setTimeout(()=>{
//             cont++;
//             test.innerHTML = `<img src="/assets/png/Idle (${cont}).png">`;
//         }, i * 500);
//     }

    
// })


function IdleAnimation(){
    let contIdle =0;
    MAXIDLE = 16;
    interval = setInterval(()=>{
        for(let i=0;i<MAXIDLE;i++){
            if(contIdle>MAXIDLE){
                contIdle=0;
            }
            contIdle++;
            setTimeout(()=>{
                
                test.innerHTML = `<img src="/assets/png/Idle (${contIdle}).png">`;           
            
            },i*250);
        }
    }, 500);
}

function WalkAnimation(){
    let contWalk =0;
    MAXWALK=20;
    interval = setInterval(()=>{
        for(let i=0;i<MAXWALK;i++){
            if(contWalk>MAXWALK){
                contWalk=0;
            }
            contWalk++;
            setTimeout(()=>{
            test.innerHTML = `<img src="/assets/png/Walk (${contWalk}).png">`;
            },i*250);
            
        }
    }, 500);
}

IdleAnimation();

main.addEventListener("click",(event)=>{
    clearInterval(interval);    //stops the current animation
    WalkAnimation();    
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    
    
    setTimeout(()=>{
        document.documentElement.style.setProperty('--custom-x', `${mouseX}px`);
        document.documentElement.style.setProperty('--custom-y', `${mouseY}px`);
    }, 1500);

    
    setTimeout(()=>{
        clearInterval(interval);
        IdleAnimation();
    }, 5000);


    console.log(mouseX, mouseY);
    // clearInterval(interval);
    // test.innerHTML = `<img src="/assets/png/Idle (1).png">`
})

IdleAnimation();