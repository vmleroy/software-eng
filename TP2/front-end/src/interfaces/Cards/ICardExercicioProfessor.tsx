import ITipoExercicio from "../ITipoExercicio";

export default interface ICardExercicioProfessor {
    _id: string,
    nome: string,
    descricao: string,
    handleClickAdd: (id: string, series:string, repeticoes:string) => void
    handleClickRemove: (id: string) => void
}