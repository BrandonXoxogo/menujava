console.log("Hola Mundo");

//alert("Hola mundo");
const suma=()=>{
    let n1=parseInt(document.querySelector("#num1").value);
    let n2=parseInt(document.querySelector("#num2").value);
    let suma=n1+n2;
    
    if(isNaN(suma)){
        res.innerHTML="<h1>0</h1>";
    }else{
        res.innerHTML="<h1>"+suma+"</h1>"
    }
}
const resta=()=>{
    let n1=parseInt(document.querySelector("#num1").value);
    let n2=parseInt(document.querySelector("#num2").value);
    let resta=n1-n2;
    if(isNaN(resta)){
        res.innerHTML="<h1>0</h1>";
    }else{
        res.innerHTML="<h1>"+resta+"</h1>"
    }
}
const multiplicacion=()=>{
    let n1=parseInt(document.querySelector("#num1").value);
    let n2=parseInt(document.querySelector("#num2").value);
    let multiplicacion=n1*n2;
    if(isNaN(multiplicacion)){
        res.innerHTML="<h1>0</h1>";
    }else{
        res.innerHTML="<h1>"+multiplicacion+"</h1>"
    }
}
const division=()=>{
    
    let n1=parseInt(document.querySelector("#num1").value);
    let n2=parseInt(document.querySelector("#num2").value);
    let division=n1/n2;
    if(isNaN(division)){
        res.innerHTML="<h1>0</h1>";
    }else{
        res.innerHTML="<h1>"+division+"</h1>"
    }
}
const residuo=()=>{
    let n1=parseInt(document.querySelector("#num1").value);
    let n2=parseInt(document.querySelector("#num2").value);
    let residuo=n1%n2;
    if(isNaN(residuo)){
        res.innerHTML="<h1>0</h1>";
    }else{
        res.innerHTML="<h1>"+residuo+"</h1>"
    }
}
const potencia=()=>{
    let n1=parseInt(document.querySelector("#num1").value);
    let n2=parseInt(document.querySelector("#num2").value);
    let potencia=Math.pow(n1,n2)
    if(isNaN(potencia)){
        res.innerHTML="<h1>0</h1>";
    }else{
        res.innerHTML="<h1>"+potencia+"</h1>"
    }
}
const borrar=()=>{
    let n1=parseInt(document.querySelector("#num1").value="");
    let n2=parseInt(document.querySelector("#num2").value="");
    let =n1+n2;
    document.querySelector("#res").innerHTML=""
}
