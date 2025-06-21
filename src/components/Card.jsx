
import GrainImage from "../assets/images/grain.jpg";
const Card = ({ children, className = "" }) => {
  return (
    <div
      className={`
        bg-gray-800 z-0 overflow-hidden after:z-10
        rounded-3xl relative after:content-[''] after:absolute 
        after:inset-0 after:outline-2 after-outline after:-outline-offset-2
        after:rounded-3xl after:outline-white/20 px-8 py-8 md:py-12 md:px-10 
        lg:py-16 lg:px-20 after:pointer-events-none lg:max-w-4xl mx-4
        ${className}
      `}
    >
      <div
        className="absolute inset-0 -z-10 opacity-10"
        style={{
          backgroundImage: `url(${GrainImage.src})`,
        }}
      ></div>

      {children}
    </div>
  );
};


export default Card
