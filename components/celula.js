class Celula{
    constructor(estado){
        this.estado = estado;
        this.interfaz = document.createElement("div");
        this.nuevoEstado = this.estado;
        this.estilosVivo = "height:15px;width:15px;background-color:yellow;border:#79b5ff solid 1px"
        this.estilosMuerto = "height:15px;width:15px;background-color:rgb(12,32,55);border:rgb(0,16,39) solid 1px"
    }
    get_nuevoEstado(){
        return this.nuevoEstado;
    }
    get_interfaz(){
        return this.interfaz;
    }
    get_estado(){
        return this.estado;
    }
    get_estilosVivo(){
        return this.estilosVivo;
    }
    get_estilosMuerto(){
        return this.estilosMuerto;
    }


    set_estado(new_estado){
        this.estado = new_estado
        if(new_estado == true){
            this.get_interfaz().style.cssText = this.get_estilosVivo()
        }
        else{
            this.get_interfaz().style.cssText = this.get_estilosMuerto()
        }
    }
    set_interfaz(new_interfaz){
        this.interfaz = new_interfaz
    }
    set_nuevoEstado(new_nuevoEstado){
        this.nuevoEstado = new_nuevoEstado
    }
    creacionDeCelula(){
        this.get_interfaz().className="celula"
        this.get_interfaz().style.cssText = this.get_estilosMuerto()
        this.get_interfaz().addEventListener("click",()=>{
            if(this.get_estado()==true){
                this.set_estado(false)
                this.get_interfaz().style.cssText = this.get_estilosMuerto()
            }
            else{
                this.set_estado(true)
                this.get_interfaz().style.cssText = this.get_estilosVivo()
            }
        })
        return this.get_interfaz()
    }

}
