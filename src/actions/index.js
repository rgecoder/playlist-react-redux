//Action Creator

export const selectSong = (song)=>{ //named export, allows multiple exports
  //Return an action
  return{
    type:'SONG_SELECTED',
    payload: song 
  };
};

