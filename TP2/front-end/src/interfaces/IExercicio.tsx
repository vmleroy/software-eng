import ITipoExercicio from "./ITipoExercicio";

export default interface IExercicio {
    _id: string,
    repeticoes: number,
    series: number,
    tipoExercicio: ITipoExercicio
}