const axios = require('axios');



const getClima = async(lat, lng) => {


    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=a60682abb5d571699c6425dc0520d2a1&units=metric`)
    return resp.data.main.temp;

}









module.exports = {
    getClima
}