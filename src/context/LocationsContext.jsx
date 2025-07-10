import React, { useState, useContext, createContext, useEffect  } from 'react';
import { useBadges } from './BadgeContext';
import { useForeCast } from './ForecastContext';


const LocationContext = createContext();

export const LocationProvider = ({children}) => {
    const [location, setLocation] = useState("New York City");
    const {setUrl} = useForeCast();
    const {badges, setBadges} = useBadges();



    async function getLocationData() {
            const res = await fetch(`https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(location)}&format=json&limit=1`);
            const data = await res.json();
            if(data.length === 0) throw new Error('City not found');
                return {
                    lat: data[0].lat,
                    lon: data[0].lon,
                    name: data[0].name
                }
        } 


    useEffect(() => {
        async function getForeCastUrl() {
            try {
                const {lon, lat, name } = await getLocationData();

                
                const pointsRes = await fetch(`https://api.weather.gov/points/${lat},${lon}`, {
                            method: 'GET',
                            headers: {
                            'User-Agent': 'wtwgblt (jadames14@gmail.com)'
                            }
                        });
                const pointsData = await pointsRes.json();
                const forecastUrl = pointsData.properties.forecast;

                setBadges([{
                    lon:lon,
                    lat: lat,
                    name: name,
                    url: forecastUrl
                }, ...badges]);
                setUrl(forecastUrl);
            } catch(err) {
                console.log(err);
            }
        }
        getForeCastUrl();
    }, [location]);
    

    return (
        <LocationContext.Provider value={{location, setLocation}}>
            {children}
        </LocationContext.Provider>
    )
}

export const useLocation = () => useContext(LocationContext);
