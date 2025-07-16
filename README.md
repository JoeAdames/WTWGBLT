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

- ~~User provides a location or via geolocation~~

- Location Loads:

- ~~Current Forecast~~

- ~~Tonight Forecast~~

- ~~7 Day Forecast~~

## Styling:

~~theme based on time of day [data.properties.periods[0].isDaytime] - return boolean~~

each forecast card to feel natural on the page

add in icons

ideally changing the theme's colors to be softer as well
Light: Soft day time colors whites, eggshells, soft oranges, maybe a dynamic blue sky background
Night: Soft night time colors dark blues and purples dynamic star background

## \*\*Day Theme

| Purpose        | Hex Color | Tailwind Class                    |
| -------------- | --------- | --------------------------------- |
| **Background** | `#F6F8FA` | `bg-slate-50`                     |
| **Primary**    | `#4D8FAC` | `text-sky-500`                    |
| **Secondary**  | `#E4B363` | `text-amber-300`                  |
| **Accent**     | `#94C9A9` | `text-emerald-300`                |
| **Muted Text** | `#8898AA` | `text-slate-400`                  |
| **Borders**    | `#E2E8F0` | `border-slate-200`                |
| **Buttons**    | `#FCD29F` | `bg-amber-200 hover:bg-amber-300` |

## **Night Theme**

| Purpose        | Hex Color | Tailwind Class                      |
| -------------- | --------- | ----------------------------------- |
| **Background** | `#1F2933` | `bg-slate-900`                      |
| **Primary**    | `#A3BFFA` | `text-sky-300`                      |
| **Secondary**  | `#F6C177` | `text-amber-400`                    |
| **Accent**     | `#E0E8F9` | `text-slate-100`                    |
| **Muted Text** | `#9CA3AF` | `text-slate-400`                    |
| **Borders**    | `#374151` | `border-slate-700`                  |
| **Buttons**    | `#374785` | `bg-indigo-800 hover:bg-indigo-700` |
