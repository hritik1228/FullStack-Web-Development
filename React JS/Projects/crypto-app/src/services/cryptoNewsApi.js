import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoNewsHeaders = {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': '99cd5336b0mshc916bf58ac02534p150ad9jsnf51a1925d639',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
}

const baseUrl = 'https://bing-news-search1.p.rapidapi.com/';

const createRequest = (url) => ({ url, headers: cryptoNewsHeaders })

// https://bing-news-search1.p.rapidapi.com/news?safeSearch=Off&textFormat=Raw&count=10&category=ScienceAndTechnology&mkt=en-IN

export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            query: ({ newsCategory, count }) => createRequest(`news?safeSearch=Off&textFormat=Raw&count=${count}&category=${newsCategory}&mkt=en-IN`)
        })
    })
})

export const { useGetCryptoNewsQuery } = cryptoNewsApi