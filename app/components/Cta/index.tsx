import Image from "next/legacy/image";
import Link from 'next/link';

const Index = () => {
    return (
        <div className="ctm-container overflow-hidden mt-16 md:mt-24 lg:mt-32">
            <div className="bg-strong-blue pl-8 md:pl-20 lg:pl-28 p-10 lg:p-16 lg:p-20 flex flex-col items-center w-full mb-8 ctm-card rounded-0 md:rounded-[30px]">
                <div className="text-center w-full max-w-4xl mb-8">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white lg:leading-tight">
                        Get 20% on first Order
                    </h1>
                    <p className="text-xl md:text-2xl text-white opacity-70 pt-6">
                        Lörem ipsum krons astroll parar. Vabamass hemirulig dåhusäbelt, desaktiv säkanera. Mikrotisam enode kasäpreska binera ren. Tedevis neotologi då tivis och trent polyda. Eurobävning vär.
                    </p>
                </div>
                <Link href='/main/home#header'>
                    <button className="bg-[#0D0D28] rounded-[103px] text-white p-[31px] font-bold text-4xl min-w-[323px] lg:min-w-[387px] mb-5">Get Quote</button>
                </Link>
            </div>
        </div>
    )
}

export default Index;
