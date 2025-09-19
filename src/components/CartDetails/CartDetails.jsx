const CartDetails = ({item}) => {

    return (
        <div>
            <img src={item.img} alt={item.name} className="w-[80px] rounded-xs"/>
        </div>
    );
};

export default CartDetails;