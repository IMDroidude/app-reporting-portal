import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Replace with your Azure DevOps organization name and personal access token
const organization = 'devops-ais';
const personalAccessToken = 'D1ijCqZTiu4U5ymKx8BwCCHXhQmKzZOt1cvwiaDvza7iF7qHvS5PJQQJ99AKACAAAAAAvEZnAAASAZDO3dIe';
///G13g7jKXbE7W3MTKjS6ZWFKxsnV27IyhQKjoZUVHFptTeQwDPChFJQQJ99BAACAAAAAAvEZnAAASAZDOMpHa

export const azureApi = createApi({
  reducerPath: 'azureApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `https://dev.azure.com/${organization}/_apis/`,
    prepareHeaders: (headers) => {
      headers.set('Authorization', `Basic ${btoa(`:${personalAccessToken}`)}`);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    fetchProjects: builder.query<Project[], void>({
      query: () => 'projects?api-version=7.1-preview.4',
      transformResponse: (response: any) => response.value, // Extract the projects array
    }),
  }),
});

export const { useFetchProjectsQuery } = azureApi;