/* eslint-disable @typescript-eslint/no-explicit-any */
export type TQuery = {
  name: string;
  value: any;
};
// types/jaicob-api.ts

export interface JaicobVacancy {
  id: string;
  title: string;
  bannerImage?: string;
  location: {
    city: string;
    country: string;
  };
  industry: {
    name: string;
  };
  employmentType: "permanent" | "temporary";
  // Add other fields if needed later
}
