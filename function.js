var num ="";
function ac() {
	num = "";
	y = 0;
	document.getElementById("write").innerHTML = num;
	document.getElementById("write2").innerHTML = num;
	// body...
}
function zero() {
	num = num.concat("0");
	document.getElementById("write").innerHTML = num;
	cal();
}
function one() {
	
	num = num.concat("1");
	document.getElementById("write").innerHTML = num;
	cal();
}
function two() {
	
	num = num.concat("2");
	document.getElementById("write").innerHTML = num;
	cal();
}
function three() {
	
	num = num.concat("3");
	document.getElementById("write").innerHTML = num;
	cal();
}
function four() {
	
	num = num.concat("4");
	document.getElementById("write").innerHTML = num;
	cal();
}
function five() {
	
	num = num.concat("5");
	document.getElementById("write").innerHTML = num;
	cal();
}
function six() {
	
	num = num.concat("6");
	document.getElementById("write").innerHTML = num;
	cal();
}
function seven() {
	
	num = num.concat("7");
	document.getElementById("write").innerHTML = num;
	cal();
}
function eight() {
	
	num = num.concat("8");
	document.getElementById("write").innerHTML = num;
	cal();
}
function nine() {
	
	num = num.concat("9");
	document.getElementById("write").innerHTML = num;
	cal();
}
function add() {
	
	num = num.concat("+");
	document.getElementById("write").innerHTML = num;
	cal();
}
function sub() {

	num = num.concat("-");
	document.getElementById("write").innerHTML = num;
	cal();
}
function mul() {
	
	num = num.concat("*");
	document.getElementById("write").innerHTML = num;
	cal();
}
function divi() {
	
	num = num.concat("/");
	document.getElementById("write").innerHTML = num;
	cal();
}
function per() {
	
	num = num.concat("%");
	document.getElementById("write").innerHTML = num;
	cal();
}
function point() {
	
	num = num.concat(".");
	document.getElementById("write").innerHTML = num;
	cal();
}
function clea() {
	
	var er = num.length;
	num = num.slice(0,er-1);
	document.getElementById("write").innerHTML = num;
	cal();
}
function cal()
{
	 y = eval(num);
		document.getElementById("write2").innerHTML = y;
}

function equali()
{
		document.getElementById("write").innerHTML = y;
		document.getElementById("write2").innerHTML = null;

}



