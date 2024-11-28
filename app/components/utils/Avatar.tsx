import Image from "next/legacy/image";

interface DataProps {
    img?: string;
    name?: string;
    subscribe? :String;
    classname? : string;
    onClick?: (newValue: boolean) => void;
    isDark? : boolean;
    size?: string
}

const Index: React.FC<DataProps> = ({ img, name, subscribe, classname, isDark, onClick, size }) => {
    
    const className = classname || '';
    const src = img || '';
    const avatarname = name || '';
    const dark = isDark || false;
    let w_h = 'w-[58px] h-[58px]'
    if(size === 'sm') {
        w_h = 'w-[40px] h-[40px]'
    }
    return (
        <div className={`flex flex-row gap-3 items-center ${className}`}>
            { src !== '' && <div className={`${w_h}`}>
                <Image src={src} alt={avatarname} width={58} height={58} layout='responsive' className="inline-block rounded-[50%]" />
            </div>}
            <div className="flex flex-col py-1 justify-center">
                <h3 className={`${size === 'sm'? 'text-lg': 'text-xl'} font-semibold ${dark === true? 'text-white': 'text-[#000000]'}`}>{name}</h3>
                <p className={`${size ==='sm'? 'text-[17px]': 'text-lg'} ${dark === true? 'text-[#D0D0D0]': 'text-[#595959]'}`}>{subscribe}</p>
            </div>
        </div>
    );
};

export default Index;
