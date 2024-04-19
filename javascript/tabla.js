let input=document.querySelector("#fila");
let columna=document.querySelector("#columnas")
let tabla=document.querySelector("#tabla")
let vfil=document.querySelector("#vfil")
let vcol=document.querySelector("#vcol")

input.oninput=()=> ta()
columna.oninput=()=> ta()

const ta=()=>{
    let n=parseInt(input.value);
    let a=parseInt(columna.value);
     vfil.innerHTML=n
     vcol.innerHTML=a
    var res=n*a
    let table="<table class='table' border>";
    for(i=1;i<=n;i++){
        table+="<tr>"
        for(j=1;j<=a;j++){
            table+="<td>"+res
            res--
            table+="</td>"
        }
        
        table+="</tr>"
    }
    table+="</table>";
    tabla.innerHTML=table;
}
