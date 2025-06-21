import { Fragment } from "react";
import TechIcon from "./TechIcon";

const ToolboxItems = ({ items, className, itemsClassName }) => {
  return (
    <div
      className={` flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] ${className}`}
    >
      <div className={`flex flex-none gap-6 pr-6 ${itemsClassName}`}>
        {[...new Array(2)].fill(0).map((_, idx) => (
          <Fragment key={idx}>
            {items.map((item) => (
              <div
                key={item.title}
                className="inline-flex items-center gap-4 py-2 px-3 outline outline-2 outline-white/10 rounded-lg"
              >
                <TechIcon component={item.icon} />
                <span className="font-semibold">{item.title}</span>
              </div>
            ))}
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default ToolboxItems;
