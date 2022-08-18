function gerar_arquivo_base(titulo,img,resumo,link,valor){
    if(titulo.length > 60){
        var font = 1;

    }else{var font = 1.15;}

    document.getElementById('main_principal').innerHTML +=  `
    <div class="col-3">
    <div class="card" style="width: 17rem;">
        <img style="height: 30vh;" src="${img}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 style="font-size: ${font}rem;height: 5rem;" class="card-title">${titulo}</h5>
          <p class="card-text">${resumo}</p>
    
          <h6 class="card-title">${valor}</h6>
          <a href="#${titulo}" onclick="carregar_pagina('${titulo}')" class="btn btn-primary">Ler mais</a>
        </div>
    </div>
    </div>
    `
    
    
}
function lista_function(genero){
    document.getElementById('main_principal').innerHTML = '';

    for(zero in lista){
        if(lista[zero].genero1 == genero || lista[zero].genero2 == genero || lista[zero].genero3 == genero || lista[zero].genero4 == genero || lista[zero].genero5 == genero){
            gerar_arquivo_base(lista[zero].Nome,lista[zero].img,lista[zero].descricao.slice(0,80)+"...",'harry',lista[zero].preco)
        }
    }
}



