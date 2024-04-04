const perguntas = [
  {
    pergunta: "Qual é a forma correta de declarar uma variável em JavaScript?",
    resposta: [
      "const myVar;",
      "var myVar;",
      "let myVar;"
    ],
    correta: 2
  },
  {
    pergunta: "Qual método é usado para imprimir algo no console em JavaScript?",
    resposta: [
      "print()",
      "log()",
      "console.log()"
    ],
    correta: 2
  },
  {
    pergunta: "Qual destes não é um tipo de dado em JavaScript?",
    resposta: [
      "Number",
      "Boolean",
      "Character"
    ],
    correta: 2
  },
  {
    pergunta: "Como você escreve um comentário de uma linha em JavaScript?",
    resposta: [
      "// Este é um comentário",
      "/* Este é um comentário */",
      "<!-- Este é um comentário -->"
    ],
    correta: 0
  },
  {
    pergunta: "Qual operador é usado para comparação estrita em JavaScript?",
    resposta: [
      "==",
      "===",
      "!="
    ],
    correta: 1
  },
  {
    pergunta: "Qual método é usado para remover o último elemento de um array em JavaScript?",
    resposta: [
      "pop()",
      "removeLast()",
      "splice()"
    ],
    correta: 0
  },
  {
    pergunta: "Qual é a saída do seguinte código? \n console.log(typeof([]));",
    resposta: [
      "array",
      "object",
      "undefined"
    ],
    correta: 1
  },
  {
    pergunta: "Qual é a função do operador '&&' em JavaScript?",
    resposta: [
      "Operador de negação",
      "Operador de concatenação",
      "Operador lógico 'E'"
    ],
    correta: 2
  },
  {
    pergunta: "Qual destes métodos é usado para adicionar elementos ao final de um array em JavaScript?",
    resposta: [
      "push()",
      "append()",
      "addToEnd()"
    ],
    correta: 0
  },
  {
    pergunta: "Qual é a maneira correta de escrever um loop 'for' em JavaScript?",
    resposta: [
      "for (i = 0; i < 5; i++) {}",
      "for (var i = 0; i < 5; i++) {}",
      "for (i = 0; i <= 5; i++) {}"
    ],
    correta: 1
  }
];

const quiz =document.querySelector("#quiz")
const template = document.querySelector('template')
const corretas = new Set()
const TotalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + " de " + TotalDePerguntas

//loop ou laço de repetição
for(const item of perguntas){
  const quizItem = template.content.cloneNode(true)
quizItem.querySelector("h3").textContent = item.pergunta

// chamar as respostas
for(let resposta of item.resposta){
  const dt = quizItem.querySelector("dl dt").cloneNode(true)
  dt.querySelector("span").textContent = resposta
  dt.querySelector("input").setAttribute("name","pergunta-" + perguntas.indexOf(item))
  dt.querySelector("input").value = item.resposta.indexOf(resposta)
  dt.querySelector("input").onchange = (event) => {
    const estaCorreta = event.target.value == item.correta
    corretas.delete(item)
    if(estaCorreta){
     corretas.add(item)
      }  
      mostrarTotal.textContent = corretas.size + " de " + TotalDePerguntas

    }


//estilização da pagina
  quizItem.querySelector("dl").appendChild(dt)
}
//remove a pergunta A da tela
quizItem.querySelector("dl dt").remove()

//coloca as pergunta nas tela
quiz.appendChild(quizItem)

}