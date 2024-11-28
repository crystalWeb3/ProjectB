interface CircleProps {
    width?: string;
    height?: string;
    left?: string;
    top?: string;
    zindex?: string;
    opacity?: string;
    className?: string;
  }
  
const Circle: React.FC<CircleProps> = ({ width, height, left, top, zindex, opacity, className }) => {
    // Set default values for props to ensure they always have a value
    const containerStyles = {
        width: width || 'auto', // default to 'auto' if not provided
        height: height || 'auto', // default to 'auto' if not provided
        left: left || '0', // default to '0' if not provided
        top: top || '0', // default to '0' if not provided
        zIndex: zindex || '1', // default to '1' if not provided
        opacity: opacity || '1', // default to '1' if not provided
    };
    const classname = className || ''
    return (
        <div className={`absolute rounded-[50%] b-none border-[1px] border-[#007DFC] ${classname}`} style={{ ...containerStyles }}>
        </div>
    );
};

export default Circle;
