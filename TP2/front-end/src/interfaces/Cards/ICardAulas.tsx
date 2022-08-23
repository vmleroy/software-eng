export default interface ICardAula {
    _id: string,
    aulaNome: string,
    aulaInicio: string,
    aulaFim: string,
    dia: [],
    handleClickAdd: (id: string) => void
    handleClickRemove: (id: string) => void
}