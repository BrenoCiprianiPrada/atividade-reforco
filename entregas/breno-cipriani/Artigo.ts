import { MaterialLeitura } from "./MaterialLeitura";

export class Artigo implements MaterialLeitura{
    autor: string;
    titulo: string;
    dataPublicacao : Date;

    constructor(autor : string, titulo: string, dataPublicacao : Date){
        this.autor = autor;
        this.titulo = titulo;
        this.dataPublicacao = dataPublicacao;
    }
    exibirDetalhes(): void {
        console.log(`autor: ${this.autor}, titulo: ${this.titulo}, data de publicação: ${this.dataPublicacao}, `);
    }

}