import Accordion from "../../../components/utils/Accordion";
import HelperBtnbar from "../HelperBtnbar";

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

const Index = () => {
    return (
        <div className='flex flex-col gap-6'>
            <h1 className="banner-subtitle">Help Center</h1>
            <div className="w-full">
                <HelperBtnbar />
            </div>
            <div className="w-full">
                <Accordion datas={faqs} />
            </div>
        </div>
    )
}

export default Index;