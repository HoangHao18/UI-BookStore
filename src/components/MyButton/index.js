import './style.scss';
import { Link } from 'react-router-dom'

// export default function Button({nameButton,isRadios = false,linkTo="/"}){
//     if(isRadios){
//         return(
//            <Link to={linkTo}><button className="my-button radios">{nameButton}</button></Link>
//         ) 
//     }
//     return(
//         <Link to={linkTo}><button className="my-button">{nameButton}</button></Link>
//     )
// }

export default function Button({
    nameButton,
    desc="",
    isBorder=false,
    linkTo="/", 
    typeButton="",
    number=0}){

    if(typeButton==="sign-category"){
        nb= nameButton + '(' + number + ')';
        return(
           <Link to={linkTo}><button className="my-button sign-category-button">{nb}<span>{desc}</span></button></Link>
        ) 
    }
    return(
        <Link to={linkTo}><button className="my-button">{nameButton}</button></Link>
    )
}