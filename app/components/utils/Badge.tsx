interface DataProps {
    classname?: string,
    text: string;
    onClick?: ( ...args: any ) => any;
    state?: string;
}

const Index: React.FC<DataProps> = ({text, onClick, classname, state }) => {
    let style = ''
    if(state === 'success') style = 'bg-[#08CF7F10] text-[#08CF7F]';
    if(state === 'error') style = 'bg-[#FBDFD0] text-[#B84716]';
    const className = classname || '';
    return (
        <span 
            className={`${style} ${className} inline-block rounded-[13px] p-[6px] px-[10px] text-lg ${ onClick? 'cursor-pointer': ''}`}
            onClick={ onClick? onClick: undefined}
            >
            {text}
        </span>
    );
};

export default Index;
