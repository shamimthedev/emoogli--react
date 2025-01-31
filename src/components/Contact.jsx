import { FaFacebookF, FaInstagram, FaPinterestP, FaTwitter } from "react-icons/fa"


const Contact = () => {
    return (
        <div className="bg-blue text-white p-[15px] flex justify-center">
            <div className="wrapper w-[60%] flex items-center justify-between">
                <span>BE IN TOUCH WITH US:</span>
                <div className="mail">
                    <input className="p-[10px] outline-none text-[#333] bg-white border-none rounded-l-[5px]" type="text" placeholder="Enter your email..." />
                    <button className="p-[10px] text-white bg-[#333] border-none rounded-r-[5px] uppercase">Join Us</button>
                </div>
                <div className="icons flex gap-[10px]">
                    <FaFacebookF />
                    <FaTwitter />
                    <FaPinterestP />
                    <FaInstagram />
                </div>
            </div>
        </div>
    )
}

export default Contact