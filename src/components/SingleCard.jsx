const SingleCard = ({data}) => {
  const {
    name,
    temperature, 
    temperatureUnit,
    probabilityOfPrecipitation,
    shortForecast
   } = data
  return (
    <div className="flex flex-col m-2 justify-between rounded-xl border p-2 min-w-sm">
      <div className="flex justify-between">
        <div className="flex flex-col">
            <div className="text-xl">{name}</div>
          <div className="text-l">{shortForecast}</div>
        </div>
        <div className="flex justify-between">
          <div className="text-xl px-2">{temperature}  {temperatureUnit}</div>
           <div className="text-xl px-2">{probabilityOfPrecipitation.value}%</div>
        </div>
      </div>
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
    </div>
  );
};

export default SingleCard;