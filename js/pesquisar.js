function google(x){
        document.getElementById('main_principal').innerHTML = '';  
        for(z in lista){
            if(lista[z].Nome.slice(0,x.length).toLowerCase() == x.toLowerCase()){
                gerar_arquivo_base(lista[z].Nome,lista[z].img,lista[z].descricao.slice(0,80)+"...",'vazio',lista[z].preco)
            }
        }

}