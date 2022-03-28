
var posisiondedox,posisiondedoy;
canvas=document.getElementById("lienzo");
dibujo=canvas.getContext("2d");
color="black";
ancho=1;
var ancho=screen.width;
nueboancho=screen.width-70;
nueboalto=screen.height-300;
if(ancho<992){
    document.getElementById("lienzo").width=nueboancho;
    document.getElementById("lienzo").height=nueboalto;
}

function my_touchstart(e)
{
    color=document.getElementById("color").value;
    ancho=document.getElementById("ancho").value;
    posisiondedox=e.touches[0].clientX-canvas.offsetLeft;
    posisiondedoy=e.touches[0].clientY-canvas.offsetTopt;
}
canvas.addEventListener("touchstart",my_touchstart);
function my_touchmove(e)
{
    posisiondedoactualx=e.touches[0].clientX-canvas.offsetLeft;
    posisiondedoactualy=e.touches[0].clientY-canvas.offsetTopt;
    dibujo.beginPath();
    dibujo.strokeStyle=color;
    dibujo.lineWidth=ancho;
    
    dibujo.moveTo(posisiondedox,posisiondedoy);
    dibujo.lineTo(posisiondedoactualx,posisiondedoactualy);
    dibujo.stroke();
    posisiondedox=posisiondedoactualx;
    posisiondedoy=posisiondedoactualy;
}
    canvas.addEventListener("touchmove",my_touchmove);
function limpiar(){
    dibujo.clearRect(0, 0, dibujo.canvas.width, dibujo.canvas.height);
}


