import { useEffect, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [visitedCountries,setVisitedCountries] = useState([])
  const [visitedFlags,setVisitedFlags] = useState([]);



  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  const handleVisitedCounty = (country) =>{
    console.log('add this to your visited country!')
    const newVisitedCountries = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountries)

  }

  const handlevisitedFlags = flags => {
    const newVisitedFlags = [...visitedFlags, flags];
    setVisitedFlags(newVisitedFlags)
  }

  // remove array from an array in an state 
  // use filer to select all the elements except one you want to remove 

  return (
    <div>
      <h3>Countries:{countries.length}</h3>
      {/* Visited COuntry */}
      <div>
          <h5>Visited Countries:{visitedCountries.length}</h5>
          <ul>
              {
                visitedCountries.map(country => 
                    <li key={country.cca3}>{country.name.common}</li>

                )
              }
          </ul>
      </div>
        <div className="flag-conatiner">
          {
            visitedFlags.map((flag,idx )=> <img key={idx} src={flag}></img>)
          }

        </div>

        {/* Display Countries */}
      <div className="country-container">
        {
        countries.map((country) => (
          <Country 
          key={country.cca3}
          handleVisitedCounty={handleVisitedCounty}
          handlevisitedFlags={handlevisitedFlags}
           country={country}>

           </Country>
        ))
        
        }
      </div>
    </div>
  );
};
export default Countries;
