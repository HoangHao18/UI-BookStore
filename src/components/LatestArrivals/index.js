import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './style.scss'
import 'animate.css'
import ArrowNext from './ArrowNext'
import ArrowPrev from './ArrowPrev'
import ProductItem from "../shared/ProductItem";


const settings = {
    dots: false,
    infinite: true,  
    slidesToShow: 4,
    slidesToScroll: 1,
    // autoplay: true,
    speed: 1500,
    autoplaySpeed: 3000,
    //fade: true,
    // cssEase: "linear",
    nextArrow: <ArrowNext/>,
    prevArrow: <ArrowPrev/>,
    //dotsClass: "slick-dots custom-indicator"

}

export default function LatestArrivals(){
    return (
        <div className="latest-arrivals">
          <Slider {...settings}>
              <div>
                  <div className="item"><ProductItem/></div>  
              </div>
              <div>
                  <div className="item"><ProductItem/></div>  
              </div>
              <div>
                  <div className="item"><ProductItem/></div>  
              </div>
              <div>
                  <div className="item"><ProductItem/></div>  
              </div>
              <div>
                  <div className="item"><ProductItem/></div>  
              </div>
           
          </Slider>
        </div>
      );
}