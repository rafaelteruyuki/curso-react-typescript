import { ITarefa } from '../../../types/tarefa';
import style from './Item.module.scss';

interface Props {
    tarefa: ITarefa;
    selecionaTarefa: (tarefaSelecionada: ITarefa) => void;
}

export function Item({ tarefa, selecionaTarefa }: Props) {    
    return (
        <li className={`${style.item} ${tarefa.selecionado ? style.itemSelecionado : ''} ${tarefa.completado ? style.itemCompletado : ''}`} 
            onClick={() => !tarefa.completado && selecionaTarefa(tarefa)}>

            <h3>{tarefa.nome}</h3>
            <span>{tarefa.tempo}</span>

            {tarefa.completado && <span className={style.concluido} aria-label="tarefa completada"></span>}
        </li>
    );
}
