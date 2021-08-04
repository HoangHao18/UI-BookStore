
import './Arrow.scss'
import { ChevronBackOutline, ChevronForwardOutline } from 'react-ionicons'
export default function ArrowNext(props){
    return (
        <span className="arrow nextArrow" onClick={props.onClick}>
           <ChevronForwardOutline 
              color={'inherit'}
              title={"next-arrow"}
              height="40px"
              width="40px"
          />
        </span>
    );
}