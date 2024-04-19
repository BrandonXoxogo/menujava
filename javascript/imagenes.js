let spinner=document.querySelector("#resul");
var vuelta=document.querySelector(".back");
document.querySelector("#btn1").onclick=()=>{
    spinner.innerHTML="<img src='load-32_256.gif'>";
    vuelta.innerHTML=""
    setTimeout(()=>{
            vuelta.innerHTML="<p>Finalmente, los seis Sabios junto con Zelda utilizan sus poderes para sellar al Rey de las Tinieblas. Con la paz restaurada en Hyrule, Zelda devuelve a Link a su propio tiempo con la Ocarina del Tiempo. El pueblo de Hyrule celebra su liberación, mientras que Link devuelve la Espada Maestra al Pedestal del Tiempo.</p>"
            spinner.innerHTML="<img src='img/descarga (1).webp' width='300px' height='300px'>"
    },2000);
}
document.querySelector("#btn2").onclick=()=>{
    spinner.innerHTML="<img src='load-32_256.gif'>";
    setTimeout(()=>{
            vuelta.innerHTML="<p>El tulipán es un símbolo de amor sincero. Es una flor increíblemente romántica que al regalarla expresas enamoramiento, pasión, amor incondicional, amor puro, etc. Su significado varía en los tonos de color de éste.</p>"
            spinner.innerHTML="<img src='img/descarga.webp' width='500px' height='400px'>"
    },2000);

}
document.querySelector("#btn3").onclick=()=>{
    spinner.innerHTML="<img src='load-32_256.gif'>";
    setTimeout(()=>{

            vuelta.innerHTML="<p>Los gatos son curiosos por naturaleza y les encanta explorar. Son animales muy independientes y no les gusta depender de sus dueños. Son animales domésticos que necesitan hacer mucho ejercicio al día, es por ello, que son cazadores por naturaleza y pueden llegar a jugar durante muchas horas.</p>"
            spinner.innerHTML="<img src='img/images.jpeg' width='500px' height='400px'>"

    },2000);

}
document.querySelector("#btn4").onclick=()=>{
    spinner.innerHTML="<img src='load-32_256.gif'>";
    setTimeout(()=>{
            vuelta.innerHTML="<p>Jujutsu Kaisen (呪術廻戦 Jujutsu Kaisen?) también conocido como Sorcery Fight (lit. Contiendas de Brujería/Guerra de Hechiceros) es una serie manga escrita e ilustrada por Gege Akutami. Una serie anime fue anunciada en la edición número 52 de Weekly Shōnen Jump, el 25 de noviembre de 2019. Dicha primera temporada fue emitida a partir del 02 de octubre de 2020[1], y finalizó el 26 de marzo del 2021 con un total de 24 episodios.</p>"
            spinner.innerHTML="<img src='img/JJK-header-mobile2.webp' width='500px' height='400px'>"
    },2000);

}

