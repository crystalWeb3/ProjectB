import Image from "next/legacy/image";

interface DataProps {
    img?: string;
    name?: string;
    cardNum? :String;
    classname? : string;
    onDelete ?: (newValue?: string) => void;
    size?: 'sm' | 'lg';
    cardData?: any;
}

const Index: React.FC<DataProps> = ({ img, name, cardNum, classname, onDelete, size, cardData }) => {
    
    const className = classname || '';
    const src = img || '';
    const avatarname = name || '';
    return (
        <div className={`flex flex-col gap-2 items-start rounded-[23px] bg-white w-[380px] h-[170px] py-[28px] pl-[32px] pr-[20px] ${className}`}>
            <div className="w-full flex flex-col gap-1">
                <div className="w-full flex justify-between items-center">
                    <h4 className="text-[24px] font-[700]">{cardNum}</h4>
                    <span className="cursor-pointer" onClick={() => {
                        if(onDelete) onDelete(cardData?._id);
                    }}>
                        <svg width="30" height="32 " viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.84375 5.947H1.15625C0.932474 5.947 0.717862 5.8581 0.559629 5.69987C0.401395 5.54164 0.3125 5.32703 0.3125 5.10325C0.3125 4.87947 0.401395 4.66486 0.559629 4.50663C0.717862 4.34839 0.932474 4.2595 1.15625 4.2595H7.90625V1.72656C7.90625 1.50279 7.99514 1.28818 8.15338 1.12994C8.31161 0.971707 8.52622 0.882813 8.75 0.882812H15.5C15.7238 0.882813 15.9384 0.971707 16.0966 1.12994C16.2549 1.28818 16.3438 1.50279 16.3438 1.72656V4.2595H23.0938C23.3175 4.2595 23.5321 4.34839 23.6904 4.50663C23.8486 4.66486 23.9375 4.87947 23.9375 5.10325C23.9375 5.32703 23.8486 5.54164 23.6904 5.69987C23.5321 5.8581 23.3175 5.947 23.0938 5.947H21.4062V23.6658C21.4062 23.8895 21.3174 24.1041 21.1591 24.2624C21.0009 24.4206 20.7863 24.5095 20.5625 24.5095H3.6875C3.46372 24.5095 3.24911 24.4206 3.09088 24.2624C2.93265 24.1041 2.84375 23.8895 2.84375 23.6658V5.947ZM14.6562 4.2595V2.572H9.59375V4.2595H14.6562ZM4.53125 22.822H19.7188V5.947H4.53125V22.822ZM9.59375 19.447C9.36997 19.447 9.15536 19.3581 8.99713 19.1999C8.83889 19.0416 8.75 18.827 8.75 18.6033V10.1657C8.75 9.94197 8.83889 9.72736 8.99713 9.56913C9.15536 9.4109 9.36997 9.322 9.59375 9.322C9.81753 9.322 10.0321 9.4109 10.1904 9.56913C10.3486 9.72736 10.4375 9.94197 10.4375 10.1657V18.6033C10.4375 18.827 10.3486 19.0416 10.1904 19.1999C10.0321 19.3581 9.81753 19.447 9.59375 19.447ZM14.6562 19.447C14.4325 19.447 14.2179 19.3581 14.0596 19.1999C13.9014 19.0416 13.8125 18.827 13.8125 18.6033V10.1657C13.8125 9.94197 13.9014 9.72736 14.0596 9.56913C14.2179 9.4109 14.4325 9.322 14.6562 9.322C14.88 9.322 15.0946 9.4109 15.2529 9.56913C15.4111 9.72736 15.5 9.94197 15.5 10.1657V18.6033C15.5 18.827 15.4111 19.0416 15.2529 19.1999C15.0946 19.3581 14.88 19.447 14.6562 19.447Z" fill="#FF3B3B"/>
                        </svg>
                    </span>
                </div>
                <p className="banner-content">{name}</p>
            </div>
            <div className="rounded-[3px] w-[43px] h-[26px] border-[0.7px] border-[#DDDDDD]">
                {src && <Image src={src} alt={src} width={58} height={58} layout='responsive' className="inline-block rounded-[50%]" />}
            </div>
        </div>
    );
};

export default Index;
        