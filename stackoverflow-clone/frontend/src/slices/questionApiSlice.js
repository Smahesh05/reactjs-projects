import { apiSlice } from "./apiSlice";

const ANSWERS_URL = `http://localhost:5000/api/questions`;

export const questionApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAnswers: builder.query({
      query: () => ({
        url: ANSWERS_URL,
      }),
    }),
    askQuestion: builder.mutation({
      query: (data) => ({
        url: `${ANSWERS_URL}/ask`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Question"],
    }),
  }),
});

export const { useGetAnswersQuery, useAskQuestionMutation } = questionApiSlice;
