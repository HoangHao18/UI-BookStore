import './style.scss'

export default function Footer(){
    return(
        <div className="footer">
            <div className="row footer-container">
                <div class="col-lg-5 col-md-9">
                    <div className="footer-short-desc">
                        <div class="image">
                            <img src="/assets/images/susan.png"></img>
                        </div>
            
                        <div class="message">
                            <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis.</p>
                            <p>Address : 165 Man Thien, Hiep Phu, Quan 9, TP. Ho Chi Minh</p>
                            <p>Phone : 0248972014</p>
                            <p>Email : trontron@gmail.com</p>
                        </div>
                    </div>
                </div>

                <div className="col-lg-2 offset-lg-1 col-sm-4">
                    <h3 class="single-footer-title">Business Hours</h3>
                    <div className="single-footer-content">
                        <p class="time">Mon - Fri: 8AM - 10PM</p>
                        <p class="time">Sat: 9AM-8PM</p>
                        <p class="time">Sun: Closed</p>
                    </div>
                </div>

                <div className="col-lg-2 col-sm-4">
                    <h3 class="single-footer-title">Footer Menu</h3>
                    <div className="single-footer-content">
                        <ul >
                            <li><a>Home</a></li>
                            <li><a>Shop</a></li>
                            <li><a>Blog</a></li>
                            <li><a>About</a></li>
                            <li><a>Contact</a></li>
                        </ul>
                    </div>
                </div>

                <div className="col-lg-2 col-sm-4">
                    <h3 class="single-footer-title">Extras Menu</h3>
                    <div className="single-footer-content">
                        <ul >
                            <li><a>About Us</a></li>
                            <li><a>Our Office</a></li>
                            <li><a>Delivery</a></li>
                            <li><a>Our Store</a></li>
                            <li><a>Guarantee</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}