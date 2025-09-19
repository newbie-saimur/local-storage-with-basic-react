const CartDetails = ({item}) => {

    return (
        <div>
            <img src={item.img} alt={item.name} className="w-[80px]"/>
        </div>
    );
};

export default CartDetails;