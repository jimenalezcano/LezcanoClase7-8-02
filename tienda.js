
//Traigo datos del usuario obtenidos en un formulario de html 
let datos = document.getElementById("validationCustom01").value;

let validationCustom02 = document.getElementById("validationCustom02").value;

let dniUsuario01 = document.getElementById("validationCustomDNI").value;

let nombreDeUsuario01 = document.getElementById("validationCustomUser").value;

let emailUsuario01 = document.getElementById("validationCustomEmail").value;

let barUsuario01 = document.getElementById("validationCustomBar").value;

let pagoUsuario01 = document.getElementById("validationCustomPago").value;

//Otro prompt para preguntarle ubicacion y luego condicional
let ubicacion = prompt("De que zona sos?")


if (ubicacion == ("Palermo") || (ubicacion== "Recoleta") || (ubicacion == "Almagro") || (ubicacion == "Caballito")){
    alert("Realizamos envios en tu zona! Podes hacer tu pedido online")
}else{
   alert("Lo siento! No realizamos envios hasta tu zona,de todas maneras, podes ver los productos y acercarte a la sucursal")
}

//Creo constructor para objeto usuario
class Usuario {
    constructor(nombreUser, apellido, documento, email, direccion, pago) {
        this.nombreUser = nombreUser; 
        this.apellido = apellido;
        this.documento = documento;
        this.email = email;
        this.direccion = direccion;
        this.pago = pago;

}};


//Creo cliente con molde Usuario
const cliente = new Usuario(
      prompt("Elija su nombre de Usuario?"),
      prompt("Cual es su apellido?"),
      prompt("Cual es su DNI?"),
      prompt("Cual es su email?"),
      prompt("Cual es su direccion?"),
      prompt("Elija metodo de pago: MercadoPago/debito/efectivo"),
);


function registrarUser(cliente) {
    var regCliente = JSON.stringify(cliente);
    localStorage.setItem(cliente, nombre, regCliente);
    console.log("Se guardo el cliente en LocalStorage")
    console.log("Se registraron los siguientes datos del cliente" + regCliente)
    //Uso los datos del usuario en un alert
     let bienvenida = alert("Bienvenido/a a FARMA WEB " + datos + " " + validationCustom02 + "!")

}

registrarUser(cliente);

// Obtengo informacion del parrafo con id: presentacion de html

console.log(document.getElementById("presentacion"))