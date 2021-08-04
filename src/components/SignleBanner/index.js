import './style.scss';
import { Link } from 'react-router-dom'

export default function SignleBanner(){
    return(
        <div className="signle-banner">
            <div className="row">
                <div className="signle-banner-item signle-banner-left col-md-6">
                    <Link to="/"><img src="/assets/images/signBanner01.png"></img></Link>
                </div>
                <div className="signle-banner-item signle-banner-right col-md-6">
                    <Link to="/"><img src="/assets/images/signBanner02.png"></img></Link>
                </div>
            </div>
        </div>
    )
}