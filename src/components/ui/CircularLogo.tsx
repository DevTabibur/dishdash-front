interface CircularLogoProps {
  icon: string;
  text: string;
}

const CircularLogo = ({ icon, text }: CircularLogoProps) => {
  return (
    <div className="relative w-20 h-20 bg-white rounded-full shadow-md flex items-center justify-center">
      {/* Circular Text */}
      <div className="absolute inset-0 w-full h-full">
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full transform -rotate-90"
        >
          <path
            id="textPath"
            d="M50,15 a35,35 0 0,1 0,70 a35,35 0 0,1 0,-70"
            fill="none"
            stroke="none"
          />
          <text className="text-[10px] fill-gray-600 font-medium">
            <textPath href="#textPath" startOffset="50%" textAnchor="middle">
              {text}
            </textPath>
          </text>
        </svg>
      </div>

      {/* Icon */}
      <div className="relative w-10 h-10">
        <img
          src={icon || "/placeholder.svg"}
          alt="Vendor Logo"
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
};

export default CircularLogo;
