import {
  WiRaindrop,
  WiThermometer,
  WiWindDeg,
  WiDegrees,
  WiStrongWind,
} from "react-icons/wi";
const Card = ({ data }) => {
  const {
    name,
    temperature,
    temperatureUnit,
    probabilityOfPrecipitation,
    shortForecast,
    windSpeed,
    windDirection,
  } = data;
  return (
    <div className="flex flex-col gap-y-5">
      <div className="flex justify-between items-center sm:gap-x-10">
        <div className="text-white text-3xl font-bold tracking-tight leading-snug">
          {name}
        </div>
        <div className="flex justify-evenly">
          <div className="flex items-center text-white text-xl font-light justify-end">
            <WiThermometer size={20} color={"white"} />
            {temperature}
            {/* <WiDegrees size={30} /> */}
            {temperatureUnit}
          </div>
          <div className="flex text-white items-center justify-end text-xl font-light">
            <WiRaindrop size={30} color={"cyan"} />
            {probabilityOfPrecipitation.value}%
          </div>
        </div>
      </div>
      <div className="text-white mb-5 text-lg font-light sm:w-90">
        {shortForecast}
      </div>
    </div>
  );
};

export default Card;
