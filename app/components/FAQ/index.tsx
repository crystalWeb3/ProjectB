import Accordion from '../utils/Accordion'
import Ellipse from "../utils/Ellipse";

interface DataType {
    title: string;
    content: string;
}

const faqs: DataType[] = [
    { title: "This will be heading", content: "Craven omni memoria patriae zombieland clairvius narcisse religionis sunt diri undead historiarum. Golums, zombies unrelenting et Raimi fascinati beheading."},
    { title: "This will be heading", content: "Craven omni memoria patriae zombieland clairvius narcisse religionis sunt diri undead historiarum. Golums, zombies unrelenting et Raimi fascinati beheading."},
    { title: "This will be heading", content: "Craven omni memoria patriae zombieland clairvius narcisse religionis sunt diri undead historiarum. Golums, zombies unrelenting et Raimi fascinati beheading."},
    { title: "This will be heading", content: "Craven omni memoria patriae zombieland clairvius narcisse religionis sunt diri undead historiarum. Golums, zombies unrelenting et Raimi fascinati beheading."},
]

const FAQ = () => {
    
    return (
        <div className="ctm-container overflow-hidden mt-16 md:mt-24 lg:mt-32" id='faq'>
            <div className="relative overflow-hidden bg-weak-blue pl-8 md:pl-20 lg:pl-28 p-10 lg:p-16 lg:p-20 ctm-min-h-lg flex flex-col items-center w-full ctm-card rounded-0 md:rounded-[30px]">
                <div className="text-center w-full max-w-4xl">
                    <h1 className="banner-title mb-3">
                        Frequently Asked Questions
                    </h1>
                    <p className="banner-content">
                        Lörem ipsum krons astroll parar. Vabamass hemirulig dåhusäbelt, desaktiv säkanera. Mikrotisam enode kasäpreska binera ren. Tedevis neotologi då tivis och trent polyda. Eurobävning vär.
                    </p>
                </div>
                <div className="w-full px-4 pt-10 flex flex-col items-center">
                    <Accordion datas={faqs} />
                </div>
                <Ellipse width="380px" height="380px" left="130px" top="130px" opacity="0.1" className="hidden lg:block" zindex="10"/>
            </div>
        </div>
    )
}

export default FAQ;
