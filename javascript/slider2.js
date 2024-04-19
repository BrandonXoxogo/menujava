let valor=document.querySelector("#valor");
let dv=document.querySelector("#value");
let cajita=document.querySelector("#cajita")
valor.oninput=()=>{
    dv.innerHTML=valor.value;
    let a=parseInt(valor.value)
    dv.innerHTML=a;
    cajita.style.width=a+"px";
    cajita.style.height=a+"px";
    
}