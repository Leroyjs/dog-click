import { MainWrapper } from '../components/general/MainWrapper';
import { SearchMainSection } from '../components/sections/SearchMainSection';
import { TitleBlock } from '../components/sections/TitleBlock';
import { Footer } from '../components/general/Footer';
import someDogBGImg from '../media/some-dog-bg.jpg';

export default function Search() {
    return (
        <MainWrapper>
            <TitleBlock breadCrumbsList={breadCrumbsList} img={someDogBGImg}>
                Мы сотрудничаем только с проверенными заводчиками
            </TitleBlock>
            <SearchMainSection />
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
        href: false,
    },
];
