import { NavLink, Route } from 'react-router-dom';
import ProductListSlider from '../ProductListSlider';
import './style.scss';

const list = [
    {
        name: "Adventure",
        link: "/"
    },
    {
        name: "Biographic",
        link: "/biographict"
    },
    {
        name: "Children",
        link: "/children"
    },
    {
        name: "Cook",
        link: "/cook"
    }
]
export default function ProductNavigation({
    categoryList=list
}){
    return(    
        <div className="product-navigation">
            <div className="nav-tabs-">
                {
                    categoryList.map((item,index)=>{
                        return(
                            <NavLink exact to={item.link} className="nav-item" activeClassName="active">{item.name}</NavLink>
                            // {
                            //     if(className=="nav-item active"){

                            //     }
                            // }
                        )
                    }

                    )
                }
                {/* <a className="nav-item" ve">Adventure</a> */}
            </div>
            {/* <Route path={`${match.url}${item.link}`} component={ProductListSlider}/> */}
        </div>
    )
}