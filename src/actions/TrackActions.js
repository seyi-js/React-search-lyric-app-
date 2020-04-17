import Axios from 'axios';

import {
  GET_TRACKS,
  SEARCH_TRACKS
  
} from './types';

export const loadTracks = () =>dispatch=>{
  Axios
    .get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=20&country=us&f_has_lyrics=1&apikey=${process.env.REACT_APP_MM_KEY}`)
    .then( res => {
      dispatch( {
        type: GET_TRACKS,
        payload: res.data.message.body.track_list
      })
    })
  .catch(err => console.log(err))
}

export const findTrack = (track) =>dispatch=>{
  Axios
    .get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.search?q_track=${track}&page_size=20&page=1&s_track_rating=desc&apikey=${process.env.REACT_APP_MM_KEY}`)
    .then( res => {
      dispatch( {
        type: SEARCH_TRACKS,
        payload: res.data.message.body.track_list
      })
    })
  .catch(err => console.log(err))
}