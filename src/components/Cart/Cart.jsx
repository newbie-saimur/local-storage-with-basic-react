import CartDetails from "../CartDetails/CartDetails";

const Cart = ({cart}) => {
    return (
        <div>
            <button className="mb-4 pr-2 cursor-pointer">Cart: {cart.length}</button>
            <div>
                {
                    cart.map(item => <CartDetails item={item} />)
                }
            </div>
        </div>
    );
};

export default Cart;