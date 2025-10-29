"use client";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
// import type { Job } from "@/types/job";
import { VacancyProps } from "../Home/Vacancies";
// import { useState } from "react";
// import fallbackImage from "@/assets/v1.png";
import { IoIosArrowForward } from "react-icons/io";

interface JobCardProps {
  job: VacancyProps;
  viewMode: "grid" | "list";
}

export function JobCard({ job }: JobCardProps) {
  // const [imgSrc, setImgSrc] = useState(job.image || fallbackImage);
  return (
    <Link
      href={"/vacancies/" + job.id}
      className="flex lg:flex-row flex-col lg:gap-0 gap-3 lg:items-center pt-5 group"
    >
      <div className="flex-1 flex items-center gap-4">
        <div className="size-[56px] rounded-full bg-gray-100 flex items-center justify-center text-base font-bold">
          {job?.company?.code}
        </div>
        <div className="flex  flex-col">
          <h2 className="text-[#1C1917] text-lg font-bold">{job?.title}</h2>
          <p className="mt-1 text-sm text-[#494745]">{job?.location}</p>
        </div>
      </div>
      <div className="flex-1 flex items-center justify-between">
        <div className="mt-3 flex flex-wrap gap-2">
          <Badge
            variant="secondary"
            className="bg-[#f2f2f2] text-[#1C1917] hover:bg-white/15 text-xs"
          >
            {job.sector}
          </Badge>
          <Badge
            variant="secondary"
            className="bg-[#FFD43833]/40 text-[#e6b600] hover:bg-[#FFD43833]/40 border-transparent text-xs"
          >
            {job.type}
          </Badge>
        </div>
        <span className="text-[#b9b4af] group-hover:text-[#1C1917] transition-all duration-150">
          <IoIosArrowForward />
        </span>
      </div>
    </Link>
  );
}
