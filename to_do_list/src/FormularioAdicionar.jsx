import React from "react";

function FormularioAdicionar({ novoTexto, setNovoTexto, onAdicionar }) {
    return(
        <div className="adicionar-tarefa">
            <input type="text"
                value={novoTexto}
                onChange={(e) => setNovoTexto(e.target.value)}
                placeholder="Digite uma nova tarefa..."
            />
            <button onClick={onAdicionar}>Adicionar</button>

        </div>
    );
}

export default FormularioAdicionar;