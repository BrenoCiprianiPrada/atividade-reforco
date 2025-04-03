import { MaterialLeitura } from "./MaterialLeitura";

class Revista implements MaterialLeitura{
    autor: string;
    titulo: string;
    edicao : number;

    constructor(autor : string, titulo: string, edicao : number){
        this.autor = autor;
        this.titulo = titulo;
        this.edicao = edicao;
    }
    exibirDetalhes(): void {
        console.log(`autor: ${this.autor}, titulo: ${this.titulo}, numero de paginas: ${this.edicao}, `);
    }

}