/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGetVacanciesQuery } from "@/redux/service/vacancies/vacanciesApi";
import { JobCard } from "./JobCard";
import VacancyCardSkeleton from "../card/VacancyCardSkeleton";
// import type { Job } from "@/types/job";
// import img1 from "../../../public/images/image (1).png";
// import img2 from "../../../public/images/image (2).png";
// import img3 from "../../../public/images/image (3).png";
// import logo1 from "../../../public/logo/Logo1.png";
// import logo2 from "../../../public/logo/Logo2.png";
// import logo3 from "../../../public/logo/Logo3.png";

export default function SimilarVacancy() {
  const { data, isLoading } = useGetVacanciesQuery({ params: [] });
  return (
    <div>
      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {new Array(3).fill(0).map((_, index) => (
            <VacancyCardSkeleton key={index} />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {data?.data.map((job: any) => (
            <JobCard key={job.id} job={job} viewMode="grid" />
          ))}
        </div>
      )}
    </div>
  );
}
