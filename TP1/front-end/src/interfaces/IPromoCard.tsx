import IBebida from "./IDrinks";
import IPizza from "./IPizza";
import IPizza2Flavours from "./IPizza2Flavours";

export default interface IPromoCard {
    _id: string,
    name: string,
    promoPrice: number,
    originalPrice: number,
    discount: number,
    pizzas: IPizza[],
    pizzas2flavors: IPizza2Flavours[],
    drinks: IBebida[],
    handleClick: (id: string) => void,
}