var rusheaSlider;
var godelSlider;
var bobbiSlider;


function setup(){
    createCanvas(600,400);
    background(0);
    
    rusheaSlider = createSlider(0, 255, 0);
    rusheaSlider.position(20,20);
    
    godelSlider = createSlider(0, 255, 0);
    godelSlider.position(20,60);
    
    bobbiSlider = createSlider(0, 255, 0);
    bobbiSlider.position(20,100);
    


}    

function draw(){
    redValue= rusheaSlider.value();
    greenValue= godelSlider.value();
    blueValue = bobbiSlider.value();
    
    background(redValue,greenValue,blueValue)
    
} 