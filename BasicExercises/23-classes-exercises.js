/*
Clase 6 en vídeo | 15/08/2024
Clases (continuación) y manejo de errores
https://www.youtube.com/live/8p6SLAIgwZI?si=MS9o7qIhezx9NTQX&t=902
*/

// 1. Crea una clase que reciba dos propiedades

class Plane {
    #serie
    #color
    constructor(serie, color) {
        this.#serie = serie
        this.#color = color
    }
}

let planeInstance = new Plane("B2", "Yellow")
console.log(planeInstance)

// 2. Añade un método a la clase que utilice las propiedades

class PlaneI {
    #serie
    #color
    constructor(serie, color) {
        this.#serie = serie
        this.#color = color
    }

    /**
     *
     * @param {string} name Client name
     * @param {number} amount Cost of the ticket
     * @returns The reservation accepted
     */
    ticket(name, amount) {
        let ticket = ""
        if (amount <= 0) {
            throw new Error("Monto incorrecto")
        } else {
            ticket = "Reservation accepted \n" + "Name: " + name + "\nPlane: " + this.#serie + " " + this.#color
        }
        return ticket
    }
}

let avioneta = new PlaneI("P5060", "White")

console.log(avioneta.ticket("Yoandy Doble Herrera", 506))

// 3. Muestra los valores de las propiedades e invoca a la función

class PlaneII {
    #serie
    #color
    constructor(serie, color) {
        this.#serie = serie
        this.#color = color
    }

    /**
     * @returns Returns the plane serie
     */
    get serie() {
        return this.#serie
    }

    /**
     * @returns Returns the color of the plane
     */
    get color() {
        return this.#color
    }

    /** Void function serie
     * @function serie Set a plane serie
     */
    set serie(serie) {
        this.#serie = serie
    }

    /** Void function color
     * @function color Set a plane color
     */
    set color(color) {
        this.#color = color
    }

    /**
     *
     * @param {string} name Client name
     * @param {number} amount Cost of the ticket
     * @returns The reservation accepted
     */
    ticket(name, amount) {
        let ticket = ""
        if (amount <= 0) {
            throw new Error("Monto incorrecto")
        } else {
            ticket = "Reservation accepted \n" + "Name: " + name + "\nPlane: " + this.#serie + " " + this.#color
        }
        return ticket
    }
}

let boing757 = new PlaneII("BG757", "Brown")

console.log(`Property serie ${boing757.serie}`)
console.log(`Property color ${boing757.color}`)
console.log(`Function ticket ${boing757.ticket("Yerlanys Doble Herrera", 1999)}`)

boing757.serie = "IL65"
console.log(`Property serie ${boing757.serie}`)

// 4. Añade un método estático a la primera clase
/*Obtendrás error los métodos estáticos no se pueden agregar a clases con constructo */
class PlaneIII {
    /**
     *
     * @param {string} serie New serie value of the plane
     * @returns Returns the id of the plane
     */
    static idPlane(serie) {
        return "CU-" + serie
    }
}

// 5. Haz uso del método estático

console.log(PlaneIII.idPlane("PR"))

// 6. Crea una clase que haga uso de herencia

class carPlane extends PlaneII {
    drive() {
        console.log("Este hijo de la clase PlaneI rueda por la street")
    }
}

let micar = new carPlane("CPI123456", "Black")
micar.drive()

// 7. Crea una clase que haga uso de getters y setters

// 8. Modifica la clase con getters y setters para que use propiedades privadas

// 9. Utiliza los get y set y muestra sus valores

// 10. Sobrescribe un método de una clase que utilice herencia
