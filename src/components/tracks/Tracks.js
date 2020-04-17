import React, { useEffect } from 'react';
import {loadTracks} from '../../actions/TrackActions'
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner'
import Track from './Track'
const Tracks = (props) => {
const {loadTracks} = props
    useEffect( () => {
      loadTracks()  
    },[] )
    
    const { track_list, heading } = props.tracks;

    const trackLoaded = (
        <React.Fragment>
            <h3 className="text-center mb-4">{ heading}</h3>
            <div className="row">
                { track_list.map( item => (
                    <Track key={item.track.track_id} track={ item.track}/>
                ))}
            </div>
        </React.Fragment>
        
    )
    
    return (
        <div>
            { ( track_list === undefined || track_list.length === 0 ) ? <Spinner />
            : trackLoaded}
        </div>
    )
}

const mapStateToProps = ( state ) => ( {
    tracks: state.tracks
})

export default connect(mapStateToProps, {loadTracks})(Tracks)
