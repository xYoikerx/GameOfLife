class Mapa{
    constructor(numeroDeFilas,numeroDeColumnas){
        this.numeroDeFilas = numeroDeFilas;
        this.numeroDeColumnas = numeroDeColumnas;
        this.interfaz = document.createElement("div");
        this.listaDeFilas = []
        this.listaDeFilasCopia = []
        this.contadorX = 0
    }

    //getters

    get_numeroDeFilas(){
        return this.numeroDeFilas
    }
    get_interfaz(){
        return this.interfaz
    }
    get_numeroDeColumnas(){
        return this.numeroDeColumnas
    }
    get_listaDeFilas(){
        return this.listaDeFilas
    }
    get_listaDeFilasCopia(){
        return this.listaDeFilasCopia
    }


    //setters

    set_numeroDeFilas(numeroDeFilas){
        this.numeroDeFilas = numeroDeFilas
    }
    set_interfaz(mapa){
        this.interfaz = mapa
    }
    set_numeroDeFilasMapa(numeroDeColumnas){
        this.numeroDeColumnas = numeroDeColumnas
    }
    set_listaDeFilas(listaDeFilas){
        this.listaDeFilas = listaDeFilas
    }
    set_listaDeFilasCopia(){
        this.listaDeFilasCopia = this.listaDeFilas
    }
    //añadir fila
    creacionDeMapa(){
        this.get_interfaz().className = "mapa"
        for(let limiteDeFilas = 0 ; limiteDeFilas < this.get_numeroDeFilas(); limiteDeFilas++){
            let fila = new Fila(this.get_numeroDeColumnas())
            this.get_listaDeFilas().push(fila)
            this.get_interfaz().appendChild(this.get_listaDeFilas()[limiteDeFilas].addCelula())
            
        }
        return this.get_interfaz()
    }


    recorrerAlrededores(i,j){
            let arribaIzquierda = [(i-1+this.get_numeroDeFilas())%this.get_numeroDeFilas(), (j-1+this.get_numeroDeColumnas())%this.get_numeroDeColumnas()]
            //Arriba Centro 
            let arribaCentro = [(i-1+this.get_numeroDeFilas())%this.get_numeroDeFilas(), (j+this.get_numeroDeColumnas())%this.get_numeroDeColumnas()]
            //Arriba derecha
            let arribaDerecha = [(i-1+this.get_numeroDeFilas())%this.get_numeroDeFilas(), (j+1+this.get_numeroDeColumnas())%this.get_numeroDeColumnas()]

            //Izquierda
            let izquierda = [(i+this.get_numeroDeFilas())%this.get_numeroDeFilas(), (j-1+this.get_numeroDeColumnas())%this.get_numeroDeColumnas()]
            //Derecha 
            let derecha = [(i+this.get_numeroDeFilas())%this.get_numeroDeFilas(),(j+1+this.get_numeroDeColumnas())%this.get_numeroDeColumnas()]

            //AbajoIzquierda
            let abajoIzquierda = [(i+1+this.get_numeroDeFilas())%this.get_numeroDeFilas(),(j-1+this.get_numeroDeColumnas())%this.get_numeroDeColumnas()]
            //AbajoCentro
            let abajoCentro = [(i+1+this.get_numeroDeFilas())%this.get_numeroDeFilas(),(j+this.get_numeroDeColumnas())%this.get_numeroDeColumnas()]
            //AbajoDerecha
            let abajoDerecha = [(i+1+this.get_numeroDeFilas())%this.get_numeroDeFilas(),(j+1+this.get_numeroDeColumnas())%this.get_numeroDeColumnas()]
            let alrededores = [arribaIzquierda,arribaCentro,arribaDerecha,izquierda,derecha,abajoIzquierda,abajoCentro,abajoDerecha]
            let contador = 0
            for(let iniciador = 0; iniciador<alrededores.length; iniciador++){
                if(this.get_listaDeFilas()[alrededores[iniciador][0]].get_columna()[alrededores[iniciador][1]].get_estado()==true){
                    contador = contador + 1
                }
            }
            return contador
    }
    cambioDeEstado(){
        for(var x = 0; x < this.get_numeroDeFilas();x++){
            for(var y = 0; y < this.get_numeroDeColumnas();y++){
                let contador = this.recorrerAlrededores(x, y)
                if(contador < 2 && this.get_listaDeFilas()[x].get_columna()[y].get_estado() == true){
                    this.get_listaDeFilas()[x].get_columna()[y].set_nuevoEstado(false)
                }
                else if(contador > 3 && this.get_listaDeFilas()[x].get_columna()[y].get_estado() == true){
                    this.get_listaDeFilas()[x].get_columna()[y].set_nuevoEstado(false)
                }
                else if((contador == 3 || contador == 2) && this.get_listaDeFilas()[x].get_columna()[y].get_estado() == true){
                    this.get_listaDeFilas()[x].get_columna()[y].set_nuevoEstado(true)
                }
                else if(contador == 3 && this.get_listaDeFilas()[x].get_columna()[y].get_estado() == false){
                    this.get_listaDeFilas()[x].get_columna()[y].set_nuevoEstado(true)
                }
            }
        }
        for(var x = 0; x < this.get_numeroDeFilas();x++){
            for(var y = 0; y < this.get_numeroDeColumnas();y++){
                this.get_listaDeFilas()[x].get_columna()[y].set_estado(this.get_listaDeFilas()[x].get_columna()[y].get_nuevoEstado())
            }
        }
    }
}