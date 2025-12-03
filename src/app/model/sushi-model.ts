import { IngredienteModel } from "./ingrediente-model";

export class SushiModel {
    // Atributos
    private ingredientes!: IngredienteModel[];
    private precioTotal!: number;
    private tiempoPrepTotal!: number;

    // Constructor
    constructor(ingredientes: IngredienteModel[]) {
        this.setIngredientes(ingredientes);
    }

    // Metodos
    public calcularPrecio(): number {
        // Variable final
        let precio: number = 0;

        // Por cada ingrediente, sumamos su precio
        this.getIngredientes().forEach(ingrediente => {
            precio += ingrediente.getPrecio();
        });

        // Añadimos el precio al sushi
        this.setPrecioTotal(precio);

        // Devolvemos el precio
        return precio;
    }

    public calcularTiempoPrep(): number {
        // Variable final
        let tiempoPrep: number = 0;

        // Por cada ingrediente, sumamos su tiempo de preparación
        this.getIngredientes().forEach(ingrediente => {
            tiempoPrep += ingrediente.getTiempoPrep();
        });

        // Añadimos el precio al sushi
        this.setTiempoPrepTotal(tiempoPrep);

        // Devolvemos el precio
        return tiempoPrep;
    }

    // Getters & Setters
    public getIngredientes(): IngredienteModel[] {
        return this.ingredientes;
    }
    public setIngredientes(value: IngredienteModel[]) {
        this.ingredientes = value;
    }

    public getPrecioTotal(): number {
        return this.precioTotal;
    }
    public setPrecioTotal(value: number) {
        this.precioTotal = value;
    }

    public getTiempoPrepTotal(): number {
      return this.tiempoPrepTotal;
    }
    public setTiempoPrepTotal(value: number) {
      this.tiempoPrepTotal = value;
    }
}
