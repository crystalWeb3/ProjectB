import React from 'react';

interface IconLabelProps {
    className?: string,
    icon: React.ReactNode;  
    label?: string;
}

const IconLabel: React.FC<IconLabelProps> = ({ icon, label, className }) => {
    let real_label = label || '';
    let classname = className || '';
  return (
    <div className={`flex flex-row items-center gap-5 ${classname}`}>
        <span>
            {React.cloneElement(icon as React.ReactElement<any>, {
                fill: "#007DFC",  // Predefined color
                width: '40',      // Fixed width
                height: '40',     // Fixed height
            })}
        </span>
        <span className='text-lg font-bold'>{real_label}</span>
    </div>
  );
};

export default IconLabel;
