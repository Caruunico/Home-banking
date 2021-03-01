//Declaración de variables

nombreUsuario = "Nicolas Caruso";
saldoCuenta = 45000;
limiteExtraccion = 10000;


//Variables creadas por mi

var s1 = ["Agua", 350];
var s2 = ["Luz", 425];
var s3 = ["Internet", 210];
var s4 = ["Telefono", 570];

var cuenta1 = ["Amigo1", "1234567"];
var cuenta2 = ["Amigo2", "7654321"];

var claveSeguridad = "1234";


//Ejecución de las funciones que actualizan los valores de las variables en el HTML.
window.onload = function() {
    iniciarSesion();
    cargarNombreEnPantalla();   
    actualizarSaldoEnPantalla();
    actualizarLimiteEnPantalla();
}

//Funciones creadas por mi
function sumarACuenta (monto){
    //validar que sea numero e importe valido en otra funcion
    saldoAnterior = saldoCuenta;
    saldoCuenta = saldoCuenta + monto;
}
function restarACuenta (monto){
    saldoAnterior = saldoCuenta;
    saldoCuenta = saldoCuenta - monto;
}
function alertDeposito(monto, saldoCuenta, saldoAnterior){
    monto = parseFloat(monto);
    alert("Deposito de $:"+ monto + "\nSaldo cuenta $:" + saldoCuenta + "\nSaldo anterior $:" + saldoAnterior);
}
function alertExtraccion(monto, saldoCuenta, saldoAnterior){
    monto = parseFloat(monto);
    alert("Extraccion de $:"+ monto + "\nSaldo cuenta $:" + saldoCuenta + "\nSaldo anterior $:" + saldoAnterior);
}
function cambiarLimite(monto){
    if(monto === null){
        return limiteAnterior;
    }
    limiteAnterior = limiteExtraccion;
    limiteExtraccion = monto;
    monto = parseFloat(monto);
    alert("Nuevo limite de extraccion:" +" "+ monto);
}
//valida el ingreso de números negativos
function numeroNegativo(monto){
    if(monto >= 0){
        return true;
    } alert("Ingrese un número válido");
        return false;

    }
//valida que se ingresen multiplos de 100
function billetes100(monto){
    if( monto%100 == 0){     
        return true;
    } else {
        alert("El cajero solo entrega billetes de 100");
        return false;
        }
    }
//verifica que haya saldo disponible
function saldoDisponible(monto){
    if(monto < saldoCuenta){
        return true;
    }else{
        alert("No hay suficiente dinero");
        return false;
    }
}
//valida que lo que se ingrese sean números
function validaValoresNumericos(monto) {
    monto = Number(monto);
    if (!isNaN(monto)) {
        return true;
    } else {
        alert("Ingrese un valor válido");
        return false;

    }
}
//verifica que el monto no supere al limite
function limiteDisponible(monto){
    if(monto <= limiteExtraccion){
        return true;
    }else{
        alert("El monto a extraer supera el limite diario");
        return false;
    }
}



//Funciones que tenes que completar
function cambiarLimiteDeExtraccion() {
        var monto = prompt("Ingrese el nuevo limite de extraccion");
        if(validaValoresNumericos(monto) && numeroNegativo(monto) && billetes100(monto)){
            cambiarLimite(monto);
        actualizarLimiteEnPantalla();
}
}

function extraerDinero() {
    var monto = prompt("Ingrese monto que desea extraer");
    if( monto === ""){
        alert("Debe ingresar un monto a extraer");
        return false;
    }
    if(validaValoresNumericos(monto) && saldoDisponible(monto) && numeroNegativo(monto) && billetes100(monto) && limiteDisponible(monto)){
        saldoAnterior = saldoCuenta;
        restarACuenta(monto);
        actualizarSaldoEnPantalla();
        alertExtraccion(monto, saldoCuenta, saldoAnterior);

    }
}



function depositarDinero() {
    var monto = prompt("Ingrese monto a depositar");
    if( monto == ""){
        alert("Debe ingresar un monto a depositar");
        return false;
    }
        
    if(numeroNegativo(monto) && billetes100(monto)){
        saldoAnterior = saldoCuenta;
        monto = parseFloat(monto);
        sumarACuenta(monto);
        actualizarSaldoEnPantalla();
        alertDeposito(monto, saldoCuenta, saldoAnterior);
    
    }
}

function pagarServicio() {
    //variables que declare arriba s1, s2, s3, etc
    var servicio = prompt("Ingrese un servicio a pagar:" + "\n" + 
    "1-" + s1[0] + ":" + s1[1] + "\n" +
    "2-" + s2[0] + ":" + s2[1] + "\n" +
    "3-" + s3[0] + ":" + s3[1] + "\n" +
    "4-" + s4[0] + ":" + s4[1] + "\n" )

   switch (servicio) {
       case "1": 
            servicio = s1;
            break;
       case "2":
           servicio = s2;
            break;
       case "3":
           servicio = s3;
           break;
       case "4":
           servicio = s4;
            break;
       default:
           alert("Ingrese un servicio a pagar");
           break;
     }
     // asigno a la variable monto el valor de la variable servicio posicion 1
     monto = servicio[1];
     //compruebo que haya saldo suficiente, si es true, ejecuta las funciones, muestra el alert y actualiza
     if( monto > saldoCuenta){
         alert("No posee dinero suficiente");
         return false;
     }
     restarACuenta(monto);
     alert("Pagaste el siguiente servicio: " + servicio[0] + "." + "\n"
     + "Saldo anterior: $" + saldoAnterior + "\n"
     + "Dinero descontado: $" + servicio[1] + "\n"
     + "Saldo actual: $" + saldoCuenta);
     actualizarSaldoEnPantalla();
}

function transferirDinero() {
    var monto = prompt("Ingrese el monto que desea trasnferir");
    if(monto > saldoCuenta){
        alert("No posee esa cantidad de dinero");
        return false;
    }
    if (monto === ""){
        alert("Ingrese un monto");
        return true;
   }
   else if(monto < 0){
       alert("ingrese un monto válido");
       return false;
   }
    
    var numCuenta = prompt("Ingrese opcion: \n1-" + cuenta1[1] +" "+ "\n2-"+ cuenta2[1] );
        switch (numCuenta) {
            case "1": 
                numCuenta = cuenta1;
                break;
            case "2": 
                numCuenta = cuenta2;
                break;
            default:
                alert("Ingrese un número cuenta amiga");
                return false;
        }
        restarACuenta(monto);
        actualizarSaldoEnPantalla();
        alert("Se han transferido: $" + monto + "\n" + "Cuenta destino: " + numCuenta[1]);
    }

function iniciarSesion() {
    var usuario = prompt ("Ingrese su usuario:");
    var clave = prompt("Ingrese su clave:");

        if(usuario === nombreUsuario && clave === claveSeguridad){
            alert("Bienvenido/a" + " " + nombreUsuario + " " + ",ya puedes comenzar a operar");
            return true; 
        } else {
            saldoCuenta = 0;
            alert("Usuario y/o clave incorrecta");               
            return false;
    }    
}

//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}