var output = null;
var can = null;
var dc = null;
var im = null;
var x = 0, y = 448;

function init()
{
	document.getElementById("hd").innerHTML =
		document.title;
	document.getElementById("ft").innerHTML =
		"&copy;2021 William Deckler";

	output = document.getElementById("output");
	output.innerHTML = "<p>Whatup?</p>";

	can = document.getElementById("can");
	dc = can.getContext("2d");
	
	im = document.createElement("img");
	im.src = "spritesheet.png";
	im.width = 512;
	im.height = 512;
	im.onload = function(e)
	{
		anim();
	}
}

function anim()
{
	dc.clearRect(0,0, 256,256);
	dc.drawImage(im, x,y, 64,64, 0,0, 256,256);
	
	x += 64;
	if(x >= 512) x = 0;
	
	setTimeout(anim, 200);
}
