function pagina(titulo,img,resumo,link,valor){
    document.getElementById('carrocel').innerHTML = ''
    document.getElementById('main_principal').innerHTML = `
    <spam>
    <div id="pag">
    <div class="card mb-3" style="max-width: 97%;">
      <div class="row g-0">
        <div class="col-md-4">
          <img src="${img}" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">${titulo}</h5>
            <p class="card-text">${resumo}</p>
            <p style="font-size: 2rem; " class="card-text"><small class="text-muted">${valor}</small></p><button type="button" class="btn" onclick="carrinho('${titulo}','${valor}')" btn-success">COMPRAR</button>
          </div>
        </div>
      </div>
    </div>


  </div></spam>`
}
function carregar_pagina(id){
    for(zero in lista){
        if(lista[zero].Nome == id){
            pagina(lista[zero].Nome,lista[zero].img,lista[zero].descricao,'harry',lista[zero].preco)
        }
    }
}