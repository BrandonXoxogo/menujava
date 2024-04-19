let input=document.querySelector("#fila");
let columna=document.querySelector("#columnas")
let tabla=document.querySelector("#tabla")
let vfil=document.querySelector("#vfil")
let vcol=document.querySelector("#vcol")
let color1=document.querySelector("#color1")
let color2=document.querySelector("#color2")

input.oninput=()=> ta()
columna.oninput=()=> ta()
color1.oninput=()=> ta()
color2.oninput=()=> ta ()

const ta=()=>{
    let n=parseInt(input.value);
    let a=parseInt(columna.value);

     vfil.innerHTML=n
     vcol.innerHTML=a
    var res=n*a
    let table="<table class='table' border>";
    let c1=color1.value
    let c2=color2.value

    for(i=1;i<=n;i++){
        table+="<tr>"
        for(j=1;j<=a;j++){
            if(i % 2 ===0){
                table+="<td style='background:"+c1+"'>"+res
                res--
                table+="</td>"
            }else{
                table+="<td style='background:"+c2+"'>"+res
                res--
                table+="</td>"
            }
        }
        
        table+="</tr>"
    }
    table+="</table>";
    tabla.innerHTML=table;
}
