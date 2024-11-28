import PriceQuote from "../PriceQuote";

const Index = () => {
    return (
        <div className="relative ctm-container flex flex-col gap-8 items-center mt-20 ">
            <div className="max-w-[580px] text-center flex flex-col gap-6">
                <h2 className="banner-title">Get a Quote</h2>
                <p className="banner-content">Lörem ipsum geol nystartsjobb milingar. Krokatt stenorade. Poliitet jymäde ekotes. Sonera håtär men kavar för dock</p>
            </div>
            <div className="w-full flex justify-center px-7">
                <PriceQuote className='sm:w-[500px] md:w-[550px] lg:w-[600px] z-40' />
            </div>
        </div>
    )
}

export default Index;