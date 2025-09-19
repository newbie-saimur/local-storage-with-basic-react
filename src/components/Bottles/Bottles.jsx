import { useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
import { addToCart, removeFromCart } from "../../utilities/localCart";
import Cart from "../Cart/Cart";

const Bottles = () => {
    const [bottles, setBottles] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('bottles.json')
        .then(response => response.json())
        .then(data => setBottles(data))
    }, []);

    const handleAddToCart = (bottle) => {
        setCart([...cart, bottle]);
        addToCart(bottle.id);
    }

    const handleRemoveFromCart = (bottle) => {
        const index = cart.indexOf(bottle);
        if(index >= 0) {
            const newCart = [...cart];
            newCart.splice(index,1);
            setCart(newCart)
            removeFromCart(bottle.id);
        }
    }

    useEffect(() => {
        const cartItems = localStorage.getItem('cart');
        setCart(cartItems ? JSON.parse(cartItems) : [])
    }, [bottles]);

    return (
        <div>
            <div className="flex justify-between">
                <h3 className="mb-4 pl-2">Bottles: {bottles.length}</h3>
                <Cart cart={cart} />

            </div>
            <div className="grid grid-cols-3 gap-6">
            {
                bottles.map(bottle => <Bottle key={bottle.id} bottle={bottle} handleAddToCart={handleAddToCart} handleRemoveFromCart={handleRemoveFromCart} />)
            }
            </div>
        </div>
    );
};

export default Bottles;