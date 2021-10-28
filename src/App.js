import axios from 'axios';
import React, { useState, useEffect } from 'react'
import Form from './components/Form';

const App = () => {


  const [lyrics, setLyrics] = useState({});
  const [saveLyrics, setSaveLyrics] = useState('');


  useEffect(() => {
    if(Object.keys(lyrics).length === 0) return;

    const lyricsApiFetch = async () => {

      const { artist, song } = lyrics

      const url =`https://api.lyrics.ovh/v1/${artist}/${song}`;
      const resp = await axios(url);
      setSaveLyrics(resp.data.lyrics);
    }
    lyricsApiFetch();
  },[lyrics])

  return ( 
    <> 
      <Form 
        setLyrics={setLyrics}
      />
    </>
   );
}
 
export default App;