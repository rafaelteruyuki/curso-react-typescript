import React, { useState } from "react";
import { ITarefa } from "../../types/tarefa";
import Botao from "../Botao/botao.component";
import style from './Formulario.module.scss';
import { v4 as uuidv4 } from 'uuid'

interface Props {
    setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>;
}

function Formulario({ setTarefas }: Props) {
    const [nome, setNome] = useState('');
    const [tempo, setTempo] = useState('00:00');

    function adicionarTarefa(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setTarefas(tarefasAntigas => [
            ...tarefasAntigas, 
            {
                nome,
                tempo,
                selecionado: false,
                completado: false,
                id: uuidv4()
            }
        ]);

        setNome('');
        setTempo('00:00');
    }

    return (
        <form className={style.novaTarefa} onSubmit={adicionarTarefa}>
            <div className={style.inputContainer}>
                <label htmlFor="tarefa">Adicione um novo estudo</label>
                <input id="tarefa"
                    name="tarefa"
                    type="text"
                    value={nome}
                    onChange={e => setNome(e.target.value)}
                    placeholder="O que você quer estudar?" 
                    required 
                />
            </div>

            <div className={style.inputContainer}>
                <label htmlFor="tempo">Tempo</label>

                <input id="tempo"
                    name="tempo"
                    type="time"  
                    value={tempo} 
                    onChange={e => setTempo(e.target.value)}
                    min="00:00:00" 
                    max="01:30:00"
                    step="1"
                    required 
                />
            </div>

            <Botao type="submit">Adicionar</Botao>
        </form>
    );
}

export default Formulario;
