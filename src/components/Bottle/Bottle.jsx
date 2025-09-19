const Bottle = ({bottle, handleAddToCart, handleRemoveFromCart}) => {
    const {name, img, price} = bottle;
    return ( 
        <div className=" bg-gray-300 shadow-gray-50 rounded-xl p-4">
            <img className="mb-4 rounded-xl" src={img} alt={name} />
            <h4 className="text-lg font-semibold mb-1">{name}</h4>
            <p className="mb-2">Price: {price*20} BDT.</p>
            <div className="flex gap-4 flex-wrap">
                <button className="cursor-pointer border py-1 px-4 rounded-4xl bg-amber-700 hover:bg-amber-800 text-white" onClick={() => handleAddToCart(bottle)}>Add to Cart</button>
                <button className="cursor-pointer border py-1 px-4 rounded-4xl bg-amber-700 hover:bg-amber-800 text-white" onClick={() => handleRemoveFromCart(bottle)}>Remove from Cart</button>
            </div>
        </div>
    );
};

export default Bottle;