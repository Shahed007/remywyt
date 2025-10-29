import React from "react";

const VacancyCardSkeleton = () => {
  return (
    <div className="bg-white w-full h-[320px]">
      <div className="group relative block h-full w-full overflow-hidden rounded-2xl animate-pulse bg-gray-200">
        <div className="relative h-full w-full">
          <div className="h-full w-full bg-gray-300"></div>
          <div className="absolute bottom-0 left-0 right-0 h-2/6 bg-gray-300"></div>
          <div className="absolute left-3 top-3 z-10 bg-gray-300 rounded-full w-24 h-6"></div>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent z-5"></div>
          <div className="absolute bottom-0 left-0 right-0 z-10 p-4 text-white">
            <div className="h-6 bg-gray-300 rounded w-3/4"></div>
            <div className="mt-1 h-4 bg-gray-300 rounded w-1/2"></div>
            <div className="mt-3 flex flex-wrap gap-2">
              <div className="bg-gray-300 rounded text-xs h-6 w-20"></div>
              <div className="bg-gray-300 rounded text-xs h-6 w-20"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VacancyCardSkeleton;
