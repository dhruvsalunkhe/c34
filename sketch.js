var syncball;
var database , position;
function setup(){
    createCanvas(500,500);
    database = firebase.database();
    var ballpos = database.ref('ball/position');
ballpos.on("value",readPosition,showError);
    syncball = createSprite(250,250,10,10);
    syncball.shapeColor = "red";
}

function draw(){
    background("white");
    if (position!== undefined){
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
}
    drawSprites();
}

function changePosition(x,y){
    ball.x = ball.x + x;
    ball.y = ball.y + y;
}

function readPosition(data){
    position = data.val();
    syncball.x = position.x;
    syncball.y = position.y;
}

function showError(){
    console.log("it is an error");
}

function writePosition(x,y){
    database.ref('ball/position').set({
        'x': position.x + x,
        'y': position.y + y
    })
}