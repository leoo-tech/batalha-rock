function pesquisarBanda() {
  let nomeBanda = document.getElementById("pesquisaBanda").value.toLowerCase();
  let resultados = document.getElementById("resultadosPesquisa");
  resultados.innerHTML = ""; // Limpa os resultados anteriores


  // Verifica se o campo de pesquisa está vazio
  if (nomeBanda.trim() === "" || !nomeBanda) {
    resultados.innerHTML = "<p>Digite o nome de uma banda para pesquisar.</p>";
    return; // Sai da função se o campo estiver vazio
  }

  for (let banda of dados) {
    titulo = banda.titulo.toLowerCase();
    descricao = banda.descricao.toLowerCase();
    tags = banda.tags.join(" ").toLowerCase();
    if (titulo.includes(nomeBanda) || descricao.includes(nomeBanda) || tags.includes(nomeBanda)) {
      let itemResultado = document.createElement("div");
      itemResultado.classList.add("item-resultado");

      let titulo = document.createElement("h2");
      let linkTitulo = document.createElement("a");
      linkTitulo.href = banda.link;
      linkTitulo.target = "_blank";
      linkTitulo.textContent = banda.titulo;
      titulo.appendChild(linkTitulo);

      let descricao = document.createElement("p");
      descricao.classList.add("descricao-meta");
      descricao.textContent = banda.descricao;

      let pontosFortes = document.createElement("p");
      pontosFortes.textContent = "Pontos fortes: " + banda.pontosFortes.join(", ");
      pontosFortes.classList.add("descricao-meta");

      let pontosFracos = document.createElement("p");
      pontosFracos.textContent = "Pontos fracos: " + banda.pontosFracos.join(", ");
      pontosFracos.classList.add("descricao-meta");

      let integrantes = document.createElement("p");
      integrantes.textContent = "Integrantes: " + banda.integrantes.join(", ");
      integrantes.classList.add("descricao-meta");

      let pontuacao = document.createElement("p");
      pontuacao.textContent = "Pontuação: ";
      pontuacao.classList.add("descricao-meta");
      let pontuacaoDetalhada = document.createElement("ul");
      pontuacaoDetalhada.classList.add("pontuacao-detalhada");
      for (let categoria in banda.pontuacao) {
        let itemPontuacao = document.createElement("li");
        itemPontuacao.textContent = categoria + ": " + banda.pontuacao[categoria];
        pontuacaoDetalhada.appendChild(itemPontuacao);
      }
      pontuacao.appendChild(pontuacaoDetalhada);

      let linkMaisInfo = document.createElement("a");
      linkMaisInfo.href = banda.link;
      linkMaisInfo.target = "_blank";
      linkMaisInfo.textContent = "Mais informações";

      itemResultado.appendChild(titulo);
      itemResultado.appendChild(descricao);
      itemResultado.appendChild(pontosFortes);
      itemResultado.appendChild(pontosFracos);
      itemResultado.appendChild(integrantes);
      itemResultado.appendChild(pontuacao);
      itemResultado.appendChild(linkMaisInfo);
      resultados.appendChild(itemResultado);
    }
  }

  if (resultados.innerHTML === "") {
    resultados.innerHTML = "<p>Nenhuma banda encontrada.</p>";
  }
}