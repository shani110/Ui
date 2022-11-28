$(".w").click(function(event) {
	
	var a = new Audio("sounds/crash.mp3");
	a.play(); 
});

$(".a").click(function(event) {
	
	var a = new Audio("sounds/kick-bass.mp3");
	a.play(); 
});

$(".s").click(function(event) {
	
	var a = new Audio("sounds/tom-1.mp3");
	a.play(); 
});

$(".d").click(function(event) {
	
	var a = new Audio("sounds/tom-2.mp3");
	a.play(); 
});

$(".j").click(function(event) {
	
	var a = new Audio("sounds/tom-3.mp3");
	a.play(); 
});

$(".l").click(function(event) {
	
	var a = new Audio("sounds/tom-4.mp3");
	a.play(); 
});

$(".k").click(function(event) {
	
	var a = new Audio("sounds/snare.mp3");
	a.play(); 
});
$(".l").click(function(event) {
	
	var a = new Audio("sounds/crash.mp3");

	a.play(); 

});


const q = 81;
const a = 65;
const s = 83;
const d = 68;
const f = 70;
const t = 84;
const x = 88;

  $(document).keydown(function(event) {
  	/* Act on the event */
  	if(event.which == q)
  	{
  		 var a = new Audio("sounds/crash.mp3");
	a.play();

  	}
  	if(event.which == a)
  	{
  		 var a = new Audio("sounds/kick-bass.mp3");
	a.play(); 

  	}
  	if(event.which == s)
  	{
  		  var tom1 = new Audio("sounds/kick-bass.mp3");

      tom1.play();

  	}
  	if(event.which == d)
  	{
  		  var tom1 = new Audio("sounds/tom-1.mp3");

      tom1.play();

  	}
  	if(event.which == f)
  	{
  		  var tom1 = new Audio("sounds/tom-2.mp3");

      tom1.play();

  	}
  	if(event.which == t)
  	{
  		  var tom1 = new Audio("sounds/tom-3.mp3");

      tom1.play();

  	}
  	if(event.which == x)
  	{
  		  var tom1 = new Audio("sounds/tom-4.mp3");

      tom1.play();

  	}
  });