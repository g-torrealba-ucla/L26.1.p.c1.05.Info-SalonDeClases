export default class Cl_estudiante {
  // 1. ESTADO ENCAPSULADO
  // Atributos privados inicializados para cumplir con TS Strict Mode
  private _nombre: string = "";
  private _nota: number = 0;

  // 2. CONSTRUCTOR: INICIALIZACIÓN SEGURA
  // Recibe los datos y delega a los setters para validación inicial
  constructor(nombre: string, nota: number) {
    this.nombre = nombre;
    this.nota = nota;
  }

  // 3. MÉTODOS DE ACCESO (GETTERS Y SETTERS)

  // Nombre
  set nombre(n: string) {
    this._nombre = n;
  }
  get nombre(): string {
    return this._nombre;
  }

  // Nota
  set nota(n: number) {
    // Coerción de tipo con Unary Plus (+) para asegurar que sea número
    this._nota = +n;
  }
  get nota(): number {
    return this._nota;
  }
}
