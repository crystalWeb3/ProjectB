import Ellipse from "../utils/Ellipse";
import PriceQuote from "../PriceQuote/index";
import IconLabel from "../utils/IconLabel";
import { StarIcon } from '@heroicons/react/24/solid';

interface DataType {
    icon: React.ReactNode,
    label?: string
}

const icon_labels: DataType[] = [
    { 
        icon: (
            <svg width="40" height="39" viewBox="0 0 40 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M30.3906 9.24789V38.9823H0.65625V9.24789H30.3906ZM39.541 0.0986328V29.8353H32.6792V6.96042H9.80438V0.0986328H39.541ZM7.51803 20.6842H23.5288V18.3969H7.51803V20.6842ZM7.51803 25.2587H18.9543V22.9714H7.51803V25.2587ZM7.51803 29.8355H23.5288V27.546H7.51803V29.8355Z" fill="#007DFC"/>
            </svg>
        ), 
        label: 'Plagiarism-free Content & Papers' 
    },
    { 
        icon: (
            <svg width="36" height="39" viewBox="0 0 36 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.657 0.193359V13.9686C20.007 14.7447 21.5737 16.8789 21.5737 19.4011C21.5737 20.3712 21.3778 21.3413 20.7903 22.1174L24.707 25.2217C24.9028 25.2217 25.0987 25.0277 25.4903 25.0277C26.6653 25.0277 27.4487 25.8037 27.4487 26.9678C27.4487 28.132 26.6653 28.908 25.4903 28.908C24.3153 28.908 23.532 28.132 23.532 26.9678V26.7738L19.6153 23.6695C18.6362 24.6396 17.2653 25.2217 15.6987 25.2217C12.3695 25.2217 9.82367 22.6994 9.82367 19.4011C9.82367 16.8789 11.3903 14.7447 13.7403 13.9686V0.387377H13.5445C6.69034 1.16345 1.01117 6.78997 0.22784 13.7746C-0.35966 18.043 0.81534 21.9234 3.16534 25.0277C4.92784 27.3559 5.90701 29.8781 5.90701 32.7884V38.997H23.532V33.1764H27.4487C29.6028 33.1764 31.3653 31.4303 31.3653 29.2961V23.4755L34.3028 22.3114C35.0862 21.9234 35.4778 20.7593 35.0862 19.9832L31.3653 14.1627C30.582 6.98399 24.9028 1.16345 17.657 0.193359ZM15.6987 16.6849C14.132 16.6849 12.7612 18.043 12.7612 19.5952C12.7612 21.1473 14.132 22.5054 15.6987 22.5054C17.2653 22.5054 18.6362 21.1473 18.6362 19.5952C18.6362 18.043 17.2653 16.6849 15.6987 16.6849Z" fill="#007DFC"/>
            </svg>
        ), 
        label: '24/7 Support' 
    },
    { 
        icon: (
            <svg width="41" height="37" viewBox="0 0 41 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M26.9062 1.69434H24.3438L16.6562 8.52714L24.3438 15.36H26.9062V10.8047H30.75V23.8053C28.4873 24.684 26.9062 26.6906 26.9062 29.0256C26.9062 32.1703 29.7745 34.7196 33.3125 34.7196C36.8505 34.7196 39.7188 32.1703 39.7188 29.0256C39.7188 26.6906 38.1377 24.684 35.875 23.8053V6.24954H26.9062V1.69434Z" fill="#007DFC"/>
                <path d="M16.6562 35.8582L24.3438 29.0254L16.6562 22.1926H14.0938V26.7478H10.25V13.7472C12.5126 12.8686 14.0938 10.8619 14.0938 8.52702C14.0938 5.38231 11.2256 2.83301 7.6875 2.83301C4.14943 2.83301 1.28125 5.38231 1.28125 8.52702C1.28125 10.8619 2.86244 12.8686 5.125 13.7472V31.303H14.0938V35.8582H16.6562Z" fill="#007DFC"/>
            </svg>
        ), 
        label: 'Free revisions' 
    },
]

const Header = () => {
    return (
        <div className="relative ctm-container pt-[135px] sm:pt-[140px] md:pt-[160px] lg:pt-[220px] sm:mb-[30px]">
            <Ellipse width="765px" height="765px" left="50%" top="-340px" opacity="0.2" className="hidden lg:block" zindex="10" />
            <div className="flex flex-col xl:flex-row lg:items-start md:px-5 lg:px-10 gap-8 lg:gap-5">
                <div className="w-full 2xl:w-1/2 flex flex-col items-center lg:items-start gap-2 sm:gap-3 md:gap-4 lg:gap-5 text-center lg:text-start p-5 pt-3 pb-0">
                    <div className="flex gap-2 items-center">
                        <StarIcon width={23} className="star" />
                        <StarIcon width={23} className="star" />
                        <StarIcon width={23} className="star" />
                        <StarIcon width={23} className="star" />
                        <StarIcon width={23} className="star" />
                        <span className="text-xl text-[#595959]" > 5.0 (225)</span>
                    </div>
                    <h1 className="banner-title">
                        Custom Copywriting Services
                    </h1>
                    <p className="banner-content">
                        Lörem ipsum krons astroll parar. Vabamass hemirulig dåhusäbelt, desaktiv säkanera. Mikrotisam enode kasäpreska binera ren.
                    </p>
                    <div className="hidden lg:flex flex-col justify-start pl-[10px] sm:pl-[20px] md:pl-10 lg:pl-0 gap-6">
                        {icon_labels.map((itm, idx) => (
                            <IconLabel icon={itm.icon} label={itm.label} key={idx} />
                        ))}
                    </div>
                </div>
                <div className="w-full px-7 lg:p-0 xl:w-auto flex justify-center relative">
                    <PriceQuote className='sm:w-[570px] z-40' />
                    <Ellipse width="300px" height="300px" left="80px" top="100px" opacity="0.2" className="hidden md:block" zindex="10"/>
                    <Ellipse width="300px" height="300px" left="85%" top="450px" opacity="0.2" className="hidden md:block" zindex="10"/>
                </div>
                <div className="flex lg:hidden flex-col items-center lg:justify-start sm:pl-[20px] pt-3 lg:pt-0 gap-6">
                    {icon_labels.map((itm, idx) => {
                        let classname = '';
                        if(idx === 1) classname = 'pr-[100px]';
                        return  <IconLabel icon={itm.icon} label={itm.label} key={idx} className={classname} />
                    })}
                </div>
            </div>
        </div>
        
    )
}

export default Header;
