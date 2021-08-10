import { MainWrapper } from '../../components/general/MainWrapper';
import { DetailCardMainSection } from '../../components/sections/DetailCardMainSection';
import { TitleBlock } from '../../components/sections/TitleBlock';
import { Footer } from '../../components/general/Footer'
import someDogBGImg from '../../media/some-dog-bg.jpg';
import { useRouter } from 'next/router';
import { DetailCardDescSection } from '../../components/sections/DetailCardDescSection'
import axios from 'axios';
import { config } from '../../config'

export default function DetailCard({post}) {
    return (
        <MainWrapper>
            <TitleBlock breadCrumbsList={breadCrumbsList} img={someDogBGImg}>
                Мы&nbsp;сотрудничаем только с&nbsp;проверенными заводчиками
            </TitleBlock>
            <DetailCardMainSection data={post}/>
            <DetailCardDescSection motherInfo={post.motherInfo} fatherInfo={post.fatherInfo} description={post.description}/>
            <Footer />
        </MainWrapper>
    );
}

export async function getServerSideProps({query}) {
    let post = false;
    await axios.get(`${config.domain}/api/public/pets/${query.id}`)
    .then(function (response) {
        post = response.data
    })
    .catch(function (error) {
        console.log(error);
    });

    return {
        props: { post }
    }
}

const breadCrumbsList = [
    {
        text: 'Главная',
        href: '/',
    },
    {
        text: 'Поиск',
        href: '/search',
    },
    {
        text: 'Объявление №145',
        href: false,
    },
];
