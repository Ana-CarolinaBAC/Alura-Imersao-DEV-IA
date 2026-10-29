/* ==========================================================================
   Minha Lista de Tarefas - Lógica (JavaScript)
   
   O JavaScript é o "cérebro" da aplicação.
   Ele reage às ações do usuário (cliques e digitação), atualiza os dados
   e altera o HTML/CSS da página em tempo real.
   ========================================================================== */

// --------------------------------------------------------------------------
// 1. SELEÇÃO DOS ELEMENTOS DO HTML (DOM)
// Guardamos em variáveis os elementos com os quais vamos interagir.
// --------------------------------------------------------------------------
const inputTarefa = document.getElementById("inputTarefa");
const btnAdicionar = document.getElementById("btnAdicionar");
const listaTarefas = document.getElementById("listaTarefas");
const contadorTarefas = document.getElementById("contadorTarefas");
const mensagemVazia = document.getElementById("mensagemVazia");
const btnLimparConcluidas = document.getElementById("btnLimparConcluidas");

// Chave utilizada para guardar as tarefas na memória do navegador
const CHAVE_STORAGE = "minhas_tarefas_simples";

// --------------------------------------------------------------------------
// 2. ESTADO DA APLICAÇÃO (DADOS)
// Nosso array (lista) que guardará os objetos de cada tarefa.
// Cada tarefa terá o formato: { id: 123, texto: "Comprar pão", concluida: false }
// --------------------------------------------------------------------------
let tarefas = carregarTarefas();

// --------------------------------------------------------------------------
// 3. FUNÇÕES DE PERSISTÊNCIA (LOCALSTORAGE)
// O LocalStorage permite que os dados continuem salvos mesmo se fechar a página.
// --------------------------------------------------------------------------

// Carrega as tarefas salvas no navegador
function carregarTarefas() {
  const dadosSalvos = localStorage.getItem(CHAVE_STORAGE);
  if (dadosSalvos) {
    // Transforma a string JSON de volta em um array JavaScript
    return JSON.parse(dadosSalvos);
  }
  // Se for a primeira vez abrindo o app, começamos com algumas tarefas de exemplo
  return [
    { id: 1, texto: "Aprender o básico de HTML, CSS e JavaScript", concluida: true },
    { id: 2, texto: "Adicionar uma nova tarefa nesta lista", concluida: false },
    { id: 3, texto: "Marcar uma tarefa como concluída", concluida: false }
  ];
}

// Salva o array atual de tarefas no LocalStorage
function salvarTarefas() {
  // Transforma o array JavaScript em formato de texto (JSON) para salvar
  localStorage.setItem(CHAVE_STORAGE, JSON.stringify(tarefas));
}

// --------------------------------------------------------------------------
// 4. FUNÇÃO PRINCIPAL: RENDERIZAR (DESENHAR NA TELA)
// Toda vez que adicionamos, concluímos ou removemos uma tarefa,
// chamamos esta função para atualizar o que o usuário vê.
// --------------------------------------------------------------------------
function renderizarTarefas() {
  // Limpa o conteúdo atual da lista para não duplicar itens
  listaTarefas.innerHTML = "";

  // 1. Controla a exibição da mensagem de "lista vazia"
  if (tarefas.length === 0) {
    mensagemVazia.style.display = "block";
  } else {
    mensagemVazia.style.display = "none";
  }

  // 2. Percorre cada tarefa do array e cria os elementos HTML
  tarefas.forEach(function (tarefa) {
    // Cria o item da lista (<li>)
    const li = document.createElement("li");
    li.className = "tarefa-item";

    // Se a tarefa estiver concluída, adiciona a classe CSS "concluida"
    if (tarefa.concluida) {
      li.classList.add("concluida");
    }

    // Cria a etiqueta visual (tag) correspondente ao status da tarefa
    const tagStatusHTML = tarefa.concluida
      ? '<span class="tag-status tag-concluida">✓ Concluída</span>'
      : '<span class="tag-status tag-pendente">Pendente</span>';

    // Estrutura interna do item: Checkbox + Texto + Ações (Tag de status e Botão Remover)
    li.innerHTML = `
      <div class="tarefa-conteudo">
        <input 
          type="checkbox" 
          class="tarefa-checkbox" 
          ${tarefa.concluida ? "checked" : ""}
        >
        <span class="tarefa-texto">${tarefa.texto}</span>
      </div>
      <div class="tarefa-acoes">
        ${tagStatusHTML}
        <button class="btn-remover" title="Remover atividade">&times;</button>
      </div>
    `;

    // Ação ao clicar no checkbox (marca como concluída ou ativa)
    const checkbox = li.querySelector(".tarefa-checkbox");
    checkbox.addEventListener("change", function () {
      alternarConcluida(tarefa.id);
    });

    // Ação ao clicar no botão de remover (X)
    const btnRemover = li.querySelector(".btn-remover");
    btnRemover.addEventListener("click", function () {
      removerTarefa(tarefa.id);
    });

    // Adiciona o item pronto dentro da <ul> na página
    listaTarefas.appendChild(li);
  });

  // 3. Atualiza os números do contador e o botão de limpar
  atualizarResumo();
}

// --------------------------------------------------------------------------
// 5. OPERAÇÕES DE TAREFAS: ADICIONAR, CONCLUIR E REMOVER
// --------------------------------------------------------------------------

// Adiciona uma nova tarefa à lista
function adicionarTarefa() {
  const texto = inputTarefa.value.trim();

  // Verifica se o campo não está vazio
  if (texto === "") {
    alert("Por favor, digite o nome de uma tarefa antes de adicionar.");
    inputTarefa.focus();
    return;
  }

  // Cria um novo objeto para a tarefa
  const novaTarefa = {
    id: Date.now(), // Gera um número único com base na hora atual
    texto: texto,
    concluida: false
  };

  // Adiciona a nova tarefa no início da lista
  tarefas.unshift(novaTarefa);

  // Salva no LocalStorage e atualiza a tela
  salvarTarefas();
  renderizarTarefas();

  // Limpa o campo de texto e mantém o cursor nele
  inputTarefa.value = "";
  inputTarefa.focus();
}

// Alterna o status da tarefa entre concluída e pendente
function alternarConcluida(id) {
  // Procura a tarefa pelo ID no nosso array
  const tarefa = tarefas.find(function (t) {
    return t.id === id;
  });

  if (tarefa) {
    // Inverte o valor (se era true vira false, se era false vira true)
    tarefa.concluida = !tarefa.concluida;
    salvarTarefas();
    renderizarTarefas();
  }
}

// Remove uma tarefa da lista pelo seu ID
function removerTarefa(id) {
  // Filtra o array, mantendo apenas as tarefas que têm ID diferente do selecionado
  tarefas = tarefas.filter(function (t) {
    return t.id !== id;
  });

  salvarTarefas();
  renderizarTarefas();
}

// Remove todas as tarefas que estão marcadas como concluídas
function limparConcluidas() {
  tarefas = tarefas.filter(function (t) {
    return !t.concluida;
  });

  salvarTarefas();
  renderizarTarefas();
}

// Atualiza o texto do contador de tarefas
function atualizarResumo() {
  const total = tarefas.length;
  const concluidas = tarefas.filter(t => t.concluida).length;

  if (total === 0) {
    contadorTarefas.textContent = "0 tarefas cadastradas";
    btnLimparConcluidas.style.display = "none";
  } else {
    contadorTarefas.textContent = `${concluidas} de ${total} tarefa(s) concluída(s)`;
    // Mostra o botão "Limpar concluídas" apenas se houver pelo menos uma concluída
    btnLimparConcluidas.style.display = concluidas > 0 ? "inline-block" : "none";
  }
}

// --------------------------------------------------------------------------
// 6. EVENTOS (ESCUTANDO AS AÇÕES DO USUÁRIO)
// --------------------------------------------------------------------------

// Clique no botão "Adicionar"
btnAdicionar.addEventListener("click", adicionarTarefa);

// Pressionar a tecla "Enter" dentro do campo de texto
inputTarefa.addEventListener("keydown", function (evento) {
  if (evento.key === "Enter") {
    adicionarTarefa();
  }
});

// Clique no botão "Limpar concluídas"
btnLimparConcluidas.addEventListener("click", limparConcluidas);

// --------------------------------------------------------------------------
// 7. INICIALIZAÇÃO
// Desenha as tarefas na tela assim que o arquivo carregar
// --------------------------------------------------------------------------
renderizarTarefas();
