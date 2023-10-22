class Tetrimino {
    constructor(nombre = "Z"){
        this.nombre = nombre
        let tetriminoBase = tetriminosBase[nombre]
        this.color = tetriminoBase.color
        this.mapa = []

        for(const pmino of tetriminoBase.mapa){
            this.mapa.push(pmino.copy())
        }
        
    this.posicion = createVector(int(tablero.columnas /2),0)
    }

    moverDerecha(){
        this.posicion.x++
    }
    moverIzquierda(){
        this.posicion.x--
    }
    moverAbajo(){
        this.posicion.y++
    }

    get mapaTablero(){
            let retorno = []
            for(const pmino of this.mapa) {
                let copy = pmino.copy().add(this.posicion)
                retorno.push(tablero.coordenadas(copy.x, copy.y))
            }
            return retorno
    }
    /*
       procesamiento logico del dibujado del objeto
    */
    dibujar(){
    push()
    fill("red")

    for(const pmino of this.mapaTablero){
        rect(pmino.x, pmino.y, tablero.celda)
    }
    pop()
    }
}