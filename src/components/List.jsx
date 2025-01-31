import Card from './Card'

const List = () => {
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
        }
    ];
  return (
    <div>
        {data?.map(item=>(
            <Card item={item} key={item.id}/>
            
            ))}
    </div>
  )
}

export default List