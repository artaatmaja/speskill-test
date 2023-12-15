import React from "react";

import DateTime from "components/date";

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-spe-blue to-spe-pink shadow-md overflow-hidden relative text-spe-black h-[75vh]">
      <div className="text-center bg-spe-black h-2/4 2md:h-[200%] border-b-[1rem] 2md:border-[1rem] 2md:rounded-3xl relative 2md:-rotate-30 2md:-top-[160%]">
        <h1 className="2md:text-5xl text-2xl text-spe-green font-mono absolute tablet:bottom-10 tablet:mx-auto tablet:left-0 tablet:right-0 2md:bottom-2 2md:left-24">
          &lt;SPE / FRONTEND&gt;
        </h1>
        <div className="absolute 2md:-left-[100px] tablet:bottom-4 tablet:mx-auto tablet:left-0 tablet:right-0 2md:bottom-52 2md:rotate-90 text-spe-green">
          <DateTime />
        </div>
      </div>
    </header>
  );
};

export default Header;
