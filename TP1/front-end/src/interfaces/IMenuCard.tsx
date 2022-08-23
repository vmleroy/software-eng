export default interface IMenuCard {
    _id: string
    description: string,
    image: string,
    name: string,
    price: number,
    handleClick: (id: string) => void,
}