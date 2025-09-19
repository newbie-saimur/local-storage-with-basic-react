import CartDetails from "../CartDetails/CartDetails";

const Cart = ({cart}) => {
    return (
        <div className="flex flex-col items-end">
            <button className="mb-4 pr-2 cursor-pointer">Cart: {cart.length}</button>
            <div className="flex gap-2 flex-wrap mb-2 rounded-lg">
            {
                cart.map((item, index) => <CartDetails key={index} item={item} />)
            }
            </div>
        </div>
    );
};

export default Cart;