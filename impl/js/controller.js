class Controller {
    constructor() {
        this.produtoManager = new ProdutoManager();
    }

    lerDados() {
        let nome = document.getElementById('nome').value
        let preco = parseFloat(document.getElementById('preco').value)
        return new Produto(nome, preco)
    }

    exibirNovoProduto(m) {
        if (document.getElementById('nome').value == ''
            || document.getElementById('preco').value == '') {
            alert('Preencha os dados necessários!')
        } else {
            let arr = this.produtoManager.arrProdutos
            let saida = ''
            for (let i = 0; i < arr.length; i++) {
                saida += `<div>Produto: ${arr[i].nome}</div>
                <div>Preço: R$ ${arr[i].preco},00</div><hr>`
            }
            document.getElementById('novoProduto').innerHTML = saida
        }
        return m
    }
    limparCampos() {
        document.getElementById('nome').value = ''
        document.getElementById('preco').value = ''
    }
    aoClicarCadastrar() {
        let data = this.lerDados()
        this.produtoManager.cadastrar(data)
        this.exibirNovoProduto()
        this.limparCampos()
        document.getElementById('nome').focus()
    }
    //implementar methods para realizar as buscas e filtros
}

var controller = new Controller()