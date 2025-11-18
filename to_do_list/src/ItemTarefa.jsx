import React from "react";

function ItemTarefa({ tarefa, onToggle, onRemover }) {
    return (
        <li
            onClick={() => onToggle(tarefa.id)}
            style={{
                textDecoration: tarefa.concluida ? 'line-through' : 'none',
                cursor: 'pointer',
                display: "flex",
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '8px 0'
            }}
        >
            <span>{tarefa.texto}</span>

            <button
                onClick={(e) => {
                    e.stopPropagation();
                    onRemover(tarefa.id);
                }}
                style={{
                    backgroundColor: '#dc3545',
                    color: 'white',
                    border: 'none',
                    padding: '5px 10px',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontSize: '0.8em',
                    marginLeft: '10px'
                }}
            >
                Remover
            </button>
        </li>
    )
}

export default ItemTarefa;