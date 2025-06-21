import React from "react";

function HeroOrbit({ children, size, rotation,orbitDuration,shouldOrbit ,spinDuration,shouldSpin }) {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <div className={`${shouldOrbit&&'animate-spin'} `} style={{animationDuration:orbitDuration}}>

      <div 

style={{ 
  width: `${size}px`,
  height: `${size}px`,
  transform: `rotate(${rotation}deg)`,
}}
>
        <div className={`${shouldSpin&&'animate-spin'} inline-flex `} 
          style={{
            transform: `rotate(${rotation * -1}deg)`,
            animationDuration:spinDuration,
          }}
          >
          {children}
        </div>
      </div>
          </div>
    </div>
  );
}

export default HeroOrbit;
