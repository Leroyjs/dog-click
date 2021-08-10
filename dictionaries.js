import axios from 'axios';
import { config } from './config'

const getBreeds = () => {
    const url = '/api/dictionaries/breeds'
    const data = getDictionary(url);
    return data;
};
const getCities = () => {
    const url = '/api/dictionaries/cities'
    const data = getDictionary(url);
    return data;
};
const getDimensions = () => {
    const url = '/api/dictionaries/sizes'
    const data = getDictionary(url);
    return data;
};
const getColors = () => {
    const url = '/api/dictionaries/colors'
    const data = getDictionary(url);
    return data;
};

async function getDictionary(url){
    let data = {items:[]};
    await axios.get(config.domain + url)
    .then(function (response) {
        data = response.data
    })
    .catch(function (error) {
        console.log(error);
    });
    return data
}

export {getBreeds,getCities,getDimensions,getColors}