import Card from "./Card";


const FeaturedProducts = ({type}) => {
    const data = [
        {
            id: 1,
            img: "https://images.pexels.com/photos/2033975/pexels-photo-2033975.jpeg?auto=compress&cs=tinysrgb&w=600",
            img2: "https://images.pexels.com/photos/2220316/pexels-photo-2220316.jpeg?auto=compress&cs=tinysrgb&w=600",
            title: 'Graphic T-shirt',
            isNew: true,
            oldPrice: 19,
            price: 12
        },
        {
            id: 2,
            img: "https://images.pexels.com/photos/158648/girl-coat-old-coat-brown-coat-158648.jpeg?auto=compress&cs=tinysrgb&w=600",
            img2: "https://images.pexels.com/photos/30447295/pexels-photo-30447295/free-photo-of-fashionable-woman-in-pink-coat-outdoors.jpeg?auto=compress&cs=tinysrgb&w=600",
            title: 'Coat',
            isNew: true,
            oldPrice: 21,
            price: 14
        },
        {
            id: 3,
            img: "https://images.pexels.com/photos/458649/pexels-photo-458649.jpeg?auto=compress&cs=tinysrgb&w=600",
            img2: "https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg?auto=compress&cs=tinysrgb&w=600",
            title: 'Hat',
            oldPrice: 17,
            price: 9
        },
        {
            id: 4,
            img2: "https://images.pexels.com/photos/158648/girl-coat-old-coat-brown-coat-158648.jpeg?auto=compress&cs=tinysrgb&w=600",
            img: "https://images.pexels.com/photos/30447295/pexels-photo-30447295/free-photo-of-fashionable-woman-in-pink-coat-outdoors.jpeg?auto=compress&cs=tinysrgb&w=600",
            title: 'Coat',
            isNew: true,
            oldPrice: 21,
            price: 14
        },
        {
            id: 5,
            img2: "https://images.pexels.com/photos/458649/pexels-photo-458649.jpeg?auto=compress&cs=tinysrgb&w=600",
            img: "https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg?auto=compress&cs=tinysrgb&w=600",
            title: 'Hat',
            oldPrice: 17,
            price: 9
        },
        {
            id: 6,
            img2: "https://images.pexels.com/photos/2033975/pexels-photo-2033975.jpeg?auto=compress&cs=tinysrgb&w=600",
            img: "https://images.pexels.com/photos/2220316/pexels-photo-2220316.jpeg?auto=compress&cs=tinysrgb&w=600",
            title: 'Graphic T-shirt',
            isNew: true,
            oldPrice: 19,
            price: 12
        },
    ];
    return (
        <div className="my-[100px] mx-[200px]">
            <div className="top flex items-center justify-between mb-12">
                <h2 className="basis-1/2 capitalize font-bold text-[30px]">{type} Products</h2>
                <p className="basis-2/3 text-gray-500 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo atque, voluptatem rem obcaecati praesentium in perferendis numquam tenetur corporis totam et, sequi natus ipsam animi quam iure perspiciatis veniam ex quaerat aut mollitia porro ratione placeat. Possimus odio facilis deleniti.</p>
            </div>
            <div className="bottom flex justify-center gap-12 flex-wrap">
                {data.map((item) => (
                    <Card item={item} key={item.id} />
                ))}
            </div>
        </div>
    )
}

export default FeaturedProducts