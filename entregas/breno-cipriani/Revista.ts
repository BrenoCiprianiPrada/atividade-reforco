import { MaterialLeitura } from "./MaterialLeitura";

export class Revista implements MaterialLeitura{
    autor: string;
    titulo: string;
    edicao : number;

    constructor(autor : string, titulo: string, edicao : number){
        this.autor = autor;
        this.titulo = titulo;
        this.edicao = edicao;
    }
    exibirDetalhes(): void {
        console.log(`autor: ${this.autor}, titulo: ${this.titulo}, edição: ${this.edicao}, `);
    }

}