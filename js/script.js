
const test = document.getElementById("test");
const main = document.getElementById("main");

let interval;

DESVIACIONX = 116;
DESVIACIONY = 185;

function IdleAnimation(){
    let contIdle =0;
    const MAXIDLE = 16;
    interval = setInterval(()=>{
            contIdle++;
            if(contIdle>MAXIDLE){
                contIdle=1;
            }
            
            //setTimeout(()=>{                
                test.innerHTML = `<img src="/assets/png/Idle (${contIdle}).png">`;           
            //},250);
        
    }, 100);
}

function WalkAnimation(){
    let contWalk =0;
    const MAXWALK=20;
    interval = setInterval(()=>{
            contWalk++;
            if(contWalk>MAXWALK){
                contWalk=1;
            }
            
            //setTimeout(()=>{
            test.innerHTML = `<img src="/assets/png/Walk (${contWalk}).png">`;
            // console.log(contWalk);
            //},250);
            
        
    }, 100);
}

IdleAnimation();

main.addEventListener("click",(event)=>{
    clearInterval(interval);    //stops the current animation
    WalkAnimation();    
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    
    
    setTimeout(()=>{
        document.documentElement.style.setProperty('--custom-x', `${mouseX-DESVIACIONX}px`);    //para que se mueva al cursor
        document.documentElement.style.setProperty('--custom-y', `${mouseY-DESVIACIONY}px`);
    }, 1500);   //que la animacion empieze antes de mover el personaje


    setTimeout(()=>{
        clearInterval(interval);
        IdleAnimation();
    }, 5000);
    

    console.log(mouseX, mouseY);
})
