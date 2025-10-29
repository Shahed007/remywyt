/* eslint-disable @typescript-eslint/no-explicit-any */
import baseApi from "@/redux/api/baseApi";

export type Candidates = {
  applicantDetails: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    address: string;
    dateOfBirth: string;
    nationality: string;
    gender: string;
    avatar: string;
  };
  status: string;
  function: string;
  description: string;
  tags: string[];
  languages: {
    language: string;
    spokenLevel: string;
    writtenLevel: string;
  }[];
  skills: {
    name: string;
    level: string;
  }[];
  workExperiences: {
    companyName: string;
    position: string;
    startDate: string;
    endDate: string;
    industry: string;
    responsibilities: string;
    achievements: string;
    location: string;
  }[];
  educations: {
    degree: string;
    issuingOrganization: string;
    licenseNumber: string;
    issueDate: string;
  }[];
  certifications: {
    certificationName: string;
    issuingOrganization: string;
    licenseNumber: string;
    issueDate: string;
    expirationDate: string;
  }[];
};

// Inject candidates endpoints into baseApi
export const candidateApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getCandidates: build.query<Candidates[], void>({
      query: () => ({
        url: "/candidates/public",
        method: "GET",
      }),
      providesTags: ["candidates"],
    }),
    getSingleCandidate: build.query<Candidates, string>({
      query: (id) => ({
        url: `/candidates/public/${id}`,
        method: "GET",
      }),
      providesTags: ["candidates"],
    }),
    createCandidate: build.mutation<any, Candidates>({
      query: (data) => ({
        url: "/candidates",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["candidates"],
    }),
    updateCandidate: build.mutation<any, { id: string; data: Candidates }>({
      query: ({ id, data }) => ({
        url: `/candidates/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["candidates"],
    }),
    deleteCandidate: build.mutation<any, string>({
      query: (id) => ({
        url: `/candidates/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["candidates"],
    }),
  }),
  overrideExisting: true,
});

// Export hooks for usage in components
export const {
  useGetCandidatesQuery,
  useGetSingleCandidateQuery,
  useCreateCandidateMutation,
  useUpdateCandidateMutation,
  useDeleteCandidateMutation,
} = candidateApi;
