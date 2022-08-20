# e-commerce

Um pequeno projeto para apresentação escolar **(Etec Carapicuíba)**

O objetivo aqui era criar um modelo de negocio e apresentar como tudo funcionaria.

A aluno em questão era minha irmã que por acaso me pediu ajuda de última hora então o resultado final ficou bom...porem foi feito com algumas gambiara

Exemplo disso é que não foi usada "Document.createElement()" no **JavaScript** em vez disso eu simplesmente taquei tudo via innerHTML.

O resultado final ficou aceitável porem o código não esta tão bonito porem consegui entregar a tempo do prazo de apresentação.

E de quebra foi um dos trabalhos apresentados com maior nota da classe.

Caso queira conferir o resultado final:https://hiltonjfn.github.io/e-commerce/

# Como foi feito

1º passo: O site era sobre venda de livros online então para isso precisávamos de uma lista de informações, como nome, preço e gênero, o meto mais correto seria criar um banco de dados ou um arquivo JSON... só que infelizmente não tínhamos tempo então improvisei com um bloco de nota em formato de Array e pedi para minha irmã colocar as informações.

2º passo: O site tinha que ser bonito e eu não tinha tempo para criar todo um layout eu mesmo... Então tive que apelar para **Bootstrap** o segundo problema é que ela tinha que explicar como o site foi feito então eu criei uma estrutura meio parecida com **React** onde o código HTML era enviado via **JavaScript** para o index, além disso não sabíamos ao certo como seria a aparência do site, fui criando no improviso sem tempo para prototipar, por isso cada elemento foi separado em um arquivo JS deferente.

3º passo:Eu ja tinha o modelo da pagina e o conteúdo, porem eu também precisava que ele fosse funcional! a barra de pesquisa até então era apenas um enfeite então para funcionar eu criei uma **function** um tanto interessante e simples, o primeiro passo da function era receber o que foi escrito no input da caixa de pesquisa exemplo: caso você fosse escrever Batman e so tivesse digitado a letra "B" ele iria percorrer todo o Array de zero ao numero de itens da lista "*for(zero in lista)*" e verificaria qual item da lista de um objeto onde no indice nome tivesse uma string com o *length* igual a quantidade de caracteres que foi digitado e com o mesmo caractere, então ele traria todos os itens que começassem com B, assim que o usuário coloque-se a segunda letra ele repetiria o processo limpando a tela e trazendo todos os itens que começassem com "Ba" assim repetidamente até o usuário ter o resultado desejado, caso tenha interesse de ver para entender melhor, essa função esta no arquivo *'pesquisar.js"* o nome da função é "*google()*"
