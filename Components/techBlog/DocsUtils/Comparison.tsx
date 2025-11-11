import React, { ReactNode } from "react";

type ComparisonProps = {
  firstLabel: string;
  secondLabel: string;
  children: ReactNode;
};

const Comparison = ({ firstLabel, secondLabel, children }: ComparisonProps) => {
  return (
    <div className="w-full overflow-hidden rounded-lg border border-[#1e4976] shadow-md bg-white text-gray-900">
      <div className="bg-[#132f4c] flex justify-start items-center gap-2 px-4 py-2 border-b border-[#1e4976]">
        <div className="size-3 min-h-3 min-w-3 rounded-full bg-[#ff5f56]" />
        <div className="size-3 min-h-3 min-w-3 rounded-full bg-[#ffbd2e]" />
        <div className="size-3 min-h-3 min-w-3 rounded-full bg-[#27c93f]" />
      </div>
      {/* Header */}
      <div
        role="row"
        className="grid grid-cols-2 text-center text-xl sm:text-2xl font-semibold border-b text-[#ffffb6] border-[#1e4976] bg-[#132f4c]"
      >
        <div className="py-4 px-2 border-r border-[#1e4976]">{firstLabel}</div>
        <div className="py-4 px-2 ">{secondLabel}</div>
      </div>

      {/* Body */}
      <div
        role="rowgroup"
        className="grid grid-cols-2 text-center text-base sm:text-lg text-white"
      >
        {React.Children.map(children, (child, index) => (
          <div
            className={`py-3 px-4 border-t border-[#1e4976] bg-[#0a1929] ${
              index % 2 === 0 ? "" : "border-s"
            } `}
          >
            {child}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comparison;
