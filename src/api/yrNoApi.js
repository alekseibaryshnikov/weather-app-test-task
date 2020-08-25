export async function getWeather() {
    let coords = { latitude: '', longitude: '' };

    try {
        const { coords: { latitude, longitude } } = await getCurrentPostion();
        coords = { latitude, longitude };
    } catch (error) {
        console.warn('Error with geolocation API.. Set default Munich weather..', error);
        coords = { longitude: '48.1351', latitude: '11.5820' }
    }

    const response = await fetch(`https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=${coords.latitude}&lon=${coords.longitude}`);

    if (response.ok) {
        return response.json();
    } else {
        throw Error(`Response status is ${response.status}`);
    }
}

function getCurrentPostion() {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
    });
}