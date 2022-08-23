import IBebida from "./IDrinks";
import IPizza from "./IPizza";
import IPizza2Flavours from "./IPizza2Flavours";
import IPromocao from "./IPromo";

export default interface IOrderCard {
    status: string,
    number: number,
    pizzas: IPizza[],
    drinks: IBebida[],
    pizza2flavours: IPizza2Flavours[],
    promos: IPromocao[]
}