import { combineReducers } from "redux"; //named import

const songsReducer = () => {
  return [
    { title: "like a star", duration: "3:56" },
    { title: "sunshine", duration: "4:10" },
    { title: "california dreaming", duration: "5:16" },
    { title: "Cold play", duration: "4:48" },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    //template for additional types in future
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
