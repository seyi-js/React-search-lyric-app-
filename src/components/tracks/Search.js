import React, { useState } from 'react';
import { Label, Form, FormGroup, Input } from 'reactstrap';
import { findTrack } from '../../actions/TrackActions';
import {connect } from 'react-redux'



export const Search = (props) => {
    const [ track, setTrack ] = useState( '' );

    const onChange = ( e ) => {
        setTrack(e.target.value)
    }
    const submitTrack = (e) => {
        e.preventDefault()
        props.findTrack( track )
        setTrack('')
    }
    return (
        <div className="card card-body mb-4 p-4">
            <h1 className="display-4 text-center">
                <i className="fas fa-music"></i> Search For A Song
            </h1>
            <p className="lead text-center">
                Get the lyrics for any song
            </p>
            <Form onSubmit={submitTrack}>
                <FormGroup>
                    <Label>Track Title</Label>
                    <Input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter track title..."
                        name="track"
                        value={ track }
                        onChange={onChange}
                    ></Input>
                </FormGroup>
                <button className="btn btn-info btn-lg btn-block mb-5" type="submit"
                    
                >Get Lyrics</button>
            </Form>

        </div>
    )
}
const mapStateToProps = () => ( {
     
 })

export default connect(mapStateToProps, {findTrack})(Search)