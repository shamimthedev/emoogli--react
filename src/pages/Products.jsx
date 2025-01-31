import { useParams } from "react-router-dom"
import List from "../components/List"
import { useState } from "react"
import "../Products.scss"

const Products = () => {
  const catId = parseInt(useParams().id)
  const [maxPrice, setMaxPrice] = useState(1000)
  const [sort, setSort] = useState("asc")
  return (
    <div className="products flex py-[30px] px-[50px]">
      <div className="left">
        <div className="filterItem">
          <h2 className='text-2xl'>Product Categories</h2>
          <div className="input-items">
            <input type="checkbox" id='1' value={1} />
            <label htmlFor="1">Shoes</label>
          </div>
          <div className="input-items">
            <input type="checkbox" id='2' value={2} />
            <label htmlFor="2">Skirts</label>
          </div>
          <div className="input-items">
            <input type="checkbox" id='3' value={3} />
            <label htmlFor="3">Coats</label>
          </div>
        </div>
        <div className="filterItem">
          <h2 className='text-2xl'>Filter by Price</h2>
          <div className="input-items">
            <span>0</span>
            <input type="range" min={0} max={1000} onChange={(e) => setMaxPrice(e.target.value)}/>
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className="filterItem">
          <h2 className='text-2xl'>Sort by</h2>
          <div className="input-items">
            <input type="radio" id='asc' value="asc" name="price" onChange={e=> setSort("asc")}/>
            <label htmlFor="asc">Price (Lowest first)</label>
          </div>
          <div className="input-items">
            <input type="radio" id='desc' value="desc" name="price" onChange={e=> setSort('desc')}/>
            <label htmlFor="desc">Price (Highest first)</label>
          </div>
        </div>
      </div>
      <div className="right">
      <img
          className="catImg"
          src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
        />
        <List catId={catId} maxPrice={maxPrice} sort={sort}/>
      </div>
    </div>
  )
}

export default Products