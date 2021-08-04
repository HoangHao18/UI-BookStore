import './style.scss';
import ProductItem from "../shared/ProductItem";


export default function ProductWidget(){
    return(
        <div className="product-widget">
            <div className="row">
                <div className="col-lg-4">
                     <div className="product-widget-title"><h3>Special</h3></div>
                     <div className="product-widget-list">
                        <div className="product-widget-item"><ProductItem isHorizontal={true}/></div>
                        <div className="product-widget-item"><ProductItem isHorizontal={true}/></div>
                        <div className="product-widget-item"><ProductItem isHorizontal={true}/></div>
                     </div>
                </div>

                <div className="col-lg-4">
                     <div className="product-widget-title"><h3>Latest</h3></div>
                     <div className="product-widget-list">
                        <div className="product-widget-item"><ProductItem isHorizontal={true}/></div>
                        <div className="product-widget-item"><ProductItem isHorizontal={true}/></div>
                        <div className="product-widget-item"><ProductItem isHorizontal={true}/></div>
                     </div>
                </div>

                <div className="col-lg-4">
                     <div className="product-widget-title"><h3>Top</h3></div>
                     <div className="product-widget-list">
                        <div className="product-widget-item"><ProductItem isHorizontal={true}/></div>
                        <div className="product-widget-item"><ProductItem isHorizontal={true}/></div>
                        <div className="product-widget-item"><ProductItem isHorizontal={true}/></div>
                     </div>
                </div>

            </div>
        </div>
    )
}