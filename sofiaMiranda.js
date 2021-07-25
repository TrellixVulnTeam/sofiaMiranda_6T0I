

class Producto{

    constructor(id, nombre, categoria, tamaño, gramaje, cantidad, precio){
        this.id= id;
        this.nombre= nombre;
        this.categoria = categoria;
        this.tamaño = tamaño; 
        this.gramaje = gramaje;
        this.cantidad = cantidad;
        this.precio = precio;
      }
    

      solicitarProducto(){

		if(this.categoria != "" && this.gramaje != "" && this.tamaño != "" && this.cantidad){
			
			console.log("Lo que usted esta buscando es " + this.categoria + " " + "del tamaño de " + this.tamaño + ",de gramaje " + this.gramaje + "y la cantidad de " + this.cantidad )

		}
		
	}

}
    let producto = new Producto({categoria:"", tamaño:"", gramaje:"", cantidad:""})
    producto.categoria=prompt("¿Quieres una lamina o pegotines?")
    producto.tamaño=prompt("¿De que tamaños?")
    producto.gramaje=prompt("¿De que gramaje?")
    producto.cantidad=prompt("¿Qué cantidad?")
    console.log(producto.solicitarProducto())
    


    const productos = [{ nombre:"lamina 1", id: 101, categoria: "lamina", tamaño: "a4", gramaje: 90, cantidad: 1, precio: 80 },
                        { nombre:"lamina 2",id: 102, categoria: "lamina", tamaño: "a3", gramaje: 120, cantidad: 1, precio: 90 },
                        { nombre:"lamina 3",id: 103, categoria: "lamina", tamaño: "90 x 60", gramaje: 120, cantidad: 1, precio: 200}];



const baratos = productos.filter(categoria => categoria.precio < 100); 
console.log(baratos);


let laminaEscalera = new Producto ( 'lamina 1', '101', 'lamina', 'a4' , '90 gramos', '1', '80'); 
let lamina2 = new Producto ( 'lamina 2', '102','lamina', 'a3' , '120 gramos', '1', '90'); 
let lamina3 = new Producto ('lamina 3', '103','lamina', '90x60' , '120 gramos', '1', '200'); 

console.log('Lo que esta disponible es:')
console.log('laminaEscalera => ', laminaEscalera);
console.log('lamina2 => ', lamina2);
console.log('lamina3 => ', lamina3);


for (const producto of productos) {
    let contenedor = document.createElement("div");
    contenedor.innerHTML = `<h3> ID: ${producto.id}</h3>
                            <p>  Producto: ${producto.nombre}</p>
                            <b> $ ${producto.precio}</b>`;
    document.body.appendChild(contenedor);
}




class Cliente {
    constructor(nombre, email, telefono, productosComprados) {
        this.nombre = nombre;
        this.email = email;
        this.telefono = telefono;
        this.productosComprados = productosComprados;
    };
};


const suma  = (a,b) => a + b;
const resta = (a,b) => a - b;

const envio   = x => x * 0.21;
let precioProducto  = 500;
let precioProducto1  = 200; 
let precioProducto2  = 300;  
let precioDescuento = 50;  

let nuevoPrecio = resta(suma(precioProducto, envio(precioProducto)), precioDescuento);
let nuevoPrecio1 = resta(suma(precioProducto1, envio(precioProducto1)), precioDescuento); 
let nuevoPrecio2 = resta(suma(precioProducto2, envio(precioProducto2)), precioDescuento); 
console.log(nuevoPrecio);
console.log(nuevoPrecio1);
console.log(nuevoPrecio2);



