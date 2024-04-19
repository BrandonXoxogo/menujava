let al=document.querySelector("#a")
let bl=document.querySelector("#b")
let cl=document.querySelector("#c")
let va=document.querySelector("#va")
let vb=document.querySelector("#vb")
let vc=document.querySelector("#vc")
let resul=document.querySelector("#resul")
let resul2=document.querySelector("#resul2")
let resul3=document.querySelector("#resul3")

al.oninput=()=> ta()
bl.oninput=()=> ta()
cl.oninput=()=> ta()
const ta=()=>{
    va.innerHTML=al.value
    vb.innerHTML=bl.value
    vc.innerHTML=cl.value
    let a=parseFloat(al.value)
    let b=parseFloat(bl.value)
    let c=parseFloat(cl.value)
    
    resul3.innerHTML=a+"x2+"+b+"x-"+c

    let det=b*b  -4*a*c
    
    let re1=(-b) + (Math.sqrt(det))
    let re2=(-b) - (Math.sqrt(det))
    let r1=re1/(2*a)
    let r2=re2/(2*a)

    if(det>0){
        resul.textContent=r1.toFixed(2);
        resul2.textContent=r2.toFixed(2);
     }else if(det==0){
        resul.textContent=r1.toFixed(2);
        resul2.innerHTML="no hay resultado"
     }else if(det<0){
        resul.innerHTML="no hay resultado"
        resul2.innerHTML="no hay resultado"
     }
}