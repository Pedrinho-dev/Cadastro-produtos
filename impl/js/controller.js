class ProdutoController {
    constructor() {
        this.produtoManager = new ProdutoManager();
    }
    aoClicarCadastrar() {
        //  ler dados da tela e cadstrar no array do ProdutoManager
        this.produtoManager.cadastrar() // terminar
    }
    //implementar methods para realizar as buscas e filtros
}