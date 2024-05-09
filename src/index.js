import createItem from "./services/item.js";
import * as cartService from "./services/cart.js"

const cart = [];
const myWhishList = [];

console.log("Welcome to the your Shopee Cart!");

const item1 = await createItem("Steam deck", 549, 1)
const item2 = await createItem("Rog Ally", 749, 3)

await cartService.addItem(cart, item1)
await cartService.addItem(cart, item2)

await cartService.removeItem(cart, item1)
await cartService.removeItem(cart, item2)

await cartService.displayCart(cart)
// await cartService.deleteItem(cart, item2.name)

await cartService.calculateTotal(cart);