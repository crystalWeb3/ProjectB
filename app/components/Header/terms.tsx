import Checkbox from "../utils/Checkbox";
import Ellipse from "../utils/Ellipse"; 
import IconCard from "../utils/IconCard";
import Image from 'next/legacy/image';

interface DataType {
    title?: string,
    content?: string,
    lists?: string[];
}

const paragraphs: DataType[] = [
    { 
        title: 'This will be heading', 
        content: 'Lörem ipsum geol nystartsjobb milingar. Krokatt stenorade. Poliitet jymäde ekotes. Sonera håtär men kavar för dock. Lörem ipsum geol nystartsjobb milingar. Krokatt stenorade. Poliitet jymäde ekotes. Sonera håtär men kavar för dockLörem ipsum geol nystartsjobb milingar. Krokatt stenorade. Poliitet jymäde ekotes. Sonera håtär men kavar för dockLörem ipsum geol nystartsjobb milingar. Krokatt stenorade. Poliitet jymäde ekotes. Sonera håtär men kavar för dockLörem ipsum geol nystartsjobb milingar. Krokatt stenorade. Poliitet jymäde ekotes. Sonera håtär men kavar för dock',
    },
    { 
        title: 'This will be another heading' ,
        content: 'Lörem ipsum geol nystartsjobb milingar. Krokatt stenorade. Poliitet jymäde ekotes. Sonera håtär men kavar för dock. Lörem ipsum geol nystartsjobb milingar. Krokatt stenorade. Poliitet jymäde ekotes. Sonera håtär men kavar för dockLörem ipsum geol nystartsjobb milingar. Krokatt stenorade. Poliitet jymäde ekotes. Sonera håtär men kavar för dockLörem ipsum geol nystartsjobb milingar. Krokatt stenorade. Poliitet jymäde ekotes. Sonera håtär men kavar för dockLörem ipsum geol nystartsjobb milingar. Krokatt stenorade. Poliitet jymäde ekotes. Sonera håtär men kavar för dock',
    },
    { 
        title: 'This will be another heading' ,
        lists : [
            'Lörem ipsum geol nystartsjobb milingar. Krokatt stenorade. Poliitet jymäde ekotes. Sonera håtär men kavar för dock. Lörem ipsum geol nystartsjobb milingar. Krokatt stenorade. ',
            'Lörem ipsum geol nystartsjobb milingar. Krokatt stenorade. Poliitet jymäde ekotes. Sonera håtär men kavar för dock. Lörem ipsum geol nystartsjobb milingar. Krokatt stenorade. ',
            'Lörem ipsum geol nystartsjobb milingar. Krokatt stenorade. Poliitet jymäde ekotes. Sonera håtär men kavar för dock. Lörem ipsum geol nystartsjobb milingar. Krokatt stenorade. ',
        ]
    },
    { 
        title: 'This will be another heading' ,
        content: 'Lörem ipsum geol nystartsjobb milingar. Krokatt stenorade. Poliitet jymäde ekotes. Sonera håtär men kavar för dock. Lörem ipsum geol nystartsjobb milingar. Krokatt stenorade. Poliitet jymäde ekotes. Sonera håtär men kavar för dockLörem ipsum geol nystartsjobb milingar. Krokatt stenorade. Poliitet jymäde ekotes. Sonera håtär men kavar för dockLörem ipsum geol nystartsjobb milingar. Krokatt stenorade. Poliitet jymäde ekotes. Sonera håtär men kavar för dockLörem ipsum geol nystartsjobb milingar. Krokatt stenorade. Poliitet jymäde ekotes. Sonera håtär men kavar för dock',
    },
]

const Header = () => {
    return (
        <div className="relative ctm-container flex flex-col gap-8 items-center pt-[135px] sm:pt-[165px] md:pt-[200px] lg:pt-[250px] px-8 sm:px-10 md:px-0 lg:px-[6%] xl:px-[10%] 2xl:px-[15%] md:p-0">
            <Ellipse width="765px" height="765px" left="50%" top="-340px" opacity="0.2" className="hidden lg:block" zindex="10" />
            <div className="flex flex-col gap-6 md:gap-10">
                <h2 className="banner-title">Terms and Conditions</h2>
                <p className="banner-content">Lörem ipsum geol nystartsjobb milingar. Krokatt stenorade. Poliitet jymäde ekotes. Sonera håtär men kavar för dock. Lörem ipsum geol nystartsjobb milingar. Krokatt stenorade. Poliitet jymäde ekotes. Sonera håtär men kavar för dockLörem ipsum geol nystartsjobb milingar. Krokatt stenorade. Poliitet jymäde ekotes. Sonera håtär men kavar för dockLörem ipsum geol nystartsjobb milingar. Krokatt stenorade. Poliitet jymäde ekotes. Sonera håtär men kavar för dockLörem ipsum geol nystartsjobb milingar. Krokatt stenorade. Poliitet jymäde ekotes. Sonera håtär men kavar för dock</p>
            </div>
            { paragraphs.map((p, idx) => {
                let lists = p?.lists ? p.lists: [];
                return (
                    <div className="w-full flex flex-col items-start gap-6 md:gap-8" key={idx}>
                        <h2 className="banner-subtitle">{p.title}</h2>
                        <p className="banner-content">{p.content}</p>
                        { lists.length > 0 && (
                            <ul>
                                { lists.map((list, index) => (
                                    <li className="inline-flex gap-1 items-start pb-7" key={index}>
                                        <span className="p-3">
                                            <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="8.50781" cy="9" r="8.5" fill="#007DFC"/>
                                            </svg>
                                        </span>
                                        <p className="banner-content">{list}</p>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                )
            })}
        </div>
        
    )
}

export default Header;
