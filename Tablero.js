        // Definicion del tablero

        class Tablero {
            constructor(){
                this.columnas = 10
                this.filas = 20
                this.celda = 25

                this.ancho = this.columnas * this.celda
                this.alto = this.filas * this.celda

                this.posicion = createVector(MARGEN_TABLERO,MARGEN_TABLERO)

                }

                coordenadas (x,y) {
                    return createVector(x,y).mult(this.celda).add(this.posicion)

            }

            //dibujado del tablero

            dibujar(){
                push()
                noStroke()
                for (let columna = 0; columna < this.columnas; columna++){
                    for (let fila = 0; fila < this.filas; fila++){
                        if((columna+fila)%2==0){
                            fill("black")

                        } else {
                            fill("#003")
                        }
                        let c = this.coordenadas(columna, fila)
                        rect(c.x, c.y, this.celda)
                    }
                }
                pop()
            }
        }