 export const addItemToCart = (cartItems , cartItemsToAdd ) => {
    const exists = cartItems.find(cartItem => cartItem.id === cartItemsToAdd.id)
    if(exists){
        return cartItems.map(cartItem => 
            cartItem.id === cartItemsToAdd.id 
            ? {...cartItem , quantity : cartItem.quantity + 1 }
            : cartItem )
    }
    return [...cartItems ,  {...cartItemsToAdd , quantity : 1}]
}
