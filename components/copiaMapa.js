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
            let arribaIzquierda = [i-1, j-1]
            //Arriba Centro 
            let arribaCentro = [i-1, j]
            //Arriba derecha
            let arribaDerecha = [i-1, j+1]

            //Izquierda
            let izquierda = [i, j-1]
            //Derecha 
            let derecha = [i,j+1]

            //AbajoIzquierda
            let abajoIzquierda = [i+1,j-1]
            //AbajoCentro
            let abajoCentro = [i+1,j]
            //AbajoDerecha
            let abajoDerecha = [i+1,j+1]
            let alrededores = [arribaIzquierda,arribaCentro,arribaDerecha,izquierda,derecha,abajoIzquierda,abajoCentro,abajoDerecha]
            let alrededores_2  = []
            let contador = 0
            for(let i=0; i<alrededores.length; i++){
                if(alrededores[i][0] == -1 ){
                    delete(alrededores[i])
                }
                else if(alrededores[i][0] == this.get_numeroDeFilas()){
                    delete(alrededores[i])
                }
                else if(alrededores[i][1] == -1){
                    delete(alrededores[i])
                }
                
                else if(alrededores[i][1]== this.get_numeroDeColumnas()){
                    delete(alrededores[i])
                }
                else{
                    alrededores_2.push(alrededores[i])
                }
            }
            for(let iniciador = 0; iniciador<alrededores_2.length; iniciador++){
                if(this.get_listaDeFilas()[alrededores_2[iniciador][0]].get_columna()[alrededores_2[iniciador][1]].get_estado()==true){
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


