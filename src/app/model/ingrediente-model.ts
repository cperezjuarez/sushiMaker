export class IngredienteModel {
    // Atributos
    private nombre!: string;
    private categoria!: string;
    private precio!: number;
    private tiempoPrep!: number;

    // Constructor
    constructor(nombre: string, categoria: string, precio: number, tiempoPrep: number) {
        this.setNombre(nombre);
        this.setCategoria(categoria);
        this.setPrecio(precio);
        this.setTiempoPrep(tiempoPrep);
    }

    // Getters & Setters
    public getNombre(): string {
      return this.nombre;
    }
    public setNombre(value: string) {
      this.nombre = value;
    }

    public getCategoria(): string {
      return this.categoria;
    }
    public setCategoria(value: string) {
      this.categoria = value;
    }

    public getPrecio(): number {
      return this.precio;
    }
    public setPrecio(value: number) {
      this.precio = value;
    }

    public getTiempoPrep(): number {
      return this.tiempoPrep;
    }
    public setTiempoPrep(value: number) {
      this.tiempoPrep = value;
    }
}
