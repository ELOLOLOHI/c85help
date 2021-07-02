canvas= new fabric.Canvas("canvasy");

playerx=10;
playery=10;

blockw=30;
blockh=30;

playerimg=" ";
blockimg=" ";

function playerupdate(){
    fabric.Image.fromURL("player.png", function(img){
        playerimg=img;
        playerimg.scaleToWidth(150);
        playerimg.scaleToHeight(140);
        playerimg.set({
            top: playery,
            left: playerx
        });
        canvas.add(playerimg);
    });
};

function objectupdate(getimg){
    fabric.Image.fromURL(getimg, function(img2){
blockimg=img2;
blockimg.scaleToWidth(blockw);
blockimg.scaleToHeight(blockh);
blockimg.set({
    top:playery,
    left:playerx
});
canvas.add(blockimg);
    })

}

window.addEventListener("keydown", mydown);

function mydown(e){
    
    keypressed= e.keyCode; 
    console.log(keypressed);

    if(keypressed== "37"){
        left();
        console.log("left-37");
        
    };

    if(keypressed=="38"){
        up();
        console.log("up-38");
    };

    if(keypressed=="39"){
        right();
        console.log("right-39");
    };

    if(keypressed="40"){
        down();
        console.log("down-40");

    };

    if(keypressed=="78"){
        objectupdate("roof.jpg");
        console.log("n")
    };

    if(keypressed=="87"){
        objectupdate("trunk.jpg");
        console.log("w")
    };

    if(keypressed=="72"){
        objectupdate("unique.png");
        console.log("h")
    };

    if(keypressed="66"){
        objectupdate("wall.jpg");
        console.log("b");
    };

    if(keypressed=="89"){
        objectupdate("yellow_wall.png");
        console.log("y");
    };

    if(keypressed=="83"){
        objectupdate("cloud.jpg");
        console.log("s");
    };

    if(keypressed=="76"){
        objectupdate("dark_green.png");
        console.log("l")
    };

    if(keypressed=="71"){
        objectupdate("ground.png");
        console.log("g");
    };

    if(keypressed=="69"){
        objectupdate("light_green.png");
        console.log("e")
    };

    if(e.shiftkey==true && keypressed=="65"){
        console.log("add");
        blockw= blockw + 10;
        blockh= blockh+10;
        document.getElementById("number").innerHTML= blockw;
        document.getElementById("number1").innerHTML= blockh;
    };

    if(e.shiftkey==true && keypressed=="77"){
        console.log("minus");
        blockw= blockw-10;
        blockh= blockh-10;
        document.getElementById("number").innerHTML= blockw;
        document.getElementById("number1").innerHTML= blockh;
    };


    




}

function up(){
    if(playery>=0){
        playery= playery-blockh;
        canvas.remove(playerimg);
        playerupdate();
    }
}

function down(){
    if(playery<=450){
        playery=playery+blockh;
        canvas.remove(playerimg);
        playerupdate();
    }

}

function left(){
    if(playerx>=0){
        playerx=playerx-blockw;
        canvas.remove(playerimg);
        playerupdate();
    }

}

function right(){
    if(playerx<=660){
        playerx=playerx+blockw;
        canvas.remove(playerimg);
        playerupdate();
    }

}
