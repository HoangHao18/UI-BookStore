import './style.scss';

export default function SubscriberSection(){
    return(
        <div className="subscriber-section">
            <p class="small-text">Special Ofers For Subscribers</p>
            <h3 class="title">Ten Percent Member Discount</h3>
            <p class="short-desc">Subscribe to our newsletters now and stay up to date with new collections, the latest lookbooks and exclusive offers.</p>
            <form className="form-s">
                <input type="email"  name="EMAIL" class="email email-box" placeholder="Your email address" required/>
                <button className="subscribe-btn" id="mc-embedded-subscribe" type="submit">SUBSCRIBE</button>
            </form>
        </div>
    )
}