function pesquisar() {
    let section = document.getElementById('resultados-pesquisa');

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    if (campoPesquisa == ''){
        section.innerHTML = '<p>Nada foi encontrado</p>'
        return
    }
    
    let resultados = '';
    let titulo = '';
    let descricao = '';
    let tags = '';

    campoPesquisa = campoPesquisa.toLowerCase()

    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){
            resultados += `
            <div class="item-resultado">
                    <h2>
                        ${dado.titulo}
                    </h2>
                    <p class="descricao-meta">
                        ${dado.descricao}
                    </p>
                    <a href="${dado.link}" target="_blank">Mais informações.</a>
            </div>
            `
        }
    }

    if (!resultados) {
        resultados += `<p>Não existe resultados para "<span>${campoPesquisa}</span>"</p>`
    }

    section.innerHTML = resultados
}
