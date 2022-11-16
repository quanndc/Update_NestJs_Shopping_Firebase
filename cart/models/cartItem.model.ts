import { Item } from "./item.model";

export interface CartItem {
    item: Item[],
    totalPrice: number,
}