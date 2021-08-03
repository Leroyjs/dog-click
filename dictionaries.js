import axios from 'axios';
import { config } from './config.js'

const getBreeds = () => {
    const url = '/api/dictionaries/breeds'
    return getDictionary(url);
};
const getCities = () => {
    const url = '/api/dictionaries/cities'
    return getDictionary(url);
};
const getDimensions = () => {
    const url = '/api/dictionaries/sizes'
    return getDictionary(url);
};
const getColors = () => {
    const url = '/api/dictionaries/colors'
    return getDictionary(url);
};

async function getDictionary(url){
    let dictionary = false;
    await axios.get(config.domain + url)
    .then(function (response) {
        dictionary = response.data
    })
    .catch(function (error) {
        console.log(error);
    });
    return dictionary
}

export {getBreeds,getCities,getDimensions,getColors}