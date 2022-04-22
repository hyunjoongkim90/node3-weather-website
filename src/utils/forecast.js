const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=f64bbd3e97bde00a9a21cd1676f6bff6&query=' + latitude +','+ longitude + '&units=f'
    request({ url, json: true }, (error, {body}) => {
        if(error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Invalid coordinates. Try again.', undefined)
        } else {
            callback(undefined, `${body.current.weather_descriptions[0]}. 현재 온도는 ${Math.round((body.current.temperature - 32) * 5/9)} ℃, 체감온도는 ${Math.round((body.current.feelslike -32) * 5/9)} ℃ 입니다.`)
        }
    })
    
}

module.exports = forecast