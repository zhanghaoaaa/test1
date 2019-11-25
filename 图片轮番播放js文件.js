


function com1(){
    
	document.getElementById("im1").style.display="block";
	document.getElementById("im2").style.display="none";
	document.getElementById("im3").style.display="none";
	document.getElementById("im4").style.display="none";
	document.getElementById("im5").style.display="none";
	document.getElementById("im6").style.display="none";
	document.getElementById("button1").style.background="#3596F7";	
	document.getElementById("button2").style.background="#3E3E3E";
	document.getElementById("button3").style.background="#3E3E3E";
	document.getElementById("button4").style.background="#3E3E3E";
	document.getElementById("button5").style.background="#3E3E3E";	
	document.getElementById("button6").style.background="#3E3E3E";
}
function com2(){
	document.getElementById("im1").style.display="none";
	document.getElementById("im2").style.display="block";
	document.getElementById("im3").style.display="none";
	document.getElementById("im4").style.display="none";
	document.getElementById("im5").style.display="none";
	document.getElementById("im6").style.display="none";
	document.getElementById("button1").style.background="#3E3E3E";
	document.getElementById("button2").style.background="#3596F7";
	document.getElementById("button3").style.background="#3E3E3E";
	document.getElementById("button4").style.background="#3E3E3E";
	document.getElementById("button5").style.background="#3E3E3E";
	document.getElementById("button6").style.background="#3E3E3E";
}
function com3(){
	document.getElementById("im1").style.display="none";
	document.getElementById("im2").style.display="none";
	document.getElementById("im3").style.display="block";
	document.getElementById("im4").style.display="none";
	document.getElementById("im5").style.display="none";
	document.getElementById("im6").style.display="none";
	document.getElementById("button1").style.background="#3E3E3E";
	document.getElementById("button2").style.background="#3E3E3E";
	document.getElementById("button3").style.background="#3596F7";
	document.getElementById("button4").style.background="#3E3E3E";
	document.getElementById("button5").style.background="#3E3E3E";
	document.getElementById("button6").style.background="#3E3E3E";
}
function com4(){
	document.getElementById("im1").style.display="none";
	document.getElementById("im2").style.display="none";
	document.getElementById("im3").style.display="none";
	document.getElementById("im4").style.display="block";
	document.getElementById("im5").style.display="none";
	document.getElementById("im6").style.display="none";
	document.getElementById("button1").style.background="#3E3E3E";
	document.getElementById("button2").style.background="#3E3E3E";
	document.getElementById("button3").style.background="#3E3E3E";
	document.getElementById("button4").style.background="#3596F7";
	document.getElementById("button5").style.background="#3E3E3E";
	document.getElementById("button6").style.background="#3E3E3E";
}
function com5(){
	document.getElementById("im1").style.display="none";
	document.getElementById("im2").style.display="none";
	document.getElementById("im3").style.display="none";
	document.getElementById("im4").style.display="none";
	document.getElementById("im5").style.display="block";
    document.getElementById("im6").style.display="none";
	document.getElementById("button1").style.background="#3E3E3E";
	document.getElementById("button2").style.background="#3E3E3E";
	document.getElementById("button3").style.background="#3E3E3E";
	document.getElementById("button4").style.background="#3E3E3E";
	document.getElementById("button5").style.background="#3596F7";
	document.getElementById("button6").style.background="#3E3E3E";
}

function com6(){
	document.getElementById("im1").style.display="none";
	document.getElementById("im2").style.display="none";
	document.getElementById("im3").style.display="none";
	document.getElementById("im4").style.display="none";
	document.getElementById("im5").style.display="none";
    document.getElementById("im6").style.display="block";
	document.getElementById("button1").style.background="#3E3E3E";
	document.getElementById("button2").style.background="#3E3E3E";
	document.getElementById("button3").style.background="#3E3E3E";
	document.getElementById("button4").style.background="#3E3E3E";
	document.getElementById("button5").style.background="#3E3E3E";
	document.getElementById("button6").style.background="#3596F7";
}
window.onload=function(){
	var div = document.getElementById("test");
	var b1 = document.getElementById("button1");
	var b2 = document.getElementById("button2");
	var b3 = document.getElementById("button3");
	var b4 = document.getElementById("button4");
	var b5 = document.getElementById("button5");
	var b6 = document.getElementById("button6");
	var count = 0;
	var id1 = null;
	var func = null;
	b1.onclick = function(){
		window.clearInterval(id1);
		com1();
	}
	b2.onclick = function(){
		window.clearInterval(id1);
		com2();
	}
	b3.onclick = function(){
		window.clearInterval(id1);
		com3();
	}
	b4.onclick = function(){
		window.clearInterval(id1);
		com4();
	}
	b5.onclick = function(){
		window.clearInterval(id1);
		com5();
	}
	b6.onclick = function(){
		window.clearInterval(id1);
		com6();
	}
	div.onmouseout=function(){
		id1 =window.setInterval(func, 100);
	}
	id1 =window.setInterval(func = function(){
		 count++;
			
		 if(count>0){			
			 com1();
		 }if(count>20){
			 com2();
		 }if(count>40){
			 com3();
		 }if(count>60){
			 com4();
		 }if(count>80){
			 com5();
		 }if(count>100){
			 com6();
		 }if(count>120){
			 count=0;
		 }
	
	}, 100);
	div.onmouseover=function(){
		window.clearInterval(id1);
		
	}
}


