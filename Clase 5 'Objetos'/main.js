/*
class Producto {
    constructor(code, nombre, categoria, precio, stock) {
        this.code = code
        this.nombre = nombre
        this.categoria = categoria
        this.precio = precio
        this.stock = stock
    }

    aumentarPrecio(porcentajeAumento) {
        this.precio *= porcentajeAumento
        this.precio = Math.ceil(this.precio)
    }

    aumentarStock(cantidadProductos) {
        this.stock += cantidadProductos
    }
}

const producto1 = new Producto('A123', 'Arros', 'Legumbre', 450, 20);

console.log(producto1);

producto1.aumentarPrecio(1.3);
producto1.aumentarStock(30);

console.log(producto1);
*/

class Animal {
    constructor(nombre, nombreCientifico, habitat) {
        this.nombre = nombre
        this.nombreCientifico = nombreCientifico
        this.habitat = habitat
    }

    duerme() {
        console.log('Estoy durmiendo');
    }

    comiendo() {
        console.log('Estoy comiendo');
    }
}

class Mamifero extends Animal {
    constructor(colorPelaje, nombre, nombreCientifico, habitat) {
        super(nombre, nombreCientifico, habitat)
        this.colorPelaje = colorPelaje
    }

    amamantar() {
        console.log('Estoy amamantando');
    }
}

class Reptil extends Animal {
    constructor(esVenenoso, nombre, nombreCientifico, habitat) {
        super(nombre, nombreCientifico, habitat)
        this.esVenenoso = esVenenoso
    }

    ponerHuevos() {
        console.log('Pongo huevos');
    }
}

const mamifero1 = new Mamifero('Marron', 'Caballo', 'Caballus', 'Campo');
console.log(mamifero1);
mamifero1.duerme();
mamifero1.comiendo();
mamifero1.amamantar();