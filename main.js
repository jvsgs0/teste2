quickDrawDataset=['1', '2', '3', '4']

sketch = document.getElementById("ESD").innerText;

timerCounter = 0;
timerCheck = "";
drawSketch = "";
answerHolder = "";
score = 0;

function draw()
{
if(sketch == drawSketch)
{
   answerHolder = "set";
   score = score +1;
   score = document.getElementById("Po").value;
}
checkSketch();
}

function checkSketch()
{
 sketch == drawSketch;
    timerCounter = timerCounter +1;
    timerCounter = document.getElementById("T");
    console.log(timerCounter);
    
    if(timerCounter = 400);
    {
        timerCounter = 0;
        timerCheck = "Completo";
    }
    if(timerCheck = "Completo")
    {
        timerCheck = "";
        answerHolder = "";
        updateCanvas();
    }
    if(answerHolder = "set")
    {
        timerCheck = "";
        answerHolder = "";
        updateCanvas();
    }
}

function updateCanvas()
{
    background("white");
    randomNumber = Math.floor((Math.random() *quickDrawDataset.length)+1)

console.log(randomNumber);

sketch = randomNumber.quickDrawDataset;

document.write(sketch);
}

function setup()
{
    canvas = createCanvas(280, 280);
    canvas.center();
    background("white");
}