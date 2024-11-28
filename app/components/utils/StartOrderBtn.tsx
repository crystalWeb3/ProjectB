'use client';
import { useAuth } from "../../../context/AuthContext";  
import { useRouter } from "next/navigation";  

interface DataProps {
    classname?: string,
    text: string;
    onClick?: ( ...args: any ) => any;
}

const Index: React.FC<DataProps> = ({text, onClick, classname }) => {
    const className = classname || '';
    const { token } = useAuth();
    const router = useRouter();
    return (
        <button 
            className={`${className} ctm-btn bg-strong-blue text-white text-xl font-bold p-10`}
            onClick={() => {
                if(onClick) onClick();
                if(token) router.push('/dashboard/placeorder');
                else router.push('/auth/login');
            }}
        >
            {text}
        </button>
    );
};

export default Index;
