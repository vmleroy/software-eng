import IAddress from "./IAddress"

export default interface IUser {
    name: string,
    email: string,
    cpf: string,
    phone: string, 
    addres: IAddress;
};