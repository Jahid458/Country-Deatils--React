import CountryData from "../CountryData/CountryData";



const CountryDetail = (props) => {
  // const {country, handleVisitedCounty,handlevisitedFlags} = props;
  return (
    <div>
      <h4>Country Deatails</h4>
      <hr />
      {/* <CountryData
          country={country}
          handleVisitedCounty={handleVisitedCounty}
          handlevisitedFlags={handlevisitedFlags}
      ></CountryData> */}
    <CountryData {...props}></CountryData>

      
    </div>
  );
};

export default CountryDetail;