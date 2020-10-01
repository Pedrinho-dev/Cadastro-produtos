class Controller {
    constructor() {
        this.produtoManager = new ProdutoManager();
    }

    lerDados() {
        let nome = document.getElementById('nome').value
        let preco = parseFloat(document.getElementById('preco').value)
        return new Produto(nome, preco)
    }

    exibirNovoProduto() {
        let arr = this.produtoManager.arrProdutos
        let saida = ''
        for (let i = 0; i < arr.length; i++) {
            saida += `<div>Produto: ${arr[i].nome}</div>
                <div>Preço: ${arr[i].preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</div><hr>`
        }
        document.getElementById('novoProduto').innerHTML = saida
    }
    limparCampos() {
        document.getElementById('nome').value = ''
        document.getElementById('preco').value = ''
    }
    aoClicarCadastrar() {
        let data = this.lerDados()
        if (document.getElementById('nome').value == ''
            || document.getElementById('preco').value == '') {
            alert('Preencha os dados necessários!')
            return false;
        }
        this.produtoManager.cadastrar(data)
        this.exibirNovoProduto()
        this.limparCampos()
        document.getElementById('nome').focus()
    }
    ordenarPorPrecoMaisBarato() {
        this.produtoManager.ordenarPorPrecoMaisBarato();
        this.exibirNovoProduto()
    }

    ordenarPorPrecoMaisCaro() {
        this.produtoManager.ordenarPorPrecoMaisCaro();
        this.exibirNovoProduto()
    }
    //implementar methods para realizar as buscas e filtros
}

var controller = new Controller()