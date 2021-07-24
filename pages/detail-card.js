import { MainWrapper } from '../components/general/MainWrapper';
import { DetailCardMainSection } from '../components/sections/DetailCardMainSection';
import { TitleBlock } from '../components/sections/TitleBlock';
import { Footer } from '../components/general/Footer'
import someDogBGImg from '../media/some-dog-bg.jpg';

export default function DetailCard() {
    return (
        <MainWrapper>
            <TitleBlock breadCrumbsList={breadCrumbsList} img={someDogBGImg}>
                Мы сотрудничаем только с проверенными заводчиками
            </TitleBlock>
            <DetailCardMainSection />
            <Footer />
        </MainWrapper>
    );
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
