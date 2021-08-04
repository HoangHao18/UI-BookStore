
import testimonialArea_bgr_img from '../../images/testimonialArea.png';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './style.scss'
import ArrowNext from './ArrowNext'
import ArrowPrev from './ArrowPrev'
import TestimonialItem from "../shared/TestimonialItem";

const settings = {
    dots: false,
    infinite: true,  
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    speed: 500,
    autoplaySpeed: 3000,
    //fade: true,
    // cssEase: "linear",
    nextArrow: <ArrowNext/>,
    prevArrow: <ArrowPrev/>,
    //dotsClass: "slick-dots custom-indicator"

}
export default function TestimonialArea(){
    return(
        <div className="testimonial-area" style={{backgroundImage: `url(${testimonialArea_bgr_img})`}}>
            <Slider {...settings}>
                <div>
                    <TestimonialItem/>
                </div>
                <div>
                    <TestimonialItem/>
                </div>
                <div>
                    <TestimonialItem/>
                </div>
            </Slider>
        </div>
    )
}