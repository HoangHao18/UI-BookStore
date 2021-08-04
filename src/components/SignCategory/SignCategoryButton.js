import './SignCategoryButton.scss';
import { Link } from 'react-router-dom'
export default function SignCategoryButton({
    categoryName,
    number=0,
    desc="",
    linkTo="/"
}){
    const nameButton= categoryName + '(' + number + ')';
    return(
       <Link to={linkTo}>
           <button className="my-button sign-category-button">
               <h3 className="name">{nameButton}</h3>
               <span className="desc">{desc}</span>
           </button>
       </Link>
    )                                                  
}