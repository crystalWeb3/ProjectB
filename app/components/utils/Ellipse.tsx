interface EllipseProps {
    width?: string;
    height?: string;
    left?: string;
    top?: string;
    zindex?: string;
    opacity?: string;
    filter?: string;
    className?: string;
  }
  
const Ellipse: React.FC<EllipseProps> = ({ width, height, left, top, zindex, opacity, filter, className }) => {
    // Set default values for props to ensure they always have a value
    const containerStyles = {
        width: width || 'auto', // default to 'auto' if not provided
        height: height || 'auto', // default to 'auto' if not provided
        left: left || '0', // default to '0' if not provided
        top: top || '0', // default to '0' if not provided
        zIndex: zindex || '1', // default to '1' if not provided
        opacity: opacity || '1', // default to '1' if not provided
        filter: filter || 'blur(100px)',
    };
    const classname = className || ''
    return (
        <div className={`ellipse ${classname}`} style={{ ...containerStyles }}>
        </div>
    );
};

export default Ellipse;
