//left right spacebar


let input={
    down:{},
    pressed:{},
    init(){
        //event listener set
        window.addEventListener("keydown",(e)=>{
            this.down[e.code]=true;

        })
        window.addEventListener("keyup",(e)=>{
           delete this.down[e.code];
           delete this.pressed[e.code];


        })
    },
    update(gameObj){
        let mario=gameObj.entities.mario;

        if(this.isDown("ArrowRight")){
            mario.posX+=mario.velX;
            mario.currentDirection="right";
            mario.currentState=mario.states.walkingAnim;

        }
        if(this.isDown("ArrowLeft")){
            mario.posX-=mario.velX;
            mario.currentDirection="left";
            mario.currentState=mario.states.walkingAnim;


        }
        
        if(this.isPressed("Space")){
            if(mario.velY==1.1)mario.velY-=10;
        }

    },
    isDown(key){
        return this.down[key];

    },
    isPressed(key){
        if(this.pressed[key]){
            //matlab hm koi task perform nhi kr skte ab
            return false;
        }
        else if(this.isDown(key)){//matlb first time press hui h
            return true;
        }
    }
}