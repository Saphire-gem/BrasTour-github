console.log(dados);
function conheca(Acre){
    let section = document.getElementById("resultados-pesquisa")
    console.log(section);
    
    let resultados = ""
    
    for (let dado of dados) {
        resultados += `
    <div class="item-resultado">
        <h2>
             ${dado.titulo}
        </h2>
            <p class="descricao-meta">${dado.descricao}.</p>
            <a href=${dado.link}  target="_blank">Veja Dicas</a>
                </div>
    `
    }
    
    section.innerHTML = resultados
}






