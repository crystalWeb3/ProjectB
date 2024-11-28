import Image from "next/image";
import AuthAvatarGroup from '../components/utils/AuthAvatarGroup';
import CurrencySelector from '../components/utils/CurrencySelector';

interface CurrencyType {
    src?: string,
    name: string,
    sign: string,
}

const currencys: CurrencyType[] = [
    { name: 'USD $', sign: '$'},
    {  name: 'CAD $', sign: '$'},
    // { src: '/images/navbar/eu_flg.png', name: 'EUR', sign: '€'},
    {  name: 'GBP £', sign: '£'},
]


const Index = () => {
    return (
        <div className='flex justify-between items-center'>
            <div className='relative'>
                <span className="absolute top-1/2 left-[17px] translate-y-[-50%] z-10">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M5.91314 10.9825C8.6266 10.9825 10.8263 8.78285 10.8263 6.06939C10.8263 3.35594 8.6266 1.15625 5.91314 1.15625C3.19969 1.15625 1 3.35594 1 6.06939C1 8.78285 3.19969 10.9825 5.91314 10.9825Z" stroke="#B7B7B7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M9.71644 9.87535L12.8045 12.9635" stroke="#B7B7B7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </span>
                <input type="text" placeholder='Search' className='main-input bordered input-sm !pl-[40px]' />
            </div>

            <div className="flex items-center gap-3">
                <span className='inline-flex items-center text-xl gap-1 text-md '>Currency: </span>
                <span>
                    <CurrencySelector currencys={currencys} />
                </span>
                <AuthAvatarGroup />
            </div> 
        </div>
    )
}

export default Index;