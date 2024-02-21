import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '../Store';


interface paytype {
    recipent_username:string;
    password:string;
    transfer_money:number;
}

interface LoginRequest {
    username: string;
    email:string;
    password: string;
}

interface RegisterRequest {
    name:string;
    username: string;
   email: string;
   password: string;
}

interface User {
    _id: string;
    username: string;
    email: string;
    password: string;
    wallet: number;
    transition: {
        id: string;
        amount: number;
        timestamp: string;
    }[];
    __v: number;
  }
  interface Transaction {
      id: string;
      amount: number;
      timestamp: string;
    }
    export const authApi = createApi({
        
        reducerPath: 'authApi',
        baseQuery: fetchBaseQuery({ baseUrl: 'https://full-stack-wallet-application.vercel.app/',
        prepareHeaders:(headers,{getState})=>{
            const authToken=(getState() as RootState).saveUserAndToken.accessToken;
            if(authToken){
                headers.set("authorization",`Bearer ${authToken}`);
            }
            return headers;
        }

                
 }),
   tagTypes: ['Auth'],
   endpoints: (builder) => ({

       login: builder.mutation<{ user: User ,accessToken:string}, LoginRequest>({
           query: (body) => ({
               url: '/login',
               method: 'POST', 
               body,
           }),
           invalidatesTags: ['Auth'],
       }),
       register: builder.mutation<void, RegisterRequest>({
           query: (body) => ({
               url: '/register',
               method: 'POST',
               body,
           }),
           invalidatesTags: ['Auth'],
       }),

       pay:builder.mutation<void,paytype>({
        query:(body)=>({
            url:'/pay',
            method:'POST',
            body,
        })
       }),

       viewbalance:builder.mutation<{balance:Number},{password:string}>({
        query:(body)=>({
            url:'viewbalance',
            method:'POST',
            body,
        })
       }),
       
       getLastMonthData: builder.query<Transaction[], void>({
           query: () => ({
               url: '/lastmonth',
               method: 'GET',
           }),
           providesTags: ['Auth'],
       }),
       getLastDayData: builder.query<Transaction[], void>({
           query: () => ({
               url: '/lastday',
               method: 'GET',
           }),
           providesTags: ['Auth'],
       }),
       getLastHourData: builder.query<Transaction[], void>({
           query: () => ({
               url: '/lasthour',
               method: 'GET',
           }),
           providesTags: ['Auth'],
       }),
       getLastYearData: builder.query<Transaction[], void>({
           query: () => ({
               url: '/lastyear',
               method: 'GET',
           }),
           providesTags: ['Auth'],
       }),




   }),
});

export const { useLoginMutation, useRegisterMutation,useGetLastMonthDataQuery,useGetLastDayDataQuery,useGetLastHourDataQuery,useGetLastYearDataQuery,usePayMutation,useViewbalanceMutation } = authApi;





