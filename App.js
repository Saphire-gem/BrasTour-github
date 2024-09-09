console.log(dados); // Imprime o conteúdo do array 'dados' no console

function conheca() {
  // Seleciona a seção com o ID "resultados-pesquisa" e armazena na variável 'section'
  let section = document.getElementById("resultados-pesquisa");

  let campoPesquisa = document.getElementById("campo-pesquisa").value
  console.log(campoPesquisa);


  // Se campoPesquisa for uma string sem nada
  if(campoPesquisa == ""){
    section.innerHTML = "Procure um Estado válido"
      return
  }

  campoPesquisa = campoPesquisa.toLowerCase()

  // Inicializa uma string vazia para armazenar os resultados da pesquisa
  let resultados = "";
  let titulo = ""; 
  let descricao = "";
  let tags = "";

  // Itera sobre cada elemento do array 'dados'
  for (let dado of dados) {
    titulo = dado.titulo.toLowerCase()
    descricao = dado.descricao.toLowerCase()
    tags = dado.tag.toLowerCase()
    // se titulo includes campoPesquisa
    if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tag.includes(campoPesquisa))
      {
      
      resultados += `
      <div class="item-resultado">
        <h2>${dado.titulo}</h2>
        <p class="descricao-meta">${dado.descricao}.</p>
        <a href=${dado.link} target="_blank">Veja Dicas</a>
      </div>
    `;
    }
    // Então, faça...
    console.log(dado.titulo.includes(campoPesquisa));
    
  }

  if(!resultados) {
      resultados = "<p>Procure um Estado válido</p>"
  }
  // Atribui o HTML gerado ao conteúdo da seção
  section.innerHTML = resultados;
}
