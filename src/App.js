import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import Song from './components/Song';
import Info from './components/Info';

const App = () => {


  const [lyrics, setLyrics] = useState({});
  const [saveLyrics, setSaveLyrics] = useState('');
  const [title, setTitle] = useState('');
  const [info, setInfo] = useState({});

  useEffect(() => {
    if(Object.keys(lyrics).length === 0) return;

    const lyricsApiFetch = async () => {

      const { artist, song } = lyrics

      const url =`https://api.lyrics.ovh/v1/${artist}/${song}`;
      const url2 = `https://theaudiodb.com/api/v1/json/1/search.php?s=${artist}`;

      const [resp, info] = await Promise.all([
        axios(url),
        axios(url2)
      ])

      
      setSaveLyrics(resp.data.lyrics);
      setTitle(song);
      setInfo(info.data.artists[0]);
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
            <Info 
              info={info}
            />
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