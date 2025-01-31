import { MdDeleteOutline } from "react-icons/md"


const Cart = () => {
    const data = [
        {
            id: 1,
            img: "https://images.pexels.com/photos/2033975/pexels-photo-2033975.jpeg?auto=compress&cs=tinysrgb&w=600",
            title: 'Graphic T-shirt',
            isNew: true,
            oldPrice: 19,
            price: 12,
            desc: 'lorem ipsum dolor kit, espa nio sa dolor apka thora.'
        },
        {
            id: 2,
            img: "https://images.pexels.com/photos/158648/girl-coat-old-coat-brown-coat-158648.jpeg?auto=compress&cs=tinysrgb&w=600",
            title: 'Coat',
            isNew: true,
            oldPrice: 21,
            price: 14,
            desc: 'lorem ipsum dolor kit, espa nio sa dolor apka thora.'
        }
    ]
    return (
        <div className="absolute top-[80px] right-[20px] z-50 p-[20px] bg-white shadow-md">
            <h1 className="text-gray-500 text-2xl font-[400] mb-[30px]">Products in your cart</h1>
            {data?.map(item => (
                <div key={item.id} className="item flex items-center mb-[30px] gap-[15px]">
                    <img src={item.img} alt="" className="w-20 h-[100px] object-cover"/>
                    <div className="details">
                        <h2 className="text-lg font-medium">{item.title}</h2>
                        <p className="text-gray-500 mb-[10px] text-sm">{item.desc?.substring(0, 100)}</p>
                        <div className="price text-blue">1 × $ {item.price}</div>
                    </div>
                    <MdDeleteOutline className="delete text-[30px] text-red-500 cursor-pointer" />
                </div>
            ))} 
            <div className="total flex justify-between font-medium text-lg mb-[20px]">
                <span className="subtotal">SUBTOTAL</span>
                <span className="subtotal">$320</span>
            </div>
            <button className="border-none bg-blue mb-[20px] font-medium cursor-pointer p-[10px] w-[250px] flex items-center justify-center text-white">PROCEED TO CHECKOUT</button>
            <span className="reset text-red-500 text-xs cursor-pointer">Reset cart</span>
        </div>
    )
}

export default Cart