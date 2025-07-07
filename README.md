# WTWGBLT

What's the weather going to be like today?

This is what my gf and I ask each other all the time and I think its time I build a small app and display for that. 

### Weather Service
- https://api.weather.gov/

### Location Service
- https://nominatim.openstreetmap.org/search?q={location}&format=json&limit=1
- navigator.geolocation API 

Example: 
```
navigator.geolocation.getCurrentPosition(position => {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
});
```


## Experience:
- User provides a location or via geolocation
- Location Loads:
    - Current Forecast 
    - Tonight Forecast
    - 7 Day Forecast
