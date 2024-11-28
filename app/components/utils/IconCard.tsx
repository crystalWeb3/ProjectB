import React from 'react';

interface IconCardProps {
  icon: React.ReactNode;
  title?: string;
  subscribe?: string;
}

const Index: React.FC<IconCardProps> = ({ icon, title, subscribe }) => {
  return (
    <div className='flex items-center gap-5'>
        <div className='inline-flex items-center curor-pointer justify-center rounded-[50%] bg-[#007DFC20] w-[50px] h-[50px] md:w-[60px] md:h-[60px]'>
            {React.cloneElement(icon as React.ReactElement<any>, {
                fill: "#007DFC",
                width: '30',
                height: '30',
            })}
        </div>
        <div>
            <h4 className='text-[20px] md:text-[25px] font-bold'>{title}</h4>
            <p className='banner-content'>{subscribe}</p>
        </div>
    </div>
  );
};

export default Index;
