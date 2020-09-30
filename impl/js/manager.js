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
    }


    

    buscarProdutosMaisBaratosQue(preco) {
        //filter
    }

    buscarProdutosMaisCarosQue(preco) {
        //filter
    }

}