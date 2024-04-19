let ancho=document.querySelector("#ancho");
let vancho=document.querySelector("#vancho");
let alto=document.querySelector("#alto")
let valto=document.querySelector("#valto")
let color=document.querySelector("#color")
let anchoborde=document.querySelector("#anchoborde")
let vanchoborde=document.querySelector("#vanchob")
let colorborde=document.querySelector("#colorborde")
let selector=document.querySelector("#selector")
let radius=document.querySelector("#radius")
let vradius=document.querySelector("#vradius")
let rotate=document.querySelector("#rotate")
let vrotate=document.querySelector("#vrotate")
let s=document.querySelector("#scale")
let vscale=document.querySelector("#vscale")
let sombray=document.querySelector("#sombray")
let vsombray=document.querySelector("#vsombray")
let sombrax=document.querySelector("#sombrax")
let vsombrax=document.querySelector("#vsombrax")
let tamaño=document.querySelector("#tamaño")
let vtamaño=document.querySelector("#vtamaño")
let tamaño2=document.querySelector("#tamaño2")
let vtamaño2=document.querySelector("#vtamaño2")
let tamaño3=document.querySelector("#tamaño3")
let vtamaño3=document.querySelector("#vtamaño3")
let colorsombra=document.querySelector("#colorsombra")
let cajita=document.querySelector("#cajita")

ancho.oninput=()=> dibujar()
alto.oninput=()=> dibujar()
anchoborde.oninput=()=> dibujar()
color.oninput=()=> dibujar()
colorborde.oninput=()=> dibujar()
selector.oninput=()=> dibujar()
radius.oninput=()=> dibujar()
rotate.oninput=()=> dibujar()
s.oninput=()=> dibujar()
sombray.oninput=()=> dibujar()
sombrax.oninput=()=> dibujar()
tamaño.oninput=()=> dibujar()
tamaño2.oninput=()=> dibujar()
tamaño3.oninput=()=> dibujar()
colorsombra.oninput=()=> dibujar()

const dibujar=()=>{
let a=parseInt(ancho.value);
let al=parseInt(alto.value);
let ab=parseInt(anchoborde.value);
let b=parseInt(radius.value)
let c=parseInt(rotate.value)
let d=parseInt(s.value)
let e=parseInt(sombray.value)
let f=parseInt(sombrax.value)
let g=parseInt(tamaño.value)
let ga=parseInt(tamaño2.value)
let gb=parseInt(tamaño3.value)
let h=colorsombra.value
let c1=color.value;
let c2=colorborde.value;
let tipo=selector.value;


vancho.innerHTML=a;
valto.innerHTML=al;
vanchoborde.innerHTML=ab;
vradius.innerHTML=b
vrotate.innerHTML=c
vscale.innerHTML=d
vsombray.innerHTML=e
vsombrax.innerHTML=f


cajita.style.width=a+"px"
cajita.style.height=al+"px"
cajita.style.borderWidth=ab+"px"
cajita.style.backgroundColor=c1
cajita.style.borderColor=c2;
cajita.style.borderStyle=tipo;
cajita.style.borderRadius=b+"%"
cajita.style.rotate=c+"deg"
cajita.style.scale=(d)
cajita.style.bottom=e+"px"
cajita.style.left=f+"px"
cajita.style.boxShadow=g+"px "+ga+"px "+gb+"px "+h
}
