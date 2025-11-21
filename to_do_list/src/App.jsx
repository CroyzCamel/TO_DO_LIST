import React, { useState, useEffect } from 'react';
import useLocalStorage from './hooks/useLocalStorage';
import ItemTarefa from './ItemTarefa';
import FormularioAdicionar from './FormularioAdicionar';
import './App.css';

function ToDoList() {

  const [novoTexto, setNovoTexto] = useState('');

 
  const [tarefas, setTarefas] = useLocalStorage('todoList', [
    { id: 1, texto: "Configurar o novo projeto React", concluida: false },
    { id: 2, texto: "Aprender sobre o .map()", concluida: true },
  ]);

  //Salvar
  useEffect(() => {
    const tasksJSON = JSON.stringify(tarefas);

    localStorage.setItem('todoList', tasksJSON);
  }, [tarefas]);

  const adicionarTarefa = () => {
    if (novoTexto.trim() === '') { return; }
    const novaTarefa = { id: Date.now(), texto: novoTexto, concluida: false };
    setTarefas([...tarefas, novaTarefa]);
    setNovoTexto('');
  }

  const toggleConcluida = (idDaTarefa) => {
    const novasTarefas = tarefas.map(tarefa => {
      if (tarefa.id === idDaTarefa) {
        return {
          ...tarefa,
          concluida: !tarefa.concluida
        };
      }
      return tarefa;
    });

    setTarefas(novasTarefas);
  }

  const removerTarefa = (idDaTarefa) => {
    const novasTarefas = tarefas.filter(tarefa => tarefa.id !== idDaTarefa)

    setTarefas(novasTarefas);
  }

  const limparPersistencia = () => {
    localStorage.removeItem('todoList');

    setTarefas([
      { id: 1, texto: "Configurar o novo projeto React", concluida: false },
      { id: 2, texto: "Aprender sobre o .map()", concluida: true },
    ]);
  }


  return (
    <div className='todo-container'>
      <h1>Lista de Tarefas 📝</h1>



      <FormularioAdicionar
        novoTexto={novoTexto}
        setNovoTexto={setNovoTexto}
        onAdicionar={adicionarTarefa}
      />

      <hr />

      <ul>
        {tarefas.map(tarefa => (

          <ItemTarefa
            key={tarefa.id}
            tarefa={tarefa}
            onToggle={toggleConcluida}
            onRemover={removerTarefa}
          />
        ))}
        <button
          onClick={limparPersistencia}
          style={{
            backgroundColor: '#ffc107',
            color: '#333',
            border: 'none',
            padding: '8px 15px',
            borderRadius: '8px',
            cursor: 'pointer',
            marginBottom: '20px'
          }}
        >
          Resetar Dados Salvos
        </button>
      </ul>
    </div>
  );


}

export default ToDoList;