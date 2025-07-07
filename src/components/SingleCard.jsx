const SingleCard = ({data}) => {
  const {
    name,
    temperature, 
    temperatureUnit,
    probabilityOfPrecipitation,
    detailedForecast
   } = data
  return (
    <div className="flex flex-col m-2">
      <div>{name}</div>
      <div>Temperature: {temperature} {temperatureUnit}</div>
      <div>Precipitation: {probabilityOfPrecipitation.value}%</div>
      <div>{detailedForecast}</div>
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
    </div>
  );
};

export default SingleCard;