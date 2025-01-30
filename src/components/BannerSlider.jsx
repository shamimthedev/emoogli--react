import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const slides = [
    {
        id: 1,
        img: "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600"
    },
    {
        id: 2,
        img: "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600"
    },
    {
        id: 3,
        img: "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600"
    }
]

const BannerSlider = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div className="overflow-hidden w-full relative">
            <Slider {...settings}>
                {
                    slides.map((slide) => (
                        <div className="h-[calc(100vh-80px)] w-full" key={slide.id}>
                            <img src={slide.img} alt="" className="w-full object-cover" />
                        </div>
                    ))
                }
            </Slider>
            <style>{`
                .slick-dots {
                    bottom: 20px; /* Adjust dot position if necessary */
                    z-index: 10;
                }
                .slick-dots li button:before {
                    color: white; /* Change the dot color if needed */
                }
            `}</style>
        </div>
    );
}

export default BannerSlider;
