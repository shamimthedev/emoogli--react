

const Footer = () => {
  return (
    <section className="mx-48 mt-24 mb-5 ">
      <div className="top flex gap-[50px]">
        <div className="item flex flex-col basis-full gap-[10px] text-gray-500">
          <h2 className='text-lg text-[#555] font-medium'>Categories</h2>
          <span>Women</span>
          <span>Men</span>
          <span>SHoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item flex flex-col basis-full gap-[10px] text-gray-500">
          <h2 className='text-lg text-[#555] font-medium'>Links</h2>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item flex flex-col basis-full gap-[10px] text-sm text-justify text-gray-500">
          <h2 className='text-lg text-[#555] font-medium'>About</h2>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas necessitatibus eum eaque? Eius laborum consectetur provident exercitationem aliquam.</span></div>
        <div className="item flex flex-col basis-full gap-[10px] text-sm text-justify text-gray-500">
          <h2 className='text-lg text-[#555] font-medium'>Contact</h2>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas necessitatibus eum eaque? Eius laborum consectetur provident exercitationem aliquam.</span></div>
      </div>
      <div className="bottom flex items-center justify-between mt-[50px]">
        <div className="left flex items-center">
          <span className="logo text-blue text-2xl font-bold">eMoogli</span>
          <span className="copyright text-xs text-gray-500 ml-5">© 2023 eMoogli. All rights reserved.</span>
        </div>
        <div className="right">
          <img src="/img/payment.png" alt="payment options" className="h-[50px]"/>
        </div>
      </div>
    </section>
  )
}

export default Footer