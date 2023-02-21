class Cliente {
    constructor(nombre, apellido, dni, saldo) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.saldo = saldo;
    }
}

const clienteMatias = new Cliente("Matias", "Graziano", 65842001, 10000);
const clienteChiara = new Cliente("Chiara", "Mossi", 42351684, 12000);
const clienteFranco = new Cliente("Franco", "Festa", 97542321, 15000);
const clienteMauro = new Cliente("Mauro", "Pederzoli", 52345687, 20000);
const clienteAgustin = new Cliente("Agustin", "Clifford", 82356941, 25000);

const clientesBanco = [clienteMatias, clienteChiara, clienteFranco, clienteMauro, clienteAgustin];

console.log(clientesBanco);

function menu() {
    alert("Bienvenido a Rosario Bank")
    let opcion = parseInt(prompt("Ingrese una opción: 1- Alta de Cliente 2- Baja de cliente 3- Modificación de Cliente 4- Consulta de Cliente 5- Salir)"));
    return opcion;
}

function altaCliente() {
    let nombre = prompt("Ingrese el nombre del cliente: ");
    let apellido = prompt("Ingrese el apellido del cliente: ");
    let dni = parseInt(prompt("Ingrese el DNI del cliente: "));
    let saldo = parseInt(prompt("Ingrese el saldo del cliente: "))
    let cliente = new Cliente(nombre, apellido, dni, saldo);
    clientesBanco.push(cliente)
    console.log(clientesBanco);
}

function bajaCliente() {
    let dni = parseInt(prompt("Ingrese el DNI del cliente: "));
    let cliente = clientesBanco.find(cliente => cliente.dni === dni);
    let indice = clientesBanco.indexOf(cliente);
    clientesBanco.splice(indice, 1);
    console.log(clientesBanco);
}

function modificacionCliente() {
    let dni = parseInt(prompt("Ingrese el DNI del cliente: "));
    let cliente = clientesBanco.find(cliente => cliente.dni === dni);
    let indice = clientesBanco.indexOf(cliente);

    let nombre = prompt("Ingrese el nombre del cliente: ");
    let apellido = prompt("Ingrese el apellido del cliente: ");
    let saldo = parseInt(prompt("Ingrese el saldo del cliente: "));
    let clienteModificado = new Cliente (nombre, apellido, dni, saldo);

    clientesBanco.splice(indice, 1, clienteModificado);
    console.log(clientesBanco);
}

function consultaCliente() {
    let dni = parseInt(prompt("Ingrese el DNI del cliente: "));
    let cliente = clientesBanco.find(cliente => cliente.dni === dni);
    console.log(cliente);
}

function salir() {
    alert("Gracias, vuelva pronto.");
}


let opcion = menu();

switch(opcion) {
    case 1:
        altaCliente();
        break;
    case 2:
        bajaCliente();
        break;
    case 3:
        modificacionCliente();
        break;
    case 4:
        consultaCliente();
        break;
    case 5:
        salir();
        break;
    default:
        alert("Opción incorrecta!");
        break;
}
