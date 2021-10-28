import React from 'react';

const Song = ({saveLyrics, title}) => {

   
    return ( 
        <>
            <h2>{title}</h2>
            <p className="lyrics">{saveLyrics}</p>
     
        </>
        );
}
 
export default Song;