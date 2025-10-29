import type { ViewMode } from "@/types/job";
import { JobCard } from "./JobCard";
// import { VacancyProps } from "../Home/Vacancies";
import { transformVacancy } from "@/utils/transformVacancy";
import { JaicobVacancy } from "@/types/global";
import VacancyCardSkeleton from "../card/VacancyCardSkeleton";
import { VacancyCard } from "../Home/Vacancies";

interface JobListProps {
  jobs: JaicobVacancy[];
  viewMode: ViewMode;
  loading?: boolean;
}

export function JobList({ jobs, viewMode, loading }: JobListProps) {
  if (viewMode === "grid") {
    return (
      <div className="g">
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {new Array(6).fill(0).map((_, index) => (
              <VacancyCardSkeleton key={index} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobs?.map((job) => (
              <VacancyCard key={job.id} vacancy={transformVacancy(job)} />
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="space-y-4 ">
      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {new Array(6).fill(0).map((_, index) => (
            <VacancyCardSkeleton key={index} />
          ))}
        </div>
      ) : (
        <div className="grid divide-y-1 grid-cols-1 gap-6 ">
          {jobs?.map((job) => (
            <JobCard
              key={job.id}
              job={transformVacancy(job)}
              viewMode={viewMode}
            />
          ))}
        </div>
      )}
    </div>
  );
}
