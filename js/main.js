
function main_principal(){
    document.getElementById('main_principal').innerHTML = ` 
    <h3>Mais Populares:</h3>

    

    `
}

$(document).ready(function () {
    $('#estado').select2();
});
function pesquisa() {
    var med = window.document.getElementById("estado")
    var medicamento = String(med.value)
    var res = window.document.getElementById("lista")}