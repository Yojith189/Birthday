var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");
birthdayobject="";
function new_image()
{
fabric.Image.fromURL("BirthdayImage.jpg",function(Img){
birthdayobject= Img;
birthdayobject.scaleToWidth(1000);
birthdayobject.scaleToHeight(700);
birthdayobject.set({
    top:0 , left:0
});
canvas.add(birthdayobject);
});
	
}

function playSound(){
	x.play();
}
