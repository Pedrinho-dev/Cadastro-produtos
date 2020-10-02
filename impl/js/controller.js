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
    
    exibirProdutos(arrProdutos) {
       // let arrProdutos = this.produtoManager.buscarProdutosMaisBaratosQue();
        let saida = ''
        for (let i = 0; i < arrProdutos.length; i++) {
            saida += `<div>Produto: ${arrProdutos[i].nome}</div>
                <div>Preço: ${arrProdutos[i].preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</div><hr>`
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
    ordenarPorNome() {
        let arrProdutos = this.produtoManager.ordenarPorNome()
        this.exibirProdutos(arrProdutos)
    }
    // situacao = preco se é maior ou menor
    buscarProdPreco(situacao) {
        let arrProdSituacao=[]
        let preco = parseFloat(document.getElementById("valor").value)
        if (isNaN(preco)) {
            alert("Favor informar o preço")
            return false;
        }
        if (situacao=="maisBarato") {
             arrProdSituacao = this.produtoManager.buscarProdutosMaisBaratoQue(preco)
        }else if(situacao=="maisCaro"){
             arrProdSituacao = this.produtoManager.buscarProdutosMaisCaroQue(preco)
        }
        this.exibirProdutos(arrProdSituacao)
    }

    
    //implementar methods para realizar as buscas e filtros
}

var controller = new Controller()