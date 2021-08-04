import ContainerCustom from "../../components/shared/ContainerCustom"
import HeaderSlider from "../../components/HeaderSlider"
import SignCategory from "../../components/SignCategory"
import BrokenLine from "../../components/shared/BrokenLine"
import SectionTitle from "../../components/shared/SectionTitle"
import ProductItem from "../../components/shared/ProductItem"
import LatestArrivals from "../../components/LatestArrivals"
import TestimonialArea from "../../components/TestimonialArea"
import SignleBanner from "../../components/SignleBanner"
import ProductWidget from "../../components/ProductWidget"
import FeatureLogo from "../../components/FeatureLogo"
import ListBlogBox from "../../components/ListBlogBox"
import SubscriberSection from "../../components/SubscriberSection"
import ProductNavigation from "../../components/ProductNavigation"
import ProductListSlider from "../../components/ProductListSlider"



export default function Home(){
    return(
        <div>
            <HeaderSlider/>
           
            <ContainerCustom>
                <BrokenLine/>
                <SignCategory/>

                <BrokenLine/>
                <SectionTitle
                    title = "Our Products"
                    subtitle = "Mirum est notare quam littera gothica, quam nunc putamus parum claram anteposuerit litterarum formas."
                />
                <ProductNavigation/>
                <BrokenLine height="30"/>
                <ProductListSlider/>

            </ContainerCustom>  
           
            <BrokenLine/>
            <TestimonialArea/>

            <ContainerCustom>
                <BrokenLine/>
                <SectionTitle
                    title = "Latest Arrivals"
                    subtitle = "Mirum est notare quam littera gothica, quam nunc putamus parum claram anteposuerit litterarum formas."
                />
                <LatestArrivals/>

                <BrokenLine/>
                <SignleBanner/>

                <BrokenLine/>
                <ProductWidget/>

                <BrokenLine height="50"/>
                <FeatureLogo/>

                <BrokenLine/>
                <SectionTitle
                    title = "Latest Blog Posts"
                    subtitle = "Mirum est notare quam littera gothica, quam nunc putamus parum claram anteposuerit litterarum formas."
                />
                <ListBlogBox/>

                <BrokenLine/>
                <SubscriberSection/>
                <BrokenLine/>
               
            </ContainerCustom>
            
        </div>
    )
}