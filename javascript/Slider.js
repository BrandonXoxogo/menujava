let valor=document.querySelector("#valor");
let dv=document.querySelector("#value");
let cajita=document.querySelector("#cajita")
valor.oninput=()=>{
    dv.innerHTML=valor.value;
    let n=valor.value;
    if (n<26) {
        dv.style.color="pink"
        
    } else if (n<51) {
        dv.style.color="blue"
    }else if(n<76){
        dv.style.color="orange"
    }else if(n<101){
        dv.style.color="black"
    }

   
    
}