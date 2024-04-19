let ancho=document.querySelector("#ancho");
let vancho=document.querySelector("#vancho");
let alto=document.querySelector("#alto")
let valto=document.querySelector("#valto")
let color=document.querySelector("#color")
let anchoborde=document.querySelector("#anchoborde")
let vanchoborde=document.querySelector("#vanchob")
let colorborde=document.querySelector("#colorborde")
let selector=document.querySelector("#selector")
let cajita=document.querySelector("#cajita")

ancho.oninput=()=> dibujar()
alto.oninput=()=> dibujar()
anchoborde.oninput=()=> dibujar()
color.oninput=()=> dibujar()
colorborde.oninput=()=> dibujar()
selector.oninput=()=> dibujar()

const dibujar=()=>{
let a=parseInt(ancho.value);
let al=parseInt(alto.value);
let ab=parseInt(anchoborde.value);
let c1=color.value;
let c2=colorborde.value;
let tipo=selector.value;


vancho.innerHTML=a;
valto.innerHTML=al;
vanchoborde.innerHTML=ab;


cajita.style.width=a+"px"
cajita.style.height=al+"px"
cajita.style.borderWidth=ab+"px"
cajita.style.backgroundColor=c1
cajita.style.borderColor=c2;
cajita.style.borderStyle=tipo;

}