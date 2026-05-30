import React from "react";
import { partners } from "../assets/assets";

const Partner = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between bg-linear-to-r from-blue-900 via-slate-950 to-blue-900 py-8 px-6 md:px-16 lg:px-24 gap-6 overflow-hidden">
      
      <p className="w-full lg:w-auto text-center lg:text-left text-xs md:text-xl lg:text-2xl font-bold tracking-widest text-slate-300 uppercase shrink-0 whitespace-normal lg:whitespace-nowrap">
        Our Global Learning Partners
      </p>

      
      <div className="w-full overflow-x-auto flex items-center justify-center lg:justify-end gap-8 py-2 [&::-webkit-scrollbar]:hidden">
        {Object.values(partners).map((images, index) => (
          <img
            key={index}
            className="h-8 md:h-11 lg:h-12 w-auto object-contain shrink-0 opacity-90 hover:opacity-100 transition-opacity"
            src={images}
            alt={`Course logo ${index + 1}`}
          />
        ))}
      </div>
      
    </div>
  );
};

export default Partner;