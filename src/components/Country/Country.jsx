import React, { useState } from 'react';
import './Country.css'
import CountryDetail from '../CountryDetail/CountryDetail';

const Country = ({country, handleVisitedCounty,handlevisitedFlags}) => {
  // console.log(country)
  const {name,flags, population, area, cca3} = country;
  const [visited, setVisited] = useState(false);

  const handleVisited = ()=>{
    // setVisited(true) // --> by default true hole visited true
    setVisited(!visited)
  }
  
  // const passwithParams = () => handleVisitedCounty(country);
  

  return (
    <div className={`country ${visited ?  'visited': 'non-visited'}`}>
      <h3 style={{color: visited ? 'purple' : 'black'}}>{name.common}</h3>
      <img src={flags.png} alt="" />
       <p>Populations:{population}</p>
       <p>Area:{area}</p>
       <p><small>Code: {cca3}</small></p>
       <button onClick={() => handleVisitedCounty(country)}>
            Mark as Visited</button>
      <br />
        <button onClick={()=>handlevisitedFlags(country.flags.png)}>Add Flag</button>
       <br />
       <button onClick={handleVisited}>{visited ? 'Visited' : 'Going' }</button>
       {visited ? 'I have visited this country' : 'I want to visit' }
       <hr />
       <CountryDetail
          country={country}
          handleVisitedCounty={handleVisitedCounty}
          handlevisitedFlags={handlevisitedFlags}
       ></CountryDetail>
    </div>
  );
};

export default Country;