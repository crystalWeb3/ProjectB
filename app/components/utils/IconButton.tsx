import React from 'react';

interface IconButtonProps {
  icon: React.ReactNode;
  isBig?: boolean;
}

const IconButton: React.FC<IconButtonProps> = ({ icon }) => {
  return (
    <div className='ctm-iconbtn w-[70px] h-[70px] md:w-[83px] md:h-[83px] inline-flex justify-center items-center cursor-button'>
      {React.cloneElement(icon as React.ReactElement<any>, {
          fill: "#007DFC",  // Predefined color
          width: '40',      // Fixed width
          height: '40',     // Fixed height
      })}
    </div>
  );
};

export default IconButton;
