import api from "../api";

export const getTrendingMovies = async (time: "day" | "week") => {
  try {
    const { data } = await api.get(`/trending/movie/${time}`);
    return data;
  } catch (error) {
    throw error;
  }
};
