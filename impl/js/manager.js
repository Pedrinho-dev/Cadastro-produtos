class ProdutoManager {

    constructor() {
        this.arrProdutos = []
    }

    cadastrar(produto) {
        this.arrProdutos.push(produto)
    }
    //retornar o array ordenado por preco mais barato
    ordenarPorPrecoMaisBarato() {
        //sort
       let arrMaisBarato = this.arrProdutos.sort((p1,p2)=>{
           if (p1.preco < p2.preco) {
               return -1
           }else if (p1.preco > p2.preco) {
               return 1
           } else {
               return 0
           }
            
        });
        
        this.arrProdutos = arrMaisBarato;        
        return this.arrProdutos;        
    }
    //retornar o array ordenado por preco mais caro
    ordenarPorPrecoMaisCaro() {
        //sort
       let arrMaisCaro = this.arrProdutos.sort((p1,p2)=>{
        if (p1.preco < p2.preco) {
            return 1
        }else if (p1.preco > p2.preco) {
            return -1
        } else {
            return 0
        }
         
     });
     
     this.arrProdutos = arrMaisCaro;        
     return this.arrProdutos;  
    }

    ordenarPorNome() {
        //sort
        //retornar o array ordenado por nome
       let arrOrdenados = this.arrProdutos.sort(
           (p1,p2) => p1.nome < p2.nome ? -1 : 1
        )

        return arrOrdenados;
    }   

    buscarProdutosMaisBaratoQue(preco) {
        let arrProdMaisBarato = this.arrProdutos.filter(
            produto=>produto.preco < preco
        );
        return arrProdMaisBarato;
    }
    buscarProdutosMaisCaroQue(preco) {
        let arrProdMaisCaro = this.arrProdutos.filter(
            produto=>produto.preco > preco
        );
        return arrProdMaisCaro;
    }

    buscarProdutosMaisCarosQue(preco) {
        //filter
    }

}