

const TechIcon = ({ component }) => {
  const Item = component;
  return(
    <>
    <Item className="size-10 fill-[url(#tech-icon-color)]" />
    <svg className="size-0 absolute">
      <linearGradient id="tech-icon-color">
        <stop offset='0%' stopColor="rgb(110 231 183)" />
        <stop offset='100%' stopColor="rgb(56 189 248)" />
      </linearGradient>
    </svg>
    </>
  )  
};

export default TechIcon;
