import IExercicio from "./IExercicio";

export default interface ITreino {
    CPFTreino: string,
    descricao: string,
    exercicios: IExercicio[]
}