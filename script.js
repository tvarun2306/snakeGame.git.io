const INTERVAL_TIME=100;

let snake_x=0;
let snake_y=200;
let food_x=0;
let food_y=0;
let direction="R";
let score=document.querySelector('.score');
// score=0;
let food= document.querySelector('.food');
let snake=document.querySelector('.snakeBodyPixel'); 

  

function move(){
    setInterval(()=>{
        switch(direction){

             case 'R': snake_x+=10 ;
             if(snake_x>=400)
             {
                snake_x=0;
             }
             break;

             case 'L': 
             snake_x-=10;
             if(snake_x<0)
             {
                snake_x=400;
             }
             break;

             case 'U':
                snake_y-=10;

                if(snake_y<0)
                {
                    snake_y=400;
                }

                break;
             case 'D':
                snake_y+=10;
                if(snake_y>=400)
                {
                    snake_y=0;
                }    
                break;

                default:
                    break;

            }
    snake.style.left= snake_x + 'px';
    console.log(snake_x);
    snake.style.top= snake_y+ 'px'; 
     
               


        if(snake_x===food_x  &&  snake_y===food_y)
        {
            rand_food();
            score.innerText++;
        }


    },100);
}


function rand_food(){
    food_x=Math.floor(Math.random()*40)*10;
    food_y=Math.floor(Math.random()*40)*10;
    
    food.style.left=food_x+'px';
    food.style.top=food_y+'px';

}




function init(){

     
    direction="D";
    move();
    window.addEventListener('keydown',(e)=>{
        if(e.keyCode===37)
        {
            direction='L';
        }
        else if(e.keyCode===38)
        {
            direction='U';
        }
        else if(e.keyCode===39)
        {
            direction='R';
        }
        else if(e.keyCode===40)
        {
            direction='D';
        }

        
        
    });

}

window.onload=init;