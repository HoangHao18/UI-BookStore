import './style.scss';
import { BagAddOutline } from 'react-ionicons'
import { HeartOutline } from 'react-ionicons'
import { OpenOutline } from 'react-ionicons'


export default function ProductItem({
    image="",
    isHorizontal=false

}){
   if(isHorizontal == true){
       return(
        <div className="product-item-wrapper horizontal">
            <div className="image-product-item">
                {/* <div className="label-discount">-27%</div> */}
                <img src="/assets/images/productItem03A.png"></img>
                {/* <img src="/assets/images/productItem03B.png"></img>
                <div className="hover-icons">
                    <BagAddOutline cssClasses="icon-cart" width="25px" height="25px"/>
                    <OpenOutline cssClasses="icon-quick-review" width="25px" height="25px"/>
                </div> */}
            </div>
            <div className="content-product-item">
                <div className="product-rating">
                    <span className="left-rate">Vendor</span>
                    <div className="right-rate">
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                    </div>
                </div>
                <h3 className="product-name">Test Product</h3>
                <p className="product-price">
                    <span className="discounted-price">$20.00</span>
                    <span className="main-price discounted">$30.00</span>
                </p>
            </div>

        </div>
       )
   }
    return(
        <div className="product-item-wrapper">
            <div className="image-product-item">
                <div className="label-discount">-27%</div>
                <img src="/assets/images/productItem03A.png"></img>
                <img src="/assets/images/productItem03B.png"></img>
                <div className="hover-icons">
                    <BagAddOutline cssClasses="icon-cart" width="25px" height="25px"/>
                    <OpenOutline cssClasses="icon-quick-review" width="25px" height="25px"/>
                </div>
            </div>
            <div className="content-product-item">
                <div className="product-rating">
                    <span className="left-rate">Vendor</span>
                    <div className="right-rate">
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                    </div>
                </div>
                <h3 className="product-name">Test Product</h3>
                <p className="product-price">
                    <span className="discounted-price">$20.00</span>
                    <span className="main-price discounted">$30.00</span>
                </p>
            </div>

        </div>
    )
}