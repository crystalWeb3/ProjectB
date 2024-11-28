import Ellipse from "../utils/Ellipse";
import PriceQuote from "../PriceQuote/index";
import IconLabel from "../utils/IconLabel";
import { StarIcon } from '@heroicons/react/24/solid';

interface DataType {
    icon: React.ReactNode,
    label?: string
}


const Test = () => {
    return (
        <div className="relative ctm-container pt-[135px] sm:pt-[140px] md:pt-[160px] lg:pt-[220px] sm:mb-[30px]">
            <Ellipse width="765px" height="765px" left="50%" top="-340px" opacity="0.2" className="hidden lg:block" zindex="10" />
            
        </div>
        
    )
}

export default Test;
