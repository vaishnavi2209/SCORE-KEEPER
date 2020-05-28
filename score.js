alert()("Start Playing,GOOD LUCK !!!");
var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById("p2");
var resertButton =document.getElementById("r");
var numInput = document.querySelector("input");
var winningScoreDisplay = document.querySelector("p span");

var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");

var p1Score = 0;
var p2Score = 0;
var gameover = false;
var winningScore = 5;

p1Button.addEventListener("click",function(){
	if(!gameover)
	{
		p1Score++;

		if(p1Score === winningScore)
		{
			p1Display.classList.add("winner")
			gameover = true;
		}
		p1Display.textContent = p1Score; //it will give a string
	}
});

p2Button.addEventListener("click",function(){
	if(!gameover)
	{
		p2Score++;
		if(p2Score === winningScore)
		{
			p2Display.classList.add("winner")
			gameover = true;
		}
		p2Display.textContent = p2Score; //it will give a string
	}
});

resertButton.addEventListener("click",function(){
	p1Score =0 ;
	p2Score =0;
	p1Display.textContent = p1Score;
	p2Display.textContent = p2Score;
	p1Display.classList.remove("winner");
	p2Display.classList.remove("winner");
	gameover = false;
});

numInput.addEventListener("change",function(){
	winningScoreDisplay.textContent = numInput.value;  // this will display the vlue given as input
    winningScoreDisplay = Number(numInput.value);

});