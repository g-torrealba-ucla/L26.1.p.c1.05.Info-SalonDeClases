import Cl_estudiante from "./Cl_estudiante.js";
import Cl_salon from "./Cl_salon.js";
// Instanciamos la procesadora
const salon = new Cl_salon();
// Creamos los estudiantes según tu ejemplo
const est1 = new Cl_estudiante("Carlos", 18);
const est2 = new Cl_estudiante("Pedro", 15);
const est3 = new Cl_estudiante("Luis", 20);
const est4 = new Cl_estudiante("Maria", 12);
const est5 = new Cl_estudiante("Ana", 19);
// Procesamos a cada uno
salon.procesarEstudiante(est1);
salon.procesarEstudiante(est2);
salon.procesarEstudiante(est3);
salon.procesarEstudiante(est4);
salon.procesarEstudiante(est5);
// Salida
let body = document.getElementById("body");
if (body) {
    body.innerHTML = `La nota promedio es ${salon.promedio()}`;
    body.innerHTML += `<br>La mejor nota es ${salon.mejorNota()}`;
    body.innerHTML += `<br>La cantidad de estudiantes es ${salon.cantidadEstudiantes()}`;
}
