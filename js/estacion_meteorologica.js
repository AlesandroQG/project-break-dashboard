/*
location > name
location > country

current > temp_c
current > condition > icon
current > condition > text (img alt)
current > wind_kph
current > humidity
current > precip_in

forecast > forecastday[0] > hour -> iterate
    time.split(" ")[1]
    condition > icon
    condition > text (img alt)
    temp_c
*/

const locationDiv = document.getElementById("location"),
currentWeather = document.getElementById("current-weather"),
forecastDiv = document.getElementById("forecast");

const obtenerDatos = async () => {
    try {
        const response = await fetch("https://api.weatherapi.com/v1/forecast.json?key=242a08d5200244efb2385204250812&q=Vitoria-Gasteiz&days=1&aqi=no&alerts=no");
        if (!response.ok) {
            throw new Error(`No se pudo obtener los datos: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
};

obtenerDatos().then((data) => {
    const {location: {name, country}, current: {temp_c, condition: {icon, text}, wind_kph, humidity, precip_in}} = data;
    locationDiv.textContent = `${name}, ${country}`;
    const template = `<div>
        <img src="${icon}" alt="${text}">
        <p>${temp_c} ºC</p>
    </div>
    <div><ul>
        <li>Precipitaciones: ${precip_in}%</li>
        <li>Humedad: ${humidity}%</li>
        <li>Viento: ${wind_kph} km/h</li>
    </ul></div>`;
    currentWeather.innerHTML = template;
    const forecast = data.forecast.forecastday[0].hour;
    const forecastStructure = forecast.map((hour) => {
        const {time, condition: {icon, text}, temp_c} = hour;
        const hora = time.split(" ")[1];
        const template = `<div>
            <p>${hora}</p>
            <img src="${icon}" alt="${text}">
            <p>${temp_c} ºC</p>
        </div>`;
        return template;
    }).join("");
    forecastDiv.innerHTML = forecastStructure;
});
