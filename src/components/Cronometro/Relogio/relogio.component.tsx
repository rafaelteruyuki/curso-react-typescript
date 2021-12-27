import style from './Relogio.module.scss';

interface Props {
    tempo: number | undefined;
}

export default function Relogio({ tempo = 0 }: Props) {

    const minutos = Math.floor(tempo / 60).toString();
    const segundo = (tempo % 60).toString();

    const [minutosDezena, minutosUnidade] = minutos.padStart(2, '0').split('');
    const [segundosDezena, segundosUnidade] = segundo.padStart(2, '0').split('');

    return (
        <>
            <span className={style.relogioNumero}>{minutosDezena}</span>
            <span className={style.relogioNumero}>{minutosUnidade}</span>
            <span className={style.relogioDivisao}>:</span>
            <span className={style.relogioNumero}>{segundosDezena}</span>
            <span className={style.relogioNumero}>{segundosUnidade}</span>
        </>
    );
}
