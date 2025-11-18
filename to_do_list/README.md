# 📝 To-Do List Interativa com Persistência de Dados

Este projeto é uma aplicação de lista de tarefas criada com **React.js** e o **Vite**. O objetivo principal foi praticar a gestão de estado complexo (arrays de objetos), a arquitetura de componentes e a persistência de dados.

## ✨ Funcionalidades

O aplicativo To-Do List possui as seguintes funcionalidades completas:

* **Adicionar Tarefa:** Cria novas tarefas de forma dinâmica.
* **Alternar Status:** Permite marcar uma tarefa como concluída ou pendente (usando o clique no item).
* **Remover Tarefa:** Exclui permanentemente uma tarefa da lista.
* **Persistência de Dados (Local Storage):** As tarefas são salvas no armazenamento local do navegador e recarregadas automaticamente ao reabrir ou atualizar a página (F5).
* **Reset de Dados:** Um botão dedicado para apagar todos os dados salvos no navegador, restaurando a lista para o estado inicial.

## 🚀 Conceitos Avançados Praticados

Este projeto consolidou os seguintes pilares do desenvolvimento moderno com React:

* **Gestão de Estado:** Uso de `useState`  para arrays complexos.
* **Imutabilidade de Arrays:** Utilização de `filter()`, `map()`, e o **Operador Spread (`...`)** para atualizar o estado sem modificá-lo diretamente.
* **Componentização (Arquitetura):** Separação de UI/Lógica com os componentes `<ItemTarefa />` e `<FormularioAdicionar />`.
* **Elevação de Estado (Lifting State Up):** Passagem de funções (`adicionarTarefa`, `toggleConcluida`, `removerTarefa`) via *props* para componentes filhos.
* **Hooks de Efeito (`useEffect`):** Uso do `useEffect` com array de dependências para:
    * **Carregamento Inicial (`useState` Lazy Initialization):** Definir o estado inicial a partir do `localStorage`.
    * **Sincronização (`[tarefas]`):** Salvar o estado da lista no Local Storage toda vez que houver uma alteração.
* **Estilização:** Aplicação de CSS puro para um design limpo e elegante.
