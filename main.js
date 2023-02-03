alert("Bienvenidos a la calculadora de Promedios");
const usuarioAutorizado = "matias";
const contraseniaAutorizada = "1234";

let usuario = prompt("Ingrese su usuario");
let contrasenia = prompt("Ingrese su contraseña");

if(usuario === usuarioAutorizado && contrasenia === contraseniaAutorizada) {
    alert("Bienvenido " + usuario);

    let cantidadAlumnos = parseInt(prompt("Ingrese la cantidad de alumnos a calcular"));

    for(let i = 0; i < cantidadAlumnos; i++) {
        let nombreAlumno = prompt("Ingrese el nombre del alumno");
        let nota1 = parseInt(prompt("Ingrese la nota 1"));
        let nota2 = parseInt(prompt("Ingrese la nota 2"));
        let nota3 = parseInt(prompt("Ingrese la nota 3"));
        let promedio = calcularPromedio(nota1, nota2, nota3);
        alert("El promedio de " + nombreAlumno + " es " + promedio);

        let aprueba = apruebaAnio(promedio);

        if(aprueba) {
            alert(nombreAlumno + " aprueba el año");
        } else {
            alert(nombreAlumno + " no aprueba el año");
        }
    }
} else {
    alert("Usuario o contraseña incorrecta");
}

function calcularPromedio(nota1, nota2, nota3) {
    let promedio = (nota1 + nota2 + nota3) / 3;
    return promedio;
}

function apruebaAnio(promedio) {
    if(promedio >= 6) {
        return true;
    } else {
        return false;
    }
}