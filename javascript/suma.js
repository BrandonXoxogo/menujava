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