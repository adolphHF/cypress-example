import api from "../api";

export const getSearchMovie = async (search: string) => {
  try {
    const { data } = await api.get("/search/movie", {
      params: {
        query: search,
        include_adult: false,
        language: "en-US",
        page: 1,
      },
    });
    return data;
  } catch (error) {
    throw error;
  }
};
