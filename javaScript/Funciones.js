window.onscroll = myFunction;
var header = document.getElementById("menu")
var menu2 = document.getElementById("menu2")
var sticky = header.offsetTop;
function myFunction() {
    if (window.pageYOffset >= sticky) {
        header.style.position = "fixed";
        // menu2.style.position =" fixed";
        console.error("he entrado")
    } 
    }
    function burguer(x) {
    x.classList.toggle("change");
       }
var imagen= document.querySelector(".imagen_movimiento")
imagen.addEventListener("animationiteration",update,false)
var i=0;
    function update(e){
    imagen.style.backgroundImage = "url('img/concesionario/concesionario2.jpg')";
    i= i+ 1;
    if (i == 2){
        imagen.style.backgroundImage = "url('img/concesionario/concesionario3.jpg')";  
    }
    else if (i == 3){
        imagen.style.backgroundImage = "url('img/concesionario/concesionario4.jpg')"; 
    }
    else if (i == 4){
        imagen.style.backgroundImage = "url('img/concesionario/concesionario5.jpg')"; 
    }
    else if (i == 5){
        imagen.style.backgroundImage = "url('img/concesionario/concesionario6.jpg')"; 
    }
    else if (i == 6){
        imagen.style.backgroundImage = "url('img/concesionario/concesionario7.jpg')"; 
    }
    else if (i == 7){
        imagen.style.backgroundImage = "url('img/concesionario/concesionario8.jpg')"; 
    }
    else if (i == 8){
        imagen.style.backgroundImage = "url('img/concesionario/concesionario9.jpg')"; 
    }
    else if (i == 9){
        imagen.style.backgroundImage = "url('img/concesionario/concesionario10.jpg')"; 
    }
    else if (i == 10){
        imagen.style.backgroundImage = "url('img/concesionario/concesionario11.jpg')"; 
    }
    else if (i == 11){
        imagen.style.backgroundImage = "url('img/concesionario/concesionario12.jpeg')"; 
    }
    else if (i == 12){
        i = 0 ;
        imagen.style.backgroundImage = "url('img/concesionario/concesionario1.jpg')"; 
    }
    
    console.warn(i);
}          

