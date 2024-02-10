const perguntas = [
    {
      pergunta: "Quem ta estourada?",
      respostas: [
        "m word",
        "as irma",
        "rayanne"
      ],
      correta: 1
    },
    {
      pergunta: "Quem tem o menor utero?",
      respostas: [
        "All seeds",
        "Kaua",
        "Jose matias penelope de arruda games"
      ],
      correta: 2
    },
    {
      pergunta: "Quem é mais provavel de cagar junto?",
      respostas: [
        "Allan Neto e Jotinha",
        "Allan Kaua e Eric",
        "Allan Eric e Neto"
      ],
      correta: 2
    },
    {
      pergunta: "Entre jogar genshin e comer prikito, oq jotinga prefere?",
      respostas: [
        "jogar genshin",
        "leite quentinho no cu",
        "comer prikito"
      ],
      correta: 1
    },
    {
      pergunta: "Quem tem o maior utero?",
      respostas: [
        "Kaua",
        "Eric",
        "Jotinga"
      ],
      correta: 2
    },
    {
      pergunta: "Quem é a mãe mais bonita?",
      respostas: [
        "Wal",
        "Todas (ate as q n foram citadas)",
        "Diene"
      ],
      correta: 1
    },
    {
      pergunta: "Qual os pronomes que uma pessoa invisivel prefere?",
      respostas: [
        "Ele/dele",
        "Elu/delu",
        "Ca/dê"
      ],
      correta: 2
    },
    {
      pergunta: "Quem é mais bonita?",
      respostas: [
        "Bruna marquezine",
        "Betânia",
        "Diene"
      ],
      correta: 2
    },
    {
      pergunta: "Quem é mais gostoso?",
      respostas: [
        "Allan",
        "Ricardo",
        "Dudu"
      ],
      correta: 1
    },
    {
      pergunta: "Quem vai farmar sumeru pra gente?",
      respostas: [
        "Kaua",
        "Eric",
        "Dudu"
      ],
      correta: 2
    },
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  // loop ou laço de repetição
  for (const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
    for (let resposta of item.respostas) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
  
        corretas.delete(item)
        if (estaCorreta) {
          corretas.add(item)
        }
  
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
      quizItem.querySelector('dl').appendChild(dt)
    }
  
  
    quizItem.querySelector('dl dt').remove()
  
  
    // coloca a pergunta na tela
    quiz.appendChild(quizItem)
  }