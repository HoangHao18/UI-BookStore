
import './Arrow.scss'
import { ChevronBackOutline, ChevronForwardOutline } from 'react-ionicons'
export default function ArrowPrev(props){
    return (
        <span className="arrow prevArrow" onClick={props.onClick}>
          <ChevronBackOutline
            color={'inherit'} 
            title={"prev-arrow"}
            height="20px"
            width="20px"
          />
        </span>
    );
}