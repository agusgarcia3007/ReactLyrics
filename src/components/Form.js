import React, {useState} from 'react';




const Form = ({setLyrics}) => {


    const [searching, setSearching] = useState({
        artist:'',
        song:'',
        error:false
    });

    const {artist, song, error} = searching;

    const handleState = e => {
        setSearching({
            ...searching,
            [e.target.name] : e.target.value
        })
    }//save input data into state


    const handleSubmit  = e => {
        e.preventDefault();

        if(artist.trim() ==='' || song.trim() === ''){
            setSearching({error:true});
            return;
        }
        setSearching({error:false});

        setLyrics(searching);

    }

    return ( 
        <div className="bg-info">
            {error ? <p className="alert alert-danger text-center p-2">All fields are required</p> : null}
            <div className="container">
                <div className="row">
                    <form
                        className='col card text-white bg-transparent mb-5 pt-5 pb-2'
                        onSubmit={handleSubmit}
                    >
                        <fieldset>
                            <legend className="text-center">Songs Lyrics Gallery</legend>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="artist">Artist</label>
                                        <input
                                            type='text'
                                            className='form-control'
                                            name='artist'
                                            placeholder="who is your favourite artist?"
                                            onBlur={handleState}
                                         />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="song">Song</label>
                                            <input
                                                type='text'
                                                className='form-control'
                                                name='song'
                                                placeholder="Song name"
                                                onBlur={handleState}
                                                />
                                    </div>
                                </div>
                            </div>

                            <button
                                type='submit'
                                className='btn btn-primary float-right'

                            >Search</button>
                        </fieldset>

                    </form>
                </div>
            </div>
        </div>
     );
}
 
export default Form;