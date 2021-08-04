import './style.scss';

export default function TestimonialItem(){
    return(
        <div className="testimonial-item">
            <div className="testimonial-image-person">
                <img src = "/assets/images/testimonialPerson.png"></img>
            </div>
            <p className="testimonial-text">Sed vel urna at dui iaculis gravida. Maecenas pretium, velit vitae placerat faucibus, velit quam facilisis elit, sit amet lacinia est est id ligula. Duis feugiat quam non justo faucibus, in gravida diam tempor. Nam viverra enim non ipsum ornare, condimentum blandit diam mattis. Maecenas gravida mol..</p>
            
            <img className="testimonial-comma" src = "/assets/images/testimonialComma.png"></img>
            
            <p className="testimonial-author">Gregory Milan</p>
        </div>
    )
}