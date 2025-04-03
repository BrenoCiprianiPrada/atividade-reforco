import { MaterialLeitura } from "./MaterialLeitura";
import { Artigo } from "./Artigo";
import { Revista } from "./Revista";
import { Livro } from "./Livro";

const livro = new Livro("estevam", "Look do Estevam", 300);
const revista = new Revista("estevam","top 10 estevans", 1);
const artigo = new Artigo("estevam", "ecologia do estevam", new Date("2024-12-31"));

livro.exibirDetalhes();
revista.exibirDetalhes();
artigo.exibirDetalhes();