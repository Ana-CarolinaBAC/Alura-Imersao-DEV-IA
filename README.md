# 📋 To-Do List • Desafio 3 | Imersão Dev Alura

<p align="center">
  <img src="https://img.shields.io/badge/Imers%C3%A3o%20Dev-Alura-blueviolet?style=for-the-badge&logo=alura" alt="Imersão Dev Alura">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
  <img src="https://img.shields.io/badge/Status-Conclu%C3%ADdo-success?style=for-the-badge" alt="Status Concluído">
</p>

<p align="center">
  Aplicação interativa de lista de tarefas desenvolvida como solução prática para o <strong>Desafio 3 da Imersão Dev da Alura</strong>.
</p>

---

## 💻 Sobre o Projeto

O objetivo deste projeto foi criar uma aplicação web completa de **Lista de Tarefas (To-Do List)** que permitisse ao usuário organizar sua rotina diária de forma simples, intuitiva e agradável.

A aplicação foi construída com foco em boas práticas, utilizando apenas as tecnologias nativas da Web (**HTML5**, **CSS3** e **JavaScript puro/vanilla**), sem a necessidade de frameworks ou dependências externas.

---

## ✨ Funcionalidades

- [x] **Adicionar Atividades**: Insira qualquer tarefa pelo campo de texto clicando no botão **Adicionar** ou pressionando a tecla <kbd>Enter</kbd>.
- [x] **Diferenciação Visual Inteligente**:
  - ⏳ **Tarefas Pendentes**: Apresentam borda azul lateral, fundo branco, texto nítido e a etiqueta **PENDENTE**.
  - ✅ **Tarefas Concluídas**: Ao clicar no checkbox, o item ganha destaque verde suave, borda lateral verde, texto riscado e a etiqueta **✓ CONCLUÍDA**.
- [x] **Remover Atividades**: Exclusão rápida de qualquer atividade clicando no botão **×**.
- [x] **Resumo e Limpeza em Lote**:
  - Contador dinâmico mostrando quantas tarefas foram concluídas em relação ao total.
  - Botão **Limpar concluídas** para remover todas as tarefas feitas de uma só vez.
- [x] **Persistência com LocalStorage**: Os dados ficam salvos na memória do navegador; se a página for fechada ou recarregada, as tarefas continuam lá.
- [x] **Design Responsivo**: Interface limpa e adaptada para computadores, tablets e smartphones.

---

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estruturação semântica da página, formulários e listas.
- **CSS3**: Estilização moderna utilizando Flexbox, variáveis de transição, efeitos de `:hover` e estados de conclusão.
- **JavaScript (ES6+)**: Lógica da aplicação, manipulação do DOM e persistência com a Web Storage API.

---

## 🧠 Aprendizados da Imersão Dev

Durante o desenvolvimento deste desafio, foram colocados em prática os seguintes conceitos fundamentais:

1. **Manipulação do DOM (Document Object Model)**:
   - Seleção de elementos com `document.getElementById()`.
   - Criação dinâmica de nós com `document.createElement()`.
   - Atualização da árvore de elementos com `appendChild()` e `innerHTML`.
2. **Escuta e Disparo de Eventos**:
   - Tratamento de cliques com `addEventListener('click', ...)`.
   - Captura de teclas do teclado com o evento `keydown` (tecla <kbd>Enter</kbd>).
3. **Estrutura de Dados e Métodos de Arrays**:
   - Organização das tarefas em um array de objetos `{ id, texto, concluida }`.
   - Uso de métodos modernos como `.forEach()`, `.find()`, `.filter()` e `.unshift()`.
4. **Armazenamento no Navegador**:
   - Uso de `localStorage.setItem()` e `localStorage.getItem()`.
   - Serialização e desserialização com `JSON.stringify()` e `JSON.parse()`.

---

## 📂 Estrutura de Arquivos

```text
├── index.html        # Estrutura e marcação da aplicação
├── style.css         # Folha de estilos e regras visuais
├── app.js            # Lógica interativa em JavaScript
├── .gitignore        # Arquivos ignorados pelo Git
├── LICENSE           # Licença aberta MIT
└── README.md         # Documentação completa do projeto
```

---

## 🚀 Como Executar Localmente

Não é necessário instalar nada:

1. Clone ou baixe este repositório:
   ```bash
   git clone https://github.com/SEU-USUARIO/NOME-DO-REPOSITORIO.git
   ```
2. Acesse a pasta do projeto.
3. Dê **dois cliques** no arquivo [`index.html`](file:///c:/Users/marco/OneDrive/Projeto%20To%20do%20list/index.html) para abrir diretamente no seu navegador.

---

## 🌐 Como Publicar no GitHub Pages (Para compartilhar na Imersão)

Para que qualquer pessoa possa testar seu projeto pelo link na web:

1. Acesse o seu repositório no [GitHub](https://github.com).
2. Clique na aba **Settings** (Configurações) no menu superior.
3. Na barra lateral esquerda, clique em **Pages**.
4. Na seção **Branch**, selecione a branch `main` e a pasta `/ (root)`.
5. Clique em **Save**.
6. Aguarde alguns instantes: o GitHub gerará o seu link público (exemplo: `https://seu-usuario.github.io/nome-do-repositorio`).

---

## 🎓 Autor

Projeto desenvolvido com 💜 por **Ana Carolina BAC** durante o **Desafio 3 da Imersão Dev da Alura**!

- **LinkedIn**: [Adicione seu link do LinkedIn aqui](https://linkedin.com)
- **GitHub**: [Adicione seu perfil do GitHub aqui](https://github.com)

---

## 📄 Licença

Este projeto está sob a licença [MIT](LICENSE).
