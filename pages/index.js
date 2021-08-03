import { Footer } from '../components/general/Footer';
import { MainWrapper } from '../components/general/MainWrapper';
import { FirstSection } from '../components/sections/FirstSection';
import { NewItemsSection } from '../components/sections/NewItemsSection';
import axios from 'axios';
import { config } from '../config.js'

export default function Index({ newPosts }) {
    return (
        <MainWrapper>
            <FirstSection />
            <NewItemsSection posts={newPosts.items}/>
            <Footer />
        </MainWrapper>
    )
}

export async function getServerSideProps() {
    let newPosts = false;
    await axios.post(`${config.domain}/api/public/pets`, 
        {
            "gender": null,
            "breedIds": null,
            "cityId": null,
            "colorIds": null,
            "sizeId": null,
            "priceFrom": null,
            "priceTo": null,
            "hasPedigree": null,
            "pageNum": 1,
            "pageSize": 8
        })
    .then(function (response) {
        newPosts = response.data
    })
    .catch(function (error) {
        console.log(error);
    });

    return {
        props: { newPosts }
    }
}