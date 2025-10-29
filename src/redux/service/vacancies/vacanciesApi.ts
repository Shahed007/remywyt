/* eslint-disable @typescript-eslint/no-explicit-any */
import baseApi from "@/redux/api/baseApi";
import { TQuery } from "@/types/global";
import buildSearchQuery from "@/utils/buildSearchQury";

const vacanciesApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getVacancies: build.query<any, { params: TQuery[] }>({
      query: ({ params }) => ({
        url: "/vacancies/public",
        method: "GET",
        params: buildSearchQuery(params),
      }),
      providesTags: ["vacancies"],
    }),
    // getSingleVacancy: build.query<any, string>({
    //   query: (id) => ({
    //     url: `/vacancies/${id}`,
    //     method: "GET",
    //   }),
    //   providesTags: ["vacancies"],
    // }),
    // updatedVacancy: build.mutation<any, any>({
    //   query: (data) => ({
    //     url: `/vacancies/${data.id}`,
    //     method: "PUT",
    //     body: data,
    //   }),
    //   invalidatesTags: ["vacancies"],
    // }),
    // deleteVacancy: build.mutation<any, string>({
    //   query: (id) => ({
    //     url: `/vacancies/${id}`,
    //     method: "DELETE",
    //   }),
    //   invalidatesTags: ["vacancies"],
    // }),
    // createVacancy: build.mutation<any, any>({
    //   query: (data) => ({
    //     url: "/vacancies",
    //     method: "POST",
    //     body: data,
    //   }),
    //   invalidatesTags: ["vacancies"],
    // }),
  }),
  overrideExisting: true,
});
export const {
  useGetVacanciesQuery,
  //   useGetSingleVacancyQuery,
  //   useUpdatedVacancyMutation,
  //   useDeleteVacancyMutation,
  //   useCreateVacancyMutation,
} = vacanciesApi;
