"use client"
import Slider from "react-slick";
import React, { useRef } from "react";
import CustomNextArrow from "../utils/CustomNextArrow";
import CustomPrevArrow from "../utils/CustomPrevArrow";
import IconButton from "../utils/IconButton";

// CAROUSEL DATA

interface DataType {
    title: string;
    icon: React.ReactNode;
    content: string;
    price: string;
}

const postData: DataType[] = [
    {
        title: 'Editing Services',
        icon: (
            <svg width="42" height="43" viewBox="0 0 42 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M32.3885 8.28475C29.1197 4.9977 25.924 4.92465 22.5639 8.28475L20.5003 10.33C20.3177 10.5126 20.2629 10.7683 20.336 11.0057C21.6143 15.4798 25.1935 19.059 29.6676 20.3373C29.7224 20.3556 29.8137 20.3556 29.8685 20.3556C30.0511 20.3556 30.2337 20.2825 30.3615 20.1547L32.3885 18.1094C34.0503 16.4476 34.8721 14.8589 34.8721 13.2336C34.8721 11.5901 34.0503 9.9648 32.3885 8.28475Z" fill="#007DFC"/>
                <path d="M26.6154 21.8695C26.1224 21.6321 25.6476 21.3947 25.2093 21.1208C24.8441 20.9017 24.4789 20.6643 24.1319 20.4087C23.8397 20.226 23.511 19.9521 23.1823 19.6782C23.1458 19.6599 23.0362 19.5686 22.8901 19.4225C22.324 18.966 21.7214 18.3451 21.1553 17.6694C21.1188 17.6329 21.0092 17.5234 20.9179 17.359C20.7353 17.1581 20.4613 16.8112 20.2239 16.4277C20.0231 16.172 19.7857 15.8068 19.5665 15.4233C19.2926 14.9668 19.0552 14.5102 18.8361 14.0354C18.5987 13.5241 18.4161 13.0493 18.2517 12.5928L8.4271 22.4173C7.78795 23.0565 7.16706 24.2617 7.03923 25.1566L6.25399 30.5985C6.08964 31.7489 6.40008 32.8264 7.11228 33.5385C7.71491 34.1412 8.53667 34.4516 9.44974 34.4516C9.65062 34.4516 9.85149 34.4334 10.0524 34.4151L15.476 33.6481C16.3708 33.5203 17.576 32.9177 18.2152 32.2603L28.0398 22.4356C27.5833 22.2895 27.1268 22.0886 26.6154 21.8695Z" fill="#007DFC"/>
            </svg>
        ),
        content: 'Lörem ipsum krons astroll parar.Vabamass hemirulig dåhusäbelt, desaktiv säkanera. Mikrotisam enode kasäpreska ',
        price: '11.40',
    },
    {
        title: 'Writing Services',
        icon: (
            <svg width="37" height="40" viewBox="0 0 37 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M30.9008 13.18V2.4616C30.9008 1.59346 30.197 0.889648 29.3288 0.889648H1.86102C0.992871 0.889648 0.289062 1.59346 0.289062 2.4616V37.8084C0.289062 38.6766 0.992871 39.3804 1.86102 39.3804H29.329C30.1971 39.3804 30.9009 38.6766 30.9009 37.8084V24.2394L34.927 20.2133L34.9271 20.2132C37.9522 17.1876 35.02 12.1171 30.9008 13.18ZM6.68198 6.78106H24.508C25.3761 6.78106 26.08 7.48487 26.08 8.35309C26.08 9.22131 25.3762 9.92505 24.508 9.92505H6.68198C5.81383 9.92505 5.11003 9.22124 5.11003 8.35309C5.11003 7.48494 5.81383 6.78106 6.68198 6.78106ZM6.68198 12.1703H20.3193C21.1875 12.1703 21.8913 12.8741 21.8913 13.7422C21.8913 14.6104 21.1875 15.3143 20.3193 15.3143H6.68198C5.81383 15.3143 5.11003 14.6105 5.11003 13.7422C5.11003 12.874 5.81383 12.1703 6.68198 12.1703ZM6.68198 17.5594H20.3193C21.1875 17.5594 21.8913 18.2632 21.8913 19.1314C21.8913 19.9995 21.1875 20.7034 20.3193 20.7034H6.68198C5.81383 20.7034 5.11003 19.9995 5.11003 19.1314C5.11003 18.2632 5.81383 17.5594 6.68198 17.5594ZM6.68198 26.0927C5.81383 26.0927 5.11003 25.3888 5.11003 24.5207C5.11003 23.6526 5.81383 22.9487 6.68198 22.9487H13.2977C14.1659 22.9487 14.8697 23.6526 14.8697 24.5207C14.8697 25.3888 14.1659 26.0927 13.2977 26.0927H6.68198ZM18.597 34.648L15.8622 35.182C14.7668 35.3957 13.8047 34.4301 14.0181 33.338L14.5521 30.6033C14.6325 30.1914 15.1402 30.0364 15.437 30.3332L18.8672 33.7635C19.1639 34.0599 19.0089 34.5677 18.597 34.648ZM32.7039 17.9901C30.0774 20.6165 22.8573 27.8366 20.5041 30.1897L19.0099 28.6956C19.553 28.1525 30.1504 17.555 31.2091 16.4964C32.1958 15.5109 33.6938 17.0001 32.7039 17.9901Z" fill="#007DFC"/>
            </svg>
        ),
        content: 'Lörem ipsum krons astroll parar.Vabamass hemirulig dåhusäbelt, desaktiv säkanera. Mikrotisam enode kasäpreska ',
        price: '11.40',
    },
    {
        title: 'Rewriting Services',
        icon: (
            <svg width="43" height="44" viewBox="0 0 43 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.5429 0.882812C9.87531 0.882812 0.382812 10.3753 0.382812 22.0429C0.382812 33.7105 9.87531 43.203 21.5429 43.203C25.5914 43.203 29.5265 42.0558 32.9228 39.8854C33.3511 39.6118 33.4646 39.0693 33.4627 38.6436V26.6399C33.4627 26.6376 33.4622 26.6354 33.4622 26.6331V24.7728C33.4622 24.5297 33.3892 24.2919 33.2525 24.0908L27.8063 16.0728C27.8042 16.0695 27.8025 16.0661 27.8003 16.0629L22.547 8.32988C22.3211 7.99727 21.9451 7.79815 21.543 7.79815C21.1409 7.79815 20.765 7.99735 20.539 8.32988L15.2857 16.0629C15.2838 16.0658 15.2823 16.0688 15.2803 16.0716L9.83324 24.0908C9.69669 24.2921 9.62354 24.5296 9.62354 24.7728V26.6332C9.62354 26.6355 9.62304 26.6377 9.62304 26.64V36.4834C5.46465 33.0448 2.81037 27.8482 2.81037 22.0431C2.81037 11.7139 11.2139 3.31053 21.5429 3.31053C31.872 3.31053 40.2755 11.714 40.2755 22.0431C40.2755 23.5868 40.0874 25.1212 39.7166 26.6038C39.554 27.254 39.9493 27.9131 40.5997 28.0757C41.2497 28.2384 41.909 27.8431 42.0716 27.1927C42.4906 25.5178 42.703 23.7852 42.703 22.043C42.7032 10.3753 33.2107 0.882812 21.5429 0.882812ZM26.962 31.6796C26.9785 31.6776 26.9951 31.6758 27.0115 31.6731C27.0284 31.6705 27.045 31.6669 27.0618 31.6635C27.077 31.6604 27.0923 31.6573 27.1073 31.6536C27.1246 31.6494 27.1418 31.6446 27.1589 31.6397C27.1732 31.6355 27.1873 31.6311 27.2015 31.6263C27.2189 31.6205 27.2364 31.6144 27.2538 31.6077C27.267 31.6025 27.2802 31.597 27.2931 31.5914C27.311 31.5837 27.3288 31.5762 27.3464 31.5676C27.3578 31.562 27.369 31.5558 27.3803 31.55C27.3992 31.5401 27.4179 31.5305 27.4364 31.5196C27.4413 31.5166 27.4462 31.5132 27.4512 31.5101C27.4739 31.4962 27.4967 31.4824 27.5186 31.4669L31.035 28.9834V38.1961C28.5131 39.6813 25.6835 40.5469 22.7566 40.7351V28.1304L25.9596 31.3334C25.968 31.3418 25.9771 31.3488 25.9856 31.3568C26.0051 31.3752 26.0245 31.3936 26.0449 31.4104C26.0579 31.4213 26.0716 31.4309 26.085 31.4409C26.1024 31.4542 26.1196 31.4674 26.1374 31.4796C26.1516 31.4892 26.1663 31.4979 26.1809 31.507C26.1988 31.5181 26.2167 31.5291 26.2351 31.5391C26.2501 31.5472 26.2651 31.5547 26.2803 31.5622C26.2992 31.5715 26.3181 31.5806 26.3374 31.5888C26.3527 31.5954 26.3678 31.6016 26.3831 31.6074C26.4032 31.6152 26.4236 31.6222 26.4442 31.6289C26.459 31.6338 26.4739 31.6385 26.4888 31.6427C26.5109 31.6489 26.5332 31.6541 26.5556 31.6591C26.5693 31.6621 26.5829 31.6655 26.5967 31.6681C26.6227 31.673 26.6488 31.6764 26.675 31.6795C26.6854 31.6807 26.6959 31.6826 26.7064 31.6835C26.7543 31.6878 26.8023 31.6889 26.8504 31.6876C26.8717 31.687 26.893 31.6865 26.9142 31.6848C26.9304 31.6837 26.9462 31.6814 26.962 31.6796ZM25.1001 16.4087C24.0165 17.0046 22.8057 17.3153 21.5431 17.3153C20.2805 17.3153 19.0697 17.0044 17.9861 16.4086L21.5431 11.1719L25.1001 16.4087ZM12.0512 25.146L16.6177 18.4229C18.1078 19.289 19.7876 19.7428 21.5428 19.7428C23.2981 19.7428 24.978 19.289 26.468 18.4229L31.0345 25.146V26.0108L26.9531 28.8935L22.4557 24.3962C22.2282 24.1686 21.9193 24.0407 21.5975 24.0407H21.4881C21.1663 24.0407 20.8575 24.1686 20.6299 24.3962L16.1325 28.8935L12.0511 26.0108V25.146H12.0512ZM12.0508 28.9832L15.5672 31.4667C15.9292 31.7224 16.3898 31.7546 16.7739 31.5785C16.9021 31.5197 17.0216 31.438 17.1261 31.3334L20.3291 28.1304V40.7353C17.323 40.5421 14.508 39.637 12.0507 38.1865L12.0508 28.9832Z" fill="#007DFC"/>
            </svg>
        ),
        content: 'Lörem ipsum krons astroll parar.Vabamass hemirulig dåhusäbelt, desaktiv säkanera. Mikrotisam enode kasäpreska ',
        price: '11.40',
    },
    {
        title: 'Editing Services',
        icon: (
            <svg width="42" height="43" viewBox="0 0 42 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M32.3885 8.28475C29.1197 4.9977 25.924 4.92465 22.5639 8.28475L20.5003 10.33C20.3177 10.5126 20.2629 10.7683 20.336 11.0057C21.6143 15.4798 25.1935 19.059 29.6676 20.3373C29.7224 20.3556 29.8137 20.3556 29.8685 20.3556C30.0511 20.3556 30.2337 20.2825 30.3615 20.1547L32.3885 18.1094C34.0503 16.4476 34.8721 14.8589 34.8721 13.2336C34.8721 11.5901 34.0503 9.9648 32.3885 8.28475Z" fill="#007DFC"/>
                <path d="M26.6154 21.8695C26.1224 21.6321 25.6476 21.3947 25.2093 21.1208C24.8441 20.9017 24.4789 20.6643 24.1319 20.4087C23.8397 20.226 23.511 19.9521 23.1823 19.6782C23.1458 19.6599 23.0362 19.5686 22.8901 19.4225C22.324 18.966 21.7214 18.3451 21.1553 17.6694C21.1188 17.6329 21.0092 17.5234 20.9179 17.359C20.7353 17.1581 20.4613 16.8112 20.2239 16.4277C20.0231 16.172 19.7857 15.8068 19.5665 15.4233C19.2926 14.9668 19.0552 14.5102 18.8361 14.0354C18.5987 13.5241 18.4161 13.0493 18.2517 12.5928L8.4271 22.4173C7.78795 23.0565 7.16706 24.2617 7.03923 25.1566L6.25399 30.5985C6.08964 31.7489 6.40008 32.8264 7.11228 33.5385C7.71491 34.1412 8.53667 34.4516 9.44974 34.4516C9.65062 34.4516 9.85149 34.4334 10.0524 34.4151L15.476 33.6481C16.3708 33.5203 17.576 32.9177 18.2152 32.2603L28.0398 22.4356C27.5833 22.2895 27.1268 22.0886 26.6154 21.8695Z" fill="#007DFC"/>
            </svg>
        ),
        content: 'Lörem ipsum krons astroll parar.Vabamass hemirulig dåhusäbelt, desaktiv säkanera. Mikrotisam enode kasäpreska ',
        price: '11.40',
    },
]

// CAROUSEL SETTINGS
const settings = {
    dots: false,
    infinite: true,
    // slidesToShow: 3,
    centerMode: false,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,
    speed: 1000,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: false,
    variableWidth: false,
    className: "!w-[400px] sm:!w-[450px] md:!w-[500px] overflow-visible",
};

const Index = () => {
    const sliderRef = useRef<Slider>(null);
    return (
        <div className="bg-wework overflow-hidden ctm-slide flex flex-col items-center md:items-start mt-24 mb-12 md:mt-20 ">
            <div className="flex flex-col gap-8 text-center md:hidden px-8 md:px-0">
                <h2 className="banner-title">Service Pricing </h2>
                <p className="banner-content">Lörem ipsum krons astroll parar. Vabamass hemirulig dåhusäbelt, desaktiv säkanera. Mikrotisam enode kasäpreska binera ren. </p>
            </div>
            <div className="relative w-full ctm-slide to-right overflow-hidden p-7 md:py-10">
                <Slider {...settings} ref={sliderRef}>
                    {postData.map((item, i) => (
                        <div key={i} className="p-[10px] !w-[400px] sm:!w-[450px] md:!w-[500px]" >
                            <div className="flex flex-col gap-5 text-center items-center md:text-left md:items-start rounded-[20px] bg-[#F2F8FF] py-[35px] px-[50px] shadow-xl">
                                <IconButton icon={item.icon} />
                                <div className="h-auto md:h-[200px]">
                                    <h3 className="text-[27px] md:text-[30px] font-bold">{item.title}</h3>
                                    <p className="banner-content overflow-hidden">{item.content}</p>
                                </div>
                                <button className="ctm-btn bg-none border-[1px] border-[#007DFC] text-xl text-[#007DFC] font-black px-[30px]">
                                    {`Order from $${item.price}/page`}
                                </button>
                            </div>
                        </div>
                    ))}
                </Slider>
                <div className="absolute top-0 left-0 ctm-grad-to-right hidden md:flex flex-col gap-4 justify-center pr-[100px] pl-[80px] py-10 md:w-[500px] lg:w-[580px] h-full">
                    <h2 className="banner-title">Service Pricing</h2>
                    <p className="banner-content">Lörem ipsum krons astroll parar. Vabamass hemirulig dåhusäbelt, desaktiv säkanera. Mikrotisam enode kasäpreska binera ren. </p>
                    <div className="flex flex-row gap-5">
                        <CustomPrevArrow ctmClassName="bg-[#06193E]" onClick={() => { sliderRef.current?.slickNext() }} />
                        <CustomNextArrow ctmClassName="bg-[#06193E]" onClick={() => { sliderRef.current?.slickPrev() }} />
                    </div>
                </div>
            </div>
            <div className="w-full md:hidden">
                <div className="flex justify-center gap-5">
                    <CustomPrevArrow ctmClassName="bg-[#06193E]" onClick={() => { sliderRef.current?.slickNext() }} />
                    <CustomNextArrow ctmClassName="bg-[#06193E]" onClick={() => { sliderRef.current?.slickPrev() }} />
                </div>
            </div>
        </div>
    );
}
export default Index;