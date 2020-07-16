const axios = require('axios');

const getLugarLatLng = async(dir) => {
    const encodeUrl = encodeURI(dir);



    const instance = axios.create({
        baseURL: `https://geocode.xyz/${encodeUrl}?json=1`
    });
    /*estamos usando una API diferente a la del curos asi que  
        recuerda que debes mirar bien la posicion para 
        los resultado correspondientes " standar-longt-alt.loc"
        se encuentran esos directorios*/
    const resp = await instance.get();

    if (resp.data.matches === null) {
        throw new Error(`No hay resultados para ${dir}`);
    }
    const data = resp.data;
    const direccion = data.standard.city;
    const lat = data.latt;
    const lng = data.longt;


    return {
        direccion,
        lat,
        lng
    }

}


module.exports = {
    getLugarLatLng
}