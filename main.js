const Perfis = {
  github: 'Lunathos',
  instagram: 'davicarvalho.gs',
  youtube: 'UCAHNIqJTD9ditXA36sQaSRw',
  facebook: 'davi.c.gomes'
}

function ChangePerfisSocialMedia() {
  // O JS reconhece o ID no DOM automaticamente
  //userName.textContent = 'Teste'
  for (let li of socialLinks.children) {
    const perfil = li.getAttribute('class')
    li.children[0].href = `https://${perfil}.com/${Perfis[perfil]}`
  }
}

ChangePerfisSocialMedia()

function connectGitHubProfileInfos() {
  //Em vez de utilizar um usuário, utilizar o objeto já criado.
  const url = `https://api.github.com/users/${Perfis.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userAvatar.src = data.avatar_url
      userLink.href = data.html_url
      userLogin.textContent = data.login
    })
}

connectGitHubProfileInfos()

const github = 'Lunathos'
const instagram = 'davicarvalho.gs'
const youtube = 'UCAHNIqJTD9ditXA36sQaSRw'
const facebook = 'davi.c.gomes'

/*
-- Fluxo natural da aplicação --
Esquerda para direita
De cima para baixo
E uma instrução após a outra
--                            --

Possui prioridade de carregamento
Na página WEB.

Sincronia: Uma coisa começa, termina e logo em seguida outra começa

JS pode ser colocado no HEAD ou BODY (Recomendado)

--- Tipos de Variaveis --

string / number / boolean

let -> Variável que recebe qualquer tipo de Var;
const -> Variável constante, dar erro se receber um dado;

-- Tipos de Variáveis Estuturados --

Objeto - Guarda várias informações correlacionadas dentro de uma
variável.

Quando trabalhamos com este tipo de variavel, devemos chamar o atributo de dentro do Objeto

-- DOM - Document Object Model --
Modelo de Documento do Objeto

-- Boas Práticas --
camelCase
PascalCase
snake_case

--- Fetch, Promise & Arrow Function ---

  - Fetch -> Vai na API, pegar as respostas que forem entregadas.
  Não reconhece se o arquivo é JSON, apenas pega as infos.
  
  - Promise(then - "faça") - Recurso da linguagem JS, para pegarmos repostas de alguma coisa


  - Arrow Functions - Forma contraída da função 
  Função Anônima - Função que não tem nome
  Sintaxe: 
  
  argumento => {}
  
  #Utilizando mais parâmetros:

  [(arg1, arg2) => {}]
  
  #Sem uso de argumentos:
  () => {}

*/
