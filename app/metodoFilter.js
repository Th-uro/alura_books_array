const botoes = document.querySelectorAll('.btn')
botoes.forEach(btn => btn.addEventListener('click', filtrarLivros))

function filtrarLivros() {
  const elementoBtn = document.getElementById(this.id)
  const categoria = elementoBtn.value
  let livrosFiltrados =
    categoria == 'disponivel'
      ? filtrarPorDisponibilidade()
      : FiltrarPorCategoria(categoria)
  exibeLivros(livrosFiltrados)
  if (categoria == 'disponivel') {
    const valorTotal = calcularValorTotalDeLivrosDisponiveis(livrosFiltrados)
    exibeValorTotalLivros(valorTotal)
  }
}

function FiltrarPorCategoria(categoria) {
  return livros.filter(livro => livro.categoria == categoria)
}

function filtrarPorDisponibilidade() {
  return livros.filter(livro => livro.quantidade > 0)
}

function exibeValorTotalLivros(valorTotal) {
  elementoComValorTotalDeLivros.innerHTML = `<div class="livros__disponiveis">
  <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
</div>`
}
