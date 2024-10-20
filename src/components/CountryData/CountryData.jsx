

const CountryData = (props) => {
  const {country, handleVisitedCounty,handlevisitedFlags} = props ;
  console.log('inside Country data' , country, handleVisitedCounty,handlevisitedFlags)
  return (
    <div>
      <p><small>Country Data: {country.name.common}</small></p>
    </div>
  );
};

export default CountryData;