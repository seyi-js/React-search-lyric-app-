import React, { useState, useEffect } from 'react';
import Axios from 'axios'
import Spinner from '../layout/Spinner';
import { Link } from 'react-router-dom';
import Moment from "react-moment"
const Lyrics = (props) => {
    const [ track, setTrack ] = useState( {} );
    const [ lyrics, setLyrics ] = useState( {} );
    const id = props.match.params.id;
    console.log(id)
    useEffect( () => {
        Axios
            .get(
                `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${
                props.match.params.id
                }&apikey=${ process.env.REACT_APP_MM_KEY }`
            )
            .then( res => {
                let lyrics = res.data.message.body.lyrics;
                setLyrics( { lyrics } );

                return Axios.get(
                    `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.get?track_id=${
                    props.match.params.id
                    }&apikey=${ process.env.REACT_APP_MM_KEY }`
                )
                    .then( res => {
                        let track = res.data.message.body.track;
                        console.log(track)
                        setTrack( { track } )
                    })
            
        })
    },[props.match.params.id])
   
    return (
        <React.Fragment>
    { ( track === undefined || lyrics === undefined || Object.keys( track ).length === 0 || Object.keys( lyrics ).length === 0 ) ?
             <Spinner/>
         :
            
                <React.Fragment>
                    <Link to="/" className="btn btn-dark btn-sm mb-4">
                        Back</Link>
                    
                        <div className="card">
                        <h5 className="card-header">
                          {track.track.track_name} by{" "}
                          <span className="text-secondary">{track.track.artist_name}</span>
                        </h5>
                        <div className="card-body">
                          <p className="card-text">{lyrics.lyrics.lyrics_body}</p>
                        </div>
                      </div>
              
                      <ul className="list-group mt-3">
                        <li className="list-group-item">
                          <strong>Album ID</strong>: {track.track.album_id}
                        </li>
                        <li className="list-group-item">
                          <strong>Song Genre</strong>:{" "}
                          {track.track.primary_genres.music_genre_list.length === 0
                            ? "NO GENRE AVAILABLE"
                            : track.track.primary_genres.music_genre_list[0].music_genre
                                .music_genre_name}
                        </li>
                        <li className="list-group-item">
                          <strong>Explicit Words</strong>:{" "}
                          {track.track.explicit === 0 ? "No" : "Yes"}
                        </li>
                        <li className="list-group-item">
                          <strong>Release Date</strong>:{" "}
                          <Moment format="MM/DD/YYYY">
                            {track.track.first_release_date}
                          </Moment>
                        </li>
                      </ul>
            </React.Fragment>
            
        }
        </React.Fragment>
    )
}

export default Lyrics