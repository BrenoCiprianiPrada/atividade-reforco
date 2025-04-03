import { MaterialLeitura } from "./MaterialLeitura";

export class Livro implements MaterialLeitura{
    autor: string;
    titulo: string;
    numeroPagina : number;

    constructor(autor : string, titulo: string, numeroPagina : number){
        this.autor = autor;
        this.titulo = titulo;
        this.numeroPagina = numeroPagina;
    }
    exibirDetalhes(): void {
        console.log(`autor: ${this.autor}, titulo: ${this.titulo}, numero de paginas: ${this.numeroPagina}, `);
    }

}