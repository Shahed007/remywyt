"use client";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
// import type { Job } from "@/types/job";
import { CompanyBadge, VacancyProps } from "../Home/Vacancies";
import { useState } from "react";
import fallbackImage from "@/assets/v1.png";

interface JobCardProps {
  job: VacancyProps;
  viewMode: "grid" | "list";
}

export function JobCard({ job, viewMode }: JobCardProps) {
  const [imgSrc, setImgSrc] = useState(job.image || fallbackImage);
  if (viewMode === "grid") {
    return (
      <Link
        href={`/vacancies/${job.id}`}
        className="group relative block overflow-hidden rounded-2xl shadow-sm ring-1 ring-black/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-black/60 hover:shadow-md transition-shadow duration-300"
      >
        {/* Image Container */}
        <div className="relative h-[300px] w-full">
          {/* Clear background image */}
          {/* <Image
            src={job.image || "/placeholder.jpg"}
            alt={job.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover"
          /> */}

          {/* Blurred overlay for bottom section */}
          {/* <div className="absolute bottom-0 left-0 right-0 h-2/6">
            <Image
              src={job.image || "/placeholder.jpg"}
              alt=""
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover filter blur-md"
            />
          </div> */}

          {/* Company Logo (top-left) */}
          {/* {job.logo && (
            <div className="absolute left-3 top-3 z-10 w-10 h-10 rounded-full overflow-hidden bg-white shadow-md">
              <Image
                src={job.logo}
                alt={job.company}
                width={40}
                height={40}
                className="object-contain w-full h-full"
              />
            </div>
          )} */}

          {/* Bottom Gradient Overlay */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-5" />

          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 z-10 p-4 sm:p-5 text-white">
            <h3 className="text-lg sm:text-xl font-semibold leading-tight">
              {job.title}
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-white/80">
              {job.company.name}
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              <Badge
                variant="secondary"
                className="bg-white/15 text-white hover:bg-white/15 text-xs"
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
          </div>
        </div>
      </Link>
    );
  }

  return (
    <div className="w-[350px] h-[320px] mx-auto">
      <Link
        href={"/vacancies/" + job.id}
        className="group relative block h-full w-full overflow-hidden rounded-2xl shadow-sm ring-1 ring-black/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-black/60 hover:shadow-md transition-shadow duration-300"
      >
        <div className="relative h-full w-full">
          {/* Main Image */}
          <Image
            src={imgSrc}
            alt={job.title}
            fill
            sizes="300px"
            className="object-cover"
            onError={() => setImgSrc(fallbackImage)}
          />

          {/* Blurred overlay at bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-2/6">
            <Image
              src={imgSrc}
              alt=""
              fill
              sizes="300px"
              className="object-cover filter blur-md"
              onError={() => setImgSrc(fallbackImage)}
            />
          </div>

          {/* Company Badge */}
          <div className="absolute left-3 top-3 z-10">
            <CompanyBadge code={job.company.code} name={job.company.name} />
          </div>

          {/* Gradient overlay */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent z-5" />

          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 z-10 p-4 text-white">
            <h3 className="text-lg font-semibold leading-tight">{job.title}</h3>
            <p className="mt-1 text-sm text-white/80">{job.location}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              <Badge
                variant="secondary"
                className="bg-white/15 text-white hover:bg-white/15 text-xs"
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
          </div>
        </div>
      </Link>
    </div>
  );
}
