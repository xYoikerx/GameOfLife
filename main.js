let bandera = true
let mapa = new Mapa(40,120);
campoDelMapa = document.querySelector('.campoDeMapa');
campoDelMapa.appendChild(mapa.creacionDeMapa())
let fps = 10



let botonInicio = document.querySelector(".inicio")
let botonNext = document.querySelector(".next")
let botonLimpiar = document.querySelector(".clear-boton")
let contadorMensaje = document.querySelector(".contador")
let contador = 0
let clearTexto = document.querySelector(".clearTexto")
//imagenes de los botones

let imgPlay = document.querySelector(".play-boton")
let imgPause = document.querySelector(".pause-boton")

//Texto del boton de pausa e inicio

let playTexto = document.querySelector(".boton-text")

botonLimpiar.addEventListener("click",()=>{
    mapaImpreso =document.querySelector('.mapa');
    campoDelMapa.removeChild(mapaImpreso)
    mapa = new Mapa(40,120);
    campoDelMapa.appendChild(mapa.creacionDeMapa())
    contador = 0
    contadorMensaje.textContent = "numero de generacion: 0"
})


let intervalID;
botonInicio.addEventListener("click",()=>{
    if(bandera){
        intervalID  = setInterval(function(){mapa.cambioDeEstado();
            contador += 1
            contadorMensaje.textContent = "numero de generacion: "+contador
            console.log(contador)
        },1000/fps);
        bandera = false
        imgPlay.style.cssText = "display:none"
        imgPause.style.cssText = "display:inherit"
        playTexto.innerHTML = "Pause"
    }
    else{
        clearInterval(intervalID)
        bandera = true
        imgPlay.style.cssText = "display:inherit"
        imgPause.style.cssText = "display:none"
        playTexto.innerHTML = "Play"
    }
})
botonNext.addEventListener("click",()=>{
    mapa.cambioDeEstado()
    contador += 1
    contadorMensaje.textContent = "numero de generacion: "+contador
})



    

