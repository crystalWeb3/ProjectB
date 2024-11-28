import React from "react";

interface SliderPropsType {
    children: React.ReactNode,
    totalWidth?: string,
}

const Slider: React.FC<SliderPropsType> = ({children, totalWidth}) => {
  return (
    <div className="overflow-hidden relative w-full">
      {/* Wrapping container */}
      <div className="flex animate-slide">
        {children}
        {children}
      </div>
    </div>
  );
};

export default Slider;