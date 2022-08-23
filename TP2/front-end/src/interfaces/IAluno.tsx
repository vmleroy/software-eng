import ICartaoDeCredito from "./ICartaoDeCredito";
import IExame from "./IExame";
import IPlano from "./IPlano";

export default interface IAluno {
  _id: string;
  nome: string;
  CPF: string;
  RG: string;
  dataNasc: string;
  cartaoCred: ICartaoDeCredito;
  planos: IPlano[];
  exames: IExame[];
}
