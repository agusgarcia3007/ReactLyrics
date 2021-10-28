import React from 'react'


const Info = ({info}) => {

    if(typeof(info) == 'undefined' || info == null)return null;

    return ( 
        <div className="card border-light">
            <div className="card-header bg-primary text-light font-weight-bold">
                {info.strArtistAlternate}
            </div>
            <div className="card-body">
                <img src={info.strArtistFanart} alt='Logo Artist' />
                <p className="card-text">{info.strBiographyEN}</p>
            </div>
        </div>
     );
}
 
export default Info;