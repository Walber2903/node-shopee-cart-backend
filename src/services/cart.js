//actions to cart

//add item to cart
async function addItem(userCart, item) {
  userCart.push(item);
}

//calculate total from cart
async function calculateTotal(userCart) {
  console.log("\nShopee Cart TOTAL IS:");

  const result =  userCart.reduce((total, item) => total + item.subtotal(), 0);
  console.log(`🎁Total: ${result}`);
}

//delete item from cart
async function deleteItem(userCart, name) {
  const index = userCart.findIndex((item) => item.name === name);
  if (index !== -1) {
    userCart.splice(index, 1);
  }
}

//remove item from cart
async function removeItem(userCart, item) {
  const indexFound = userCart.findIndex((cartItem) => cartItem.name === item.name);

  if(indexFound == -1) {
    console.log("Item not found");
    return;
  }

  if (userCart[indexFound].quantity > 1){
    userCart[indexFound].quantity -= 1;
    return;
  }

  if(userCart[indexFound].quantity == 1) {
    deleteItem(userCart, item.name);
    return;
  }

  console.log('index do item a ser removido: ',indexFound);
}

async function displayCart(userCart) {
  console.log("Shopee Cart List: ")

  userCart.forEach((item, index) => {
    console.log(`${index + 1}. ${item.name} --- R$ ${item.price} * ${item.quantity} = Total ${item.subtotal()}`)
  })
}

export {
  addItem,
  calculateTotal,
  deleteItem,
  removeItem,
  displayCart
}