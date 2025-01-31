import { useState } from "react"
import '../Product.scss'
import { MdAddShoppingCart } from "react-icons/md"
import { FaBalanceScaleLeft } from "react-icons/fa"
import { FaRegHeart } from "react-icons/fa6"

const Product = () => {
  const [selectedImg, setSelectedImg] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const images = [
    'https://images.pexels.com/photos/871495/pexels-photo-871495.jpeg?auto=compress&cs=tinysrgb&w=600', 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=600'
  ]
  return (
    <div className="product py-[20px] px-[50px] flex gap-[50px]">
      <div className="left">
        <div className="images">
          <img src={images[0]} alt="" onClick={e => setSelectedImg(0)} />
          <img src={images[1]} alt="" onClick={e => setSelectedImg(1)} />
        </div>
        <div className="mainImg">
          <img src={images[selectedImg]} alt="" />
        </div>
      </div>
      <div className="right">
        <h1 className="title text-[30px]">Graphic T-Shirt</h1>
        <span className="price text-blue">$49</span>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea quo quisquam delectus itaque ipsa aspernatur quibusdam ipsum quidem amet saepe, deserunt error non. Doloribus assumenda eum aperiam perferendis accusantium animi?</p>
        <div className="quantity">
          <button onClick={() => setQuantity(prev => prev === 1 ? 1 : prev - 1)}>-</button>
          {quantity}
          <button onClick={() => setQuantity(prev => prev + 1)}>+</button>
        </div>
        <div className="add">
          <MdAddShoppingCart />
          <button className="uppercase">Add to cart</button>
        </div>
        <div className="links">
          <div className="item uppercase"><FaRegHeart />Add to wishlist</div>
          <div className="item uppercase"><FaBalanceScaleLeft />Add to compare</div>
        </div>
        <div className="info">
          <span>Vendor: Polo</span>
          <span>Product Type: T-shirt</span>
          <span>Tags: T-shirt, Women, Tops</span>
        </div>
        <hr />
        <div className="info">
          <span>DESCRIPTION</span>
          <hr />
          <span>ADDITIONAL INFORMATION</span>
          <hr />
          <span>FAQ</span>
        </div>
      </div>
    </div >
  )
}

export default Product