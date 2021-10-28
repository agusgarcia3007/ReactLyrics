import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import Song from './components/Song';

const App = () => {


  const [lyrics, setLyrics] = useState({});
  const [saveLyrics, setSaveLyrics] = useState('');
  const [title, setTitle] = useState('');

  useEffect(() => {
    if(Object.keys(lyrics).length === 0) return;

    const lyricsApiFetch = async () => {

      const { artist, song } = lyrics

      const url =`https://api.lyrics.ovh/v1/${artist}/${song}`;
      const resp = await axios(url);
      setSaveLyrics(resp.data.lyrics);
      setTitle(song);
    }
    lyricsApiFetch();
  },[lyrics])

  return ( 
    <> 
      <Form 
        setLyrics={setLyrics}
      />

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">

          </div>
          <div className="col-md-6">
            <Song saveLyrics={saveLyrics} title={title}/>
          </div>
        </div>
      </div>
    </>
   );
}
 
export default App;