
var gameState=0
var title, startButton, submit, pizza, table, piza, fries, fruit, vegetable, drinks, sauce, pizaN, friesN, fruitN, vegetableN, drinksN, sauceN, orderN,pizaR, friesR, fruitR, vegetableR, drinksR, sauceR, orderR;
var page=0

function preload() {
    //backgroundImg = loadImage("sprites/bg.png");
    pizzaImg= loadImage("pizza.png");
    backgroundimg =loadImage("brick.png")
    carrotImg= loadImage("carrot.png");
    energyDrinkImg= loadImage("energyDrink.png");
    friesImg= loadImage("fries.png");
    fruitImg= loadImage("fruit.png");
    sauceImg= loadImage("sauce.png");
}

function setup(){
    var canvas = createCanvas(windowWidth,windowHeight);
    background=createSprite(width/2,height/2,100,100)
    background.addImage(backgroundimg)
    submit=createSprite(width/2, height-100, 4000, 200);

    pizza=createSprite(width/10, height/2, 20, 20);
    pizza.addImage(pizzaImg);
    background.scale=2.5
    pizza.scale=0.5

    fries=createSprite(width-75, height/2, 20, 20);
    fruit=createSprite(width/10, height/3, 20, 20);
    vegetable=createSprite(width-75, height/3, 20, 20);
     drinks=createSprite(width/10, height-300, 20, 20);
     sauce=createSprite(width-75, height-300, 20, 20);
     order=createSprite(width/2, height/8, 2000, 200);
     playBution=createButton(width/2,height-50, width/1, height/5)
     vegetable.addImage(carrotImg);
     drinks.addImage(energyDrinkImg);
     fries.addImage(friesImg);
     fruit.addImage(fruitImg);
     sauce.addImage(sauceImg);
}

function draw(){
   
    function list(){
        pizzaR=Math.round(random(1, 5))
        friesR=Math.round(random(1, 5))
        fruitR=Math.round(random(1, 5))
        vegetableR=Math.round(random(1, 5))
        drinksR=Math.round(random(1, 5))
        sauceR=Math.round(random(1, 5))
        text(pizzaR, 0, 15);
        text(friesR, 0, 15);
        text(fruitR, 0, 15);
        text(vegetableR, 0, 15);
        text(drinksR, 0, 15);
        text(sauceR, 0, 15);
    }
    function people(){
        var rand = Math.round(random(1,10));
        switch(rand) {
          case 1: person.addImage(person1);
                  break;
          case 2: person.addImage(person2);
                  break;
          case 3: person.addImage(person3);
                  break;
          case 4: person.addImage(person4);
                  break;
          case 5: person.addImage(person5);
                  break;
          case 6: person.addImage(person6);
                  break;
          case 7: person.addImage(person7);
                  break;
          case 8: person.addImage(person8);
                  break;
          case 9: person.addImage(person9);
                  break;
          case 10: person.addImage(person10);
                  break;
          default: break;
        }
    }
    if(gameState===0){
        list();

    //order

            if(mousePressedOver(pizza)){
                    pizzaN=pizzaN+1
                
            }
            if(mousePressedOver(fries)){
                    friesN=friesN+1
            }
            if(mousePressedOver(fruit)){
                    fruitN=fruitN+1
            }
            if(mousePressedOver(vegetable)){
                    vegetableN=vegetableN+1

            }
            if(mousePressedOver(drinks)){
                    drinksN=drinksN+1

            }
            if(mousePressedOver(sauce)){
                    sauceN=sauceN+1

            }
            if(mousePressedOver(submit)){
                gameState=1
            }
    }
    if(gameState===1){
        if(pizzaN=pizzaR){
            pizzaN=0
            points=points+1
        }
        if(pizzaN!=pizzaR){
            pizzaN=0
        }
        if(friesN=friesR){
            friesN=0
            points=points+1
        }
        if(friesN!=friesR){
            friesN=0
        }
        if(fruitN=fruitR){
            fruitN=0
            points=points+1
        }
        if(fruitN!=fruitR){
            fruitN=0
        }
        if( vegetableN= vegetableR){
            vegetableN=0
            points=points+1
        }
        if( vegetableN!= vegetableR){
            vegetableN=0
        }
        if( drinksN= drinksR){
            drinksN=0
            points=points+1
        }
        if( drinksN!= drinksR){
            drinksN=0
        }
        if(sauceN=sauceR){
           sauceN=0
           points=points+1
        }
        if(sauceN!=sauceR){
            sauceN=0
            }
            people()
            list()
        gameState=0
    }
    drawSprites()
}

