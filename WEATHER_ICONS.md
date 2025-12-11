# Weather Icons Setup

To make the weather icons work in your application, follow these steps:

1. **Download Weather Icons**
   - Download a set of weather icons (PNG format) for the following conditions:
     - clear-day.png
     - clear-night.png
     - cloudy.png
     - partly-cloudy-day.png
     - partly-cloudy-night.png
     - rain.png
     - showers-day.png
     - showers-night.png
     - snow.png
     - snow-showers-day.png
     - snow-showers-night.png
     - thunderstorm.png
     - wind.png
     - fog.png
     - hail.png
     - sleet.png

2. **Place Icons in the Correct Directory**
   - Create the following directory if it doesn't exist:
     ```
     src/assets/weather/
     ```
   - Place all the downloaded icon files in this directory

3. **Build and Deploy**
   - Run `npm run build` to create a production build
   - The build process will automatically copy all assets to the correct location in the `dist` folder
   - Deploy the contents of the `dist` folder to your hosting service

4. **Verify**
   - After deployment, check that the icons are accessible at URLs like:
     - `https://your-domain.com/assets/weather/clear-day.png`
     - `https://your-domain.com/assets/weather/rain.png`
     - etc.

## Recommended Icon Sources

You can find free weather icons at:
- [Weather Icons by erikflowers](https://erikflowers.github.io/weather-icons/)
- [Icons8 Weather Icons](https://icons8.com/icons/weather)
- [Flaticon Weather Icons](https://www.flaticon.com/search?word=weather)

Make sure to download icons with the exact filenames listed above for the application to work correctly.
