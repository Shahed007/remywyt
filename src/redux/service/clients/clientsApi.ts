/* eslint-disable @typescript-eslint/no-explicit-any */
import baseApi from "@/redux/api/baseApi";

interface CompanyProfile {
  companyName: string;
  details: {
    description: string;
    employees: number;
    recruitmentStruggles: string;
    toneOfVoice: string;
    website: string;
  };
  avatar: string;
  bannerImage: string;
}

const clientsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getClients: build.query<any, void>({
      query: () => ({
        url: "/clients/public",
        method: "GET",
      }),
      providesTags: ["clients"],
    }),
    getSingleClient: build.query<any, string>({
      query: (id) => ({
        url: `/clients/public/${id}`,
        method: "GET",
      }),
      providesTags: ["clients"],
    }),
    createClient: build.mutation<any, CompanyProfile>({
      query: (data) => ({
        url: "/clients",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["clients"],
    }),
    updateClient: build.mutation<any, { id: string; data: CompanyProfile }>({
      query: ({ id, data }) => ({
        url: `/clients/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["clients"],
    }),
    deleteClient: build.mutation<any, string>({
      query: (id) => ({
        url: `/clients/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["clients"],
    }),
  }),
  overrideExisting: true,
});

export const {
  useGetClientsQuery,
  useGetSingleClientQuery,
  useCreateClientMutation,
  useUpdateClientMutation,
  useDeleteClientMutation,
} = clientsApi;
