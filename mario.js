//kis spritesheet se konsa wala potion kaatna h hme
class Sprite {
    constructor(img, srcX, srcY, srcW, srcH) {
        this.img = img;
        this.srcX = srcX;
        this.srcY = srcY;
        this.srcW = srcW;
        this.srcH = srcH;
    }
}


//game me kis jgh dalna h

class Entity {
    constructor(sprite, type, posX, posY, width, height) {
        this.sprite = sprite;
        this.type = type;
        this.posX = posX;
        this.posY = posY;
        this.width = width;
        this.height = height;
    }
}

//mario 

class Mario extends Entity {
    constructor(spritesheet, posX, posY, width, height) {
        let img = new Sprite(spritesheet, 650, 3, 17, 19);
        super(img, "mario", posX, posY, width, height);
        this.velX = 1.8;
        this.velY = 0;
        //states->> standing,walking,jumping
        //frame
        let self=this;
        this.animeFrame = {
            walkRight: {
                frames: [
                    new Sprite(spritesheet, 667, 5, 16, 16),
                    new Sprite(spritesheet, 683, 5, 16, 16),
                    new Sprite(spritesheet, 699, 5, 16, 16),

                ],
                counter:0

            },
            walkLeft: {
                frames: [
                    new Sprite(spritesheet, 844, 21, 16, 16),
                    new Sprite(spritesheet, 828, 21, 16, 16),
                    new Sprite(spritesheet, 812, 21, 16, 16),

                ],
                counter: 0,
            },
            standRight: new Sprite(spritesheet, 651, 5, 16, 16),
            standLeft: new Sprite(spritesheet, 860, 21, 16, 16),
            jumpRight: new Sprite(spritesheet, 731, 5, 16, 16),
            jumpLeft: new Sprite(spritesheet, 778, 22, 16, 16),

        }
        this.states= {
            walkingAnim(gameObj){
                
                if(self.currentDirection=="left"){
                    if(gameObj.animeFrame%10==0){
                        self.sprite=self.animeFrame.walkLeft.frames[self.animeFrame.walkLeft.counter];
                        self.animeFrame.walkLeft.counter=(self.animeFrame.walkLeft.counter+1)%2;

                    }
                    

                }
                else{
                    if(gameObj.animeFrame%10==0){
                        self.sprite=self.animeFrame.walkRight.frames[self.animeFrame.walkRight.counter];
                        self.animeFrame.walkRight.counter=(self.animeFrame.walkRight.counter+1)%2;
    
                    }
                    


                }

            },
            standingAnim(){
                if(self.currentDirection=="left"){
                    self.sprite=self.animeFrame.standLeft;

                }
                else{
                    self.sprite=self.animeFrame.standRight;
                    
                }

            },
            jumpingAnim(){
                if(self.currentDirection=="left"){
                    self.sprite=self.animeFrame.jumpLeft;

                }
                else{
                    self.sprite=self.animeFrame.jumpRight;
                    
                }

            }



        }        
        this.currentDirection = "right";
        this.currentState=this.states.standingAnim;
    }
}