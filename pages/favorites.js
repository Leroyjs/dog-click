import { Footer } from '../components/general/Footer';
import { MainWrapper } from '../components/general/MainWrapper';
import { FavoritesMainSection } from '../components/sections/FavoritesMainSection';
import { TitleBlock } from '../components/sections/TitleBlock';
import someDogBGImg from '../media/some-dog-bg.jpg';

export default function Favorites() {
    return (
        <MainWrapper>
            <TitleBlock breadCrumbsList={breadCrumbsList} img={someDogBGImg}>
                Мы&nbsp;сотрудничаем только с&nbsp;проверенными заводчиками
            </TitleBlock>
            <FavoritesMainSection />
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
        text: 'Избранное',
        href: false,
    },
];
