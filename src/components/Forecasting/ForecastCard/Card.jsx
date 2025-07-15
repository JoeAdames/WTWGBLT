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
    <div className="bg-slate-50/15 text-slate-400 items-between rounded-xl p-2 border border-slate-200 dark:border-slate-700 my-2 sm:min-w-lg ">
      <div className="flex justify-between items-center my-2">
        <div className="text-white text-lg">{name}</div>
        <div className="flex justify-evenly">
          <div className="flex items-center text-white text-xl justify-end">
            <WiThermometer size={20} color={"white"} />
            {temperature}
            {/* <WiDegrees size={30} /> */}
            {temperatureUnit}
          </div>
          <div className="flex text-white items-center justify-end text-xl">
            <WiRaindrop size={30} color={"cyan"} />
            {probabilityOfPrecipitation.value}%
          </div>
        </div>
      </div>
      <div className="text-white mb-5 text-lg w-90">{shortForecast}</div>
    </div>
  );
};

export default Card;
