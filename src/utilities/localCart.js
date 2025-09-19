const addToCart = (id) => {
    const cartItems = localStorage.getItem('cart');
    const cart = cartItems ? JSON.parse(cartItems) : [];
    cart.push(id);
    localStorage.setItem('cart',JSON.stringify(cart));
}

const removeFromCart = (id) => {
    const cartItems = localStorage.getItem('cart');
    const cart = cartItems ? JSON.parse(cartItems) : [];
    const index = cart.indexOf(id);
    if(index >= 0) {
        cart.splice(index,1);
        localStorage.setItem('cart', JSON.stringify(cart));
    }
}

export { addToCart, removeFromCart }