import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

    export const shazamCoreApi = createApi({
        reducerPath: 'shazamCoreApi',
        baseQuery: fetchBaseQuery({
        baseUrl:'https://shazam-core.p.rapidapi.com/v1',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', 'e636dc3ecamsh2369adbc6b818b6p1acf1cjsnff7d9b0b85e5');

            return headers;
        },
        }),
        endpoints: (builder) => ({
            getTopCharts: builder.query({ query: () => '/charts/world' }),
       
        }),
    });

    export const {
        useGetTopChartsQuery,
    } = shazamCoreApi;