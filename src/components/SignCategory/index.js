import SignCategoryItem from "./SignCategoryItem";


export default function SignCategory(){
    return(
        <div className=" sign-category-container">
            <div className="row">
                <div className="col-sm-4 item">
                    <SignCategoryItem
                        img="/assets/images/signCategory01.png"
                        categoryName="Adventure" 
                        number="20"
                        desc="explore now" 
                        linkTo="/"
                    />
                </div>
                <div className="col-sm-4 item">
                    <SignCategoryItem
                        img="/assets/images/signCategory02.png"
                        categoryName="Cook" 
                        number="20"
                        desc="explore now" 
                        linkTo="/"
                    />
                </div>
                <div className="col-sm-4 item">
                    <SignCategoryItem
                        img="/assets/images/signCategory03.png"
                        categoryName="Children" 
                        number="20"
                        desc="explore now" 
                        linkTo="/"
                    />
                </div>
            </div>
        </div>
    )
}