import BlogBox from "../../components/shared/BlogBox";
import HeaderBar from "../../components/HeaderBar";
import HeaderImage from "../../components/shared/HeaderImage";
import BrokenLine from "../../components/shared/BrokenLine";

export default function Blog(){
    return(
        <div className="blog-page-container">
            <HeaderBar/>
            <HeaderImage img= "/assets/images/testimonialArea.png" title="Blog"/>
            <BrokenLine height="20"/>
            <div className="container">
                <div className="row">
                    <div className="col-8 list-blog">
                        <BlogBox/>
                        <BlogBox/>
                        <BlogBox/>
                    </div>

                    <div className="col-4 right-bar">

                    </div>

                </div>
            </div>
            <BrokenLine height="20"/>
        </div>
    );
}