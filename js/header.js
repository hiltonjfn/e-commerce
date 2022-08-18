//Função de carregar o cabeçario
function header(){
    document.getElementById('header').innerHTML = `
    <nav class="navbar navbar-expand-lg ">
    <div class="container-fluid">
      
      
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        
        

        <a class="navbar-brand" href="#">
      <img onclick="carregar()" id="logo_png" src="img/logo.png" alt="">
      </a>

  
          <li class="nav-item dropdown col-1 categoria_margin">
            <a  style="color: #fecb00;" class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            CATEGORIAS
            </a>
            <ul  style="color: #fecb00;" class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a onclick="lista_function('Fábula')"class="dropdown-item" href="#">Fábula</a></li>

              <li><a onclick="lista_function('Comédia')" class="dropdown-item" href="#">Comédia</a></li>

              <li><a onclick="lista_function('Ficção')" class="dropdown-item" href="#">Ficção</a></li>

              <li><a onclick="lista_function('Sátira')" class="dropdown-item" href="#">Sátira</a></li>

              <li><a onclick="lista_function('Drama')" class="dropdown-item" href="#">Drama</a></li>

              <li><a onclick="lista_function('Mistério')" class="dropdown-item" href="#">Mistério</a></li>

              <li><a onclick="lista_function('Comédia dramática')" class="dropdown-item" href="#">Comédia dramática</a></li>

              <li><a onclick="lista_function('Infantil')" class="dropdown-item" href="#">Infantil</a></li>

              <li><a onclick="lista_function('Ficção Literária')" class="dropdown-item" href="#">Ficção Literária</a></li>

              <li><a onclick="lista_function('Ação')" class="dropdown-item" href="#">Ação</a></li>

              <li><a onclick="lista_function('Suspense')" class="dropdown-item" href="#">Suspense</a></li>

              <li><a onclick="lista_function('Crime')" class="dropdown-item" href="#">Crime</a></li>

              <li><a onclick="lista_function('Romance')" class="dropdown-item" href="#">Romance</a></li>

              <li><a onclick="lista_function('Guerra')" class="dropdown-item" href="#">Guerra</a></li>

              <li><a onclick="lista_function('Poesia')" class="dropdown-item" href="#">Poesia</a></li>

              <li><a onclick="lista_function('Terror')" class="dropdown-item" href="#">Terror</a></li>

              
              
              
            </ul>
          </li>
          
          <li class="nav-item ">
          <form class="d-flex">

          <select onclick="pesquisa()" id="estado">  
          <option value="Nulo">Pesquisar</option>
          <option value="Abilify">Abilify</option>
          <option value="Abilify">Aipr</option>
          <option value="Aropax">Zyparox</option> 
          <option value="?">?</option>
          </select>
      
          <button class="btn btn-outline-success" type="submit">Pesquisar</button>


          
        </form>
          </li>
          <img class="literalmonei" src="img/lm.png" alt="">
        <li class="nav-item">
          <a data-bs-toggle="modal" data-bs-target="#exampleModal" style="color: #fecb00;" class="nav-link" href="#">Moedas literárias</a>
         </li>

          <img class="login_ico" src="img/icone.png" alt="">
          <li class="nav-item">
          
          <a  style="color: #fecb00;" class="nav-link" href="#">
          
          Entre ou
          cadastre-se</a>
          </li>
        </ul>
        
       
      </div>
      
    </div>
    <a class="navbar-brand" href="#">
      <img onclick="carregar()" id="logo_png" src="https://cdn-icons-png.flaticon.com/512/5234/5234583.png" alt="">
      </a>
  </nav>`
}

