var carrinho_total = 0;

var lista_carrinho = []
function carrinho(x,w){
   lista_carrinho.push(x)
    console.log(lista_carrinho); 
    carrinho_total += Number(w.replace(",", "."));
    console.log(carrinho_total);
    carrinho_inc(x,w);
    return carrinho_total;

    
}
function carrinho_inc(n,v){
    document.getElementById('vc').innerText = 'Total R$: '+ carrinho_total.toFixed(2);
    
    document.getElementById('carrinho_div').innerHTML += `
    <div><p>${n}</p>
                <p>${v}</p>  </div>
    
    `
}