class Fila{
    constructor(longitud){
        this.longitud = longitud;
        this.style = 'display: flex;'
        this.columna= []
        this.interfaz = document.createElement('div')
    }

    
    get_style(){
        return this.style
    }
    get_longitud(){
        return this.longitud
    }
    get_columna(){
        return this.columna
    }
    get_interfaz(){
        return this.interfaz
    }

    set_longitud(nueva_longitud){
        this.longitud = nueva_longitud
    }
    set_columna(columna) {
        this.columna = columna
    }
    set_interfaz(interfaz) {
        this.interfaz = interfaz
    }
    actualizacionDeFila(){
        let nuevaFila = document.createElement("div")
        nuevaFila.className = "fila"
        nuevaFila.style.cssText = "display:flex"
        for(let limiteColumnas = 0; limiteColumnas < this.get_longitud(); limiteColumnas++){
            nuevaFila.appendChild(this.get_columna()[limiteColumnas].creacionDeCelula())
        }
        this.set_interfaz(nuevaFila)
        return this.get_interfaz()
    }
    addCelula(){
        this.get_interfaz().className = "fila"
        this.get_interfaz().style.cssText = "display:flex"
        for(let j = 0; j < this.get_longitud();j++){
            let celula = new Celula(false)
            this.get_columna().push(celula)
            this.get_interfaz().appendChild(this.get_columna()[j].creacionDeCelula())
        }
        return this.get_interfaz()
    }
}