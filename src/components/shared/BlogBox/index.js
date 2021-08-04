import BrokenLine from '../BrokenLine'
import './style.scss'

export default function BlogBox(){
    return(
        <div className="blog-box">
            <div className="bb-image">
                <img src="/assets/images/blogBox03.png"></img>  
            </div>
            <div className="bb-info">
                <a className="bb-title">Reading has a signficant info number of benefits</a>
                <div className="bb-author-date">By <span className="bb-author">Sherry</span> on <span className="bb-date">May 26, 2021</span></div>
                <p className="bb-des">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, ipsum...</p>
            </div>
            <BrokenLine/>
        </div>
    )
}