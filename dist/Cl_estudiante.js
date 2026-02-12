export default class Cl_estudiante {
    // 2. CONSTRUCTOR: INICIALIZACIÓN SEGURA
    // Recibe los datos y delega a los setters para validación inicial
    constructor(nombre, nota) {
        // 1. ESTADO ENCAPSULADO
        // Atributos privados inicializados para cumplir con TS Strict Mode
        this._nombre = "";
        this._nota = 0;
        this.nombre = nombre;
        this.nota = nota;
    }
    // 3. MÉTODOS DE ACCESO (GETTERS Y SETTERS)
    // Nombre
    set nombre(n) {
        this._nombre = n;
    }
    get nombre() {
        return this._nombre;
    }
    // Nota
    set nota(n) {
        // Coerción de tipo con Unary Plus (+) para asegurar que sea número
        this._nota = +n;
    }
    get nota() {
        return this._nota;
    }
}
