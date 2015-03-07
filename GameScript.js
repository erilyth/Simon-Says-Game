var canvas = document.getElementById('main');
var ctx = canvas.getContext('2d');
canvas.addEventListener("click", getPosition, false);

var counter;
var lose;
var x,y;
var myVar;
var mousecount=0;
var gamestate=0;
var myVar2;
var state=0;
var thingy;
var max =1;
var count=0;
var myVar;
var arr=[2,1,4,3,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2];
var redimg = new Image(), blueimg = new Image(), greenimg = new Image(), yellowimg = new Image();
var redimg1 = new Image(), blueimg1 = new Image(), greenimg1 = new Image(), yellowimg1 = new Image();
redimg.src="red.jpg"; blueimg.src="blue.jpg"; yellowimg.src="yellow.jpg"; greenimg.src="green.jpg";
redimg1.src="red1.jpg"; blueimg1.src="blue1.jpg"; yellowimg1.src="yellow1.jpg"; greenimg1.src="green1.jpg";

function Clear() //Stuff that are always on the screen
{
	ctx.clearRect(0,0,500,500);
	ctx.drawImage(greenimg1, 10, 10);
	ctx.drawImage(redimg1, 255, 10);
	ctx.drawImage(yellowimg1, 10, 255);
	ctx.drawImage(blueimg1, 255, 255);
	ctx.fillStyle="white";
	ctx.arc(250,250,90,0,2*Math.PI);
	ctx.fill();
	ctx.fillStyle="black";
	ctx.font = 'italic 14pt Calibri';
	ctx.fillText("Click Me First!", 180, 250);
	ctx.font = 'italic 26pt Calibri';	
	ctx.fillText(max,238,300);
}

function Check()
{
	Clear();
	if(arr[thingy]==1 && thingy>=0)
	{
		if(x>=0 && x<=250 && y>=0 && y<=250)
		{	
			setTimeout(function(){Clear();},400);	
			ctx.drawImage(greenimg,35,35);
		}		
		else
		{
			state=0;
                        lose=1;
			Clear();
			ctx.clearRect(175,200,150,50);
			ctx.font = 'italic 24pt Calibri'
			ctx.fillText("You Lose",180,240);
			throw new Error('This is not an error. This is just to abort javascript');
		}
	}
	else if(arr[thingy]==2 && thingy>=0)
	{
		if(x>=250 && x<=500 && y>=0 && y<=250)		
  		{
			setTimeout(function(){Clear();},400);
			ctx.drawImage(redimg,265,35);
		}
		else
		{
			state=0;
                        lose=1;
			Clear();
			ctx.clearRect(175,200,150,50);
			ctx.font = 'italic 24pt Calibri'
			ctx.fillText("You Lose",180,240);
			throw new Error('This is not an error. This is just to abort javascript');
		}
	}	
	else if(arr[thingy]==3 && thingy>=0)
	{
		if(x>=0 && x<=250 && y>=250 && y<=500)		
  		{
			setTimeout(function(){Clear();},400);
			ctx.drawImage(yellowimg,35,265);
		}
		else
		{
			state=0;
                        lose=1;
			Clear();
			ctx.clearRect(175,200,150,50);
			ctx.font = 'italic 24pt Calibri'
			ctx.fillText("You Lose",180,240);
			throw new Error('This is not an error. This is just to abort javascript');
		}
	}	
	else if(arr[thingy]==4 && thingy>=0)
	{
		if(x>=250 && x<=500 && y>=250 && y<=500)		
  		{
			setTimeout(function(){Clear();},400);
			ctx.drawImage(blueimg,265,265);
		}
		else
		{
			state=0;
                        lose=1;
			Clear();
			ctx.clearRect(175,200,150,50);
			ctx.font = 'italic 24pt Calibri'
			ctx.fillText("You Lose",180,240);
			throw new Error('This is not an error. This is just to abort javascript');
		}
	}	
}

function getPosition(event)
{
        x = new Number();
        y = new Number();
        x = event.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
        y = event.clientY + document.body.scrollTop + document.documentElement.scrollTop;
        x -= canvas.offsetLeft;
        y -= canvas.offsetTop;
	if(state==1)	
	{
		Check();
	}	
	else
		state=1;
	thingy++;
	if(mousecount==max && lose==0)
	{
		max++;
		setTimeout(function(){Clear();},800);
		setTimeout(function(){StartGame();},300);  
	}
	mousecount++;
}

function Initialize()
{
	if(gamestate==0)
	{
		for(var kk=0;kk<100;kk++)
		{
			randomness=Math.floor(Math.random()*4+1)
			arr[kk]=randomness;
		}
		Clear();
		gamestate=1;	
		StartGame();
	}
}

function StartGame(){
	lose=0;
	count=0;
	Clear();
	myVar = setInterval(function(){setColor(); count++; }, 900);
}

function setColor() {
	Clear();
	setTimeout(function(){Clear();},800);
	if(arr[count]==1)
		ctx.drawImage(greenimg,35,35);
	if(arr[count]==2)
		ctx.drawImage(redimg,265,35);
	if(arr[count]==3)
		ctx.drawImage(yellowimg,35,265);
	if(arr[count]==4)
		ctx.drawImage(blueimg,265,265);
	if(count+1==max)
	{
		thingy=-1;
		mousecount=0;
		clearInterval(myVar);
		return;
        }
}
