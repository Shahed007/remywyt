/* eslint-disable @typescript-eslint/no-explicit-any */
import baseApi from "@/redux/api/baseApi";


const applicationsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    uploadResume: build.mutation<{ message: string }, { file: File }>({
      query: ({ file }) => {
        const formData = new FormData();
        formData.append("file", file);
        return {
          url: "/file/resume",
          method: "POST",
          body: formData,
        };
      },
      invalidatesTags: ["file"],
    }),
    getApplications: build.query<any, void>({
      query: () => ({
        url: "/applications/public",
        method: "GET",
      }),
      providesTags: ["applications"],
    }),
    getSingleApplication: build.query<any, string>({
      query: (id) => ({
        url: `/applications/public/${id}`,
        method: "GET",
      }),
      providesTags: ["applications"],
    }),
    createApplication: build.mutation<any, any>({
      query: (data) => ({
        url: "/applications",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["applications"],
    }),
    deleteApplication: build.mutation<any, string>({
      query: (id) => ({
        url: `/applications/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["applications"],
    }),
  }),
  overrideExisting: true,
});

export const { useUploadResumeMutation } = applicationsApi;
