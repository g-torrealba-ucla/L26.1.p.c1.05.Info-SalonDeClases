export default class Cl_salon {
    // =================================================================
    // SECCIÓN 2: CONSTRUCTOR
    // =================================================================
    constructor() {
        // =================================================================
        // SECCIÓN 1: ATRIBUTOS (ESTADO GLOBAL DEL PROCESO)
        // =================================================================
        // Para el promedio necesitamos un acumulador de notas
        this.acNotas = 0;
        // Para el promedio y para saber la cantidad total, necesitamos un contador
        this.cntEstudiantes = 0;
        // Para la mejor nota, necesitamos un atributo 'mayor'
        // Se inicializa en -Infinity para que cualquier nota real lo supere
        this.mayNota = -Infinity;
        // Inicialización implícita en la declaración
    }
    // =================================================================
    // SECCIÓN 3: MÉTODO PROCESADOR (EL CORAZÓN DE LA CLASE)
    // =================================================================
    procesarEstudiante(est) {
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
     */
    promedio() {
        if (this.cntEstudiantes === 0) {
            return 0;
        }
        return this.acNotas / this.cntEstudiantes;
    }
    /**
     * Devuelve la mejor nota encontrada.
     * @returns number
     */
    mejorNota() {
        return this.mayNota;
    }
    /**
     * Devuelve la cantidad total de estudiantes procesados.
     * @returns number
     */
    cantidadEstudiantes() {
        return this.cntEstudiantes;
    }
}
