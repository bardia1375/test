import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: [],
};
const movieSlices = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setMovies: (state, action) => {
      state.movies = action.payload;
    },
  },
});
export const { setMovies } = movieSlices.actions;
export const selectMovies = (state) => state.movie.movies;
export default movieSlices.reducer;
