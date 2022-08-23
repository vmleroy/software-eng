import IBebida from "./IDrinks"
import IPizza from "./IPizza"
import IPizza2Flavours from "./IPizza2Flavours"

export default interface IPromo {
    name: string,
    promoPrice: number,
    originalPrice: number,
    discount: number,
    pizzas: IPizza[],
    pizzas2flavors: IPizza2Flavours[],
    drinks: IBebida[]
    _id: string
};