
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './style.scss'
import 'animate.css'
import ArrowNext from './ArrowNext'
import ArrowPrev from './ArrowPrev'


const settings = {
    dots: true,
    infinite: true,  
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    speed: 500,
    autoplaySpeed: 3000,
    fade: true,
    // cssEase: "linear",
    nextArrow: <ArrowNext/>,
    prevArrow: <ArrowPrev/>,
    dotsClass: "slick-dots custom-indicator"

}


export default function HeaderSlider(){
    return (
        <div className="header-slider">
          <Slider {...settings}>
            <div className="img-slider">
                <img src = "/assets/images/headerSlider01.png"></img>
                <div className="content-header-slider">
                  <p className="first-chs">New Arrivals</p>
                  <p className="second-chs">Book Sale Shop</p>
                  <p className="third-chs">Next generation LED lamp. A multi-function LED lamp that is environmentally friendly and soft on the eyes.</p>

                </div>
               
            </div>
            <div>
                <img src = "/assets/images/headerSlider02.png"></img>
                <div className="content-header-slider">
                  <p className="first-chs">New Arrivals</p>
                  <p className="second-chs">Latest Book</p>
                  <p className="third-chs">Next generation LED lamp. A multi-function LED lamp that is environmentally friendly and soft on the eyes.</p>

                </div>
            </div>
            <div>
                <img src = "/assets/images/headerSlider03b.png"></img>
                <div className="content-header-slider">
                  <p className="first-chs">New Arrivals</p>
                  <p className="second-chs">Best Book Shop</p>
                  <p className="third-chs">Next generation LED lamp. A multi-function LED lamp that is environmentally friendly and soft on the eyes.</p>

                </div>
            </div>
          </Slider>
        </div>
      );
}