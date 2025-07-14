import {
  WiRaindrop,
  WiThermometer,
  WiWindDeg,
  WiDegrees,
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
    <div className="flex flex-col m-2 items-between rounded-xl p-2 min-w-sm border border-slate-200 dark:border-slate-700">
      {name}, {temperature}, {temperatureUnit}, {probabilityOfPrecipitation.value}, {shortForecast}, {windSpeed}, {windDirection}
    </div>
  );
};

export default Card;
