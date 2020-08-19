export async function getWeather() {
    try {
        const {coords: {latitude, longitude}} = await getCurrentPostion();
        const response = await fetch(`https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=${latitude}&lon=${longitude}`);
        
        if (response.ok) {
            return response.json();
        } else {
            throw Error(`Response status is ${response.status}`);
        }
    } catch (error) {
        console.error(`Error when was fetching weather data.. ${error}`);
    }
}

function getCurrentPostion() {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
    });
}