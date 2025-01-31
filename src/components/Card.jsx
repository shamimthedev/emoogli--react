import { Link } from "react-router-dom"


const Card = ({ item }) => {
    return (
        <Link to={`/product/${item.id}`}>
            <div className="w-[280px] mb-[50px] flex flex-col gap-[10px]">
                <div className="image w-full h-[400px] overflow-hidden relative group">
                    {item.isNew && <span className="absolute top-[5px] left-[5px] bg-white text-teal-500 text-[12px] font-medium px-[5px] py-[3px] z-10">New Season</span>}
                    <img src={item.img} alt={item.title}  className="w-full h-full object-cover absolute z-1"/>
                    <img src={item.img2} alt={item.title} className="w-full h-full object-cover absolute group-hover:z-2"/>
                </div>
                <h2 className="font-[400]">{item.title}</h2>
                <div className="prices flex gap-5">
                    <h3 className="text-lg font-medium text-gray-500 line-through">${item.oldPrice}</h3>
                    <h3 className="text-lg font-medium">${item.price}</h3>
                </div>
            </div>
        </Link>
    )
}

export default Card