import { ITarefa } from '../../types/tarefa';
import { Item } from './Item/item.component';
import style from './Lista.module.scss';

interface Props {
    tarefas: ITarefa[];
    selecionaTarefa: (tarefaSelecionada: ITarefa) => void;
}

function Lista({ tarefas, selecionaTarefa }: Props) {
    
    return (
        <aside className={style.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                {tarefas.map(tarefa => (
                    <Item
                        selecionaTarefa={selecionaTarefa}
                        key={tarefa.id} 
                        tarefa={tarefa}
                    />
                ))}
            </ul>
        </aside>
    );
}

export default Lista;
