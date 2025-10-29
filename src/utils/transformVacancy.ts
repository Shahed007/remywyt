// utils/transformVacancy.ts

import { VacancyProps } from '@/components/Home/Vacancies';
import { JaicobVacancy } from '@/types/global';



export function transformVacancy(vacancy: JaicobVacancy): VacancyProps {
  const { id, title, bannerImage, location, industry, employmentType } = vacancy;

  const locationStr = `${location.city}, ${location.country}`;

  const typeMap: Record<string, "Full-Time" | "Part-Time" | "Contract"> = {
    permanent: "Full-Time",
    temporary: "Part-Time",
  };

  const type = typeMap[employmentType] || "Contract";

  // Now TypeScript knows `industry.name` is a string → `split()` returns string[]
  const companyCode = industry.name
    .split(' ')
    .map((word: string) => word[0]) // ✅ Now `word` is explicitly typed
    .join('')
    .substring(0, 2)
    .toUpperCase();

  return {
    id,
    title,
    location: locationStr,
    sector: industry.name,
    type,
    image: bannerImage || "/placeholder.svg",
    company: {
      name: industry.name,
      code: companyCode,
    },
  };
}