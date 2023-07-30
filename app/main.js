let livros = []
const endPointDaApi =
  'https://guilhermeonrails.github.io/casadocodigo/livros.json'

getBuscarLivrosAPI()

async function getBuscarLivrosAPI() {
  const res = await fetch(endPointDaApi)
  livros = await res.json()
  let livrosComDesconto = aplicarDesconto(livros)
  exibeLivros(livrosComDesconto)
}
