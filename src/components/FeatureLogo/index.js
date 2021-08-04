import BrokenLine from '../shared/BrokenLine';
import './style.scss';

export default function FeatureLogo(){
    return(
        <div className="feature-logo">
            <div className="row">
                <div className="col-md-4">
                    <div className="feature-logo-item">
                        <div className="item-image">
                            <img src="/assets/images/featureLogo01.png"></img>
                        </div>
                        <div className="item-content">
                            <h4 class="title">FREE SHIPPING WORLDWIDE</h4>
                            <p class="desc">We offer free shipping via Standard Shipping on orders over $200.00</p>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="feature-logo-item">
                        <div className="item-image">
                            <img src="/assets/images/featureLogo02.png"></img>
                        </div>
                        <div className="item-content">
                            <h4 class="title">MONEY BACK GUARANTEE</h4>
                            <p class="desc">We offer free shipping via Standard Shipping on orders over $200.00</p>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="feature-logo-item">
                        <div className="item-image">
                            <img src="/assets/images/featureLogo03.png"></img>
                        </div>
                        <div className="item-content">
                            <h4 class="title">ONLINE SUPPORT 24/7</h4>
                            <p class="desc">We offer free shipping via Standard Shipping on orders over $200.00</p>
                        </div>
                    </div>
                </div>

            </div>
            <BrokenLine/>
        </div>
    )
}