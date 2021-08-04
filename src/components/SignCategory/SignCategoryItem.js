import SignCategoryButton from "./SignCategoryButton";
import "./SignCategoryItem.scss";

export default function SignCategoryItem({
    categoryName,
    number=0,
    desc="",
    linkTo="/",
    img
}){
    return(
        <div className="Sign-category-item">
            <div className="image-sci"><img src={img}></img></div>
            <SignCategoryButton 
                categoryName={categoryName} 
                number={number} 
                desc={desc} 
                linkTo={linkTo}
            />        
        </div>
    )
}