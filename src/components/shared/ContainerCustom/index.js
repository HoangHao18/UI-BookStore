import { Children } from "react";
import './style.scss';
export default function ContainerCustom({children}){
    return(
        <div className="container container-custom">
            {children}
        </div>
    )
}