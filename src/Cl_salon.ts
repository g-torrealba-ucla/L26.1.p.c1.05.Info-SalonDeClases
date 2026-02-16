import Cl_estudiante from "./Cl_estudiante.js";

export default class Cl_salon {
  // =================================================================
  // SECCIÓN 1: ATRIBUTOS (ESTADO GLOBAL DEL PROCESO)
  // =================================================================

  // Para el promedio necesitamos un acumulador de notas
  private acNotas: number = 0;

  // Para el promedio y para saber la cantidad total, necesitamos un contador
  private cntEstudiantes: number = 0;

  // Para la mejor nota, necesitamos un atributo 'mayor'
  // Se inicializa en -Infinity para que cualquier nota real lo supere
  private mayNota: number = -Infinity;

  // =================================================================
  // SECCIÓN 2: CONSTRUCTOR
  // =================================================================
  constructor() {
    // Inicialización implícita en la declaración
  }

  // =================================================================
  // SECCIÓN 3: MÉTODO PROCESADOR (EL CORAZÓN DE LA CLASE)
  // =================================================================
  procesarEstudiante(est: Cl_estudiante): void {
    // 1. ACUMULAR (para el promedio)
    this.acNotas += est.nota;

    // 2. CONTAR (cantidad de estudiantes)
    this.cntEstudiantes++;

    // 3. DETERMINAR MAYOR (mejor nota)
    if (est.nota > this.mayNota) {
      this.mayNota = est.nota;
    }
  }

  // =================================================================
  // SECCIÓN 4: MÉTODOS DE REPORTE (SALIDAS)
  // =================================================================

  /**
   * Calcula la nota promedio.
   * @returns number
   * @note La nota promedio se calcula como la suma de todas las notas
   *       dividida entre la cantidad total de estudiantes.
   * @note Si no hay estudiantes, se devuelve 0.
   */
  promedio(): number {
    if (this.cntEstudiantes === 0) {
      return 0;
    }
    return this.acNotas / this.cntEstudiantes;
  }

  /**
   * Devuelve la mejor nota encontrada.
   * @returns number
   */
  mejorNota(): number {
    return this.mayNota;
  }

  /**
   * Devuelve la cantidad total de estudiantes procesados.
   * @returns number
   */
  cantidadEstudiantes(): number {
    return this.cntEstudiantes;
  }
}
