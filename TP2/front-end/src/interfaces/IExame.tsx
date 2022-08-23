export default interface IExame {
  _id: string;
  CPFAluno: string;
  descricao: string;
  peso: number;
  altura: number;
  pressaoArt: number;
  gorduraCorp: number;
  massaMagra: number;
  IMC: number;
  estaApto: boolean;
}
