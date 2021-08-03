import { MainWrapper } from '../components/general/MainWrapper';
import { SearchMainSection } from '../components/sections/SearchMainSection';
import { TitleBlock } from '../components/sections/TitleBlock';
import { Footer } from '../components/general/Footer';
import someDogBGImg from '../media/some-dog-bg.jpg';
import axios from 'axios';
import { config } from '../config.js';

function Search({ posts, options }) {
    console.log(options);
    return (
        <MainWrapper>
            <TitleBlock breadCrumbsList={breadCrumbsList} img={someDogBGImg}>
                Мы&nbsp;сотрудничаем только с&nbsp;проверенными заводчиками
            </TitleBlock>
            <SearchMainSection posts={posts} options={options}/>
            <Footer />
        </MainWrapper>
    );
}

export async function getServerSideProps({query}) {
    const options = {
        "gender": null,
        "breedIds": null,
        "cityId": null,
        "colorIds": [],
        "sizeId": null,
        "priceFrom": null,
        "priceTo": null,
        "hasPedigree": null,
        "pageNum": 1,
        "pageSize": config.pageSize
    }
    for( let key in query){
        options[key] = query[key]
        if(query[key]==='true'){
            options[key] = true;
        }
        if(query[key]==='false'){
            options[key] = false;
        }
        if(key==='breedIds'){
            options[key] = [query[key]]
        }
        if(key==='priceFrom'||key==='priceTo'||key==='sizeId'){
            options[key] = +query[key]
        }
        if(key==='colorIds'){
            options[key] = query[key].split(',').map(item=>+item)
        }
    }
    let posts = false;
    await axios.post(`${config.domain}/api/public/pets`, options)
    .then(function (response) {
        posts = response.data
    })
    .catch(function (error) {
        console.log(error);
    });

    return {
        props: { posts, options }
    }
}

const breadCrumbsList = [
    {
        text: 'Главная',
        href: '/',
    },
    {
        text: 'Поиск',
        href: false,
    },
];

export default Search