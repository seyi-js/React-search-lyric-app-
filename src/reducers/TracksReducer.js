import {GET_TRACKS, SEARCH_TRACKS} from '../actions/types'

const initialState = {
    track_list: [],
    heading: 'Top 20 Songs'
}


export default ( state = initialState, action ) => {
    switch ( action.type ) {
        case GET_TRACKS:
            return {
                ...state,
                track_list: action.payload,
                
                
            };
        case SEARCH_TRACKS:
            return {
                ...state,
                track_list: action.payload,
                heading: 'Search Results'
            }
        default:
            return state;
        }
    }
   