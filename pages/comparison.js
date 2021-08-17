import { Footer } from "../components/general/Footer";
import { MainWrapper } from "../components/general/MainWrapper";
import { СomparisonMainSection } from "../components/sections/ComparisonMainSection";
import { TitleBlock } from "../components/sections/TitleBlock";
import someDogBGImg from '../media/some-dog-bg.jpg';

export default function Comparison() {
    return (
        <MainWrapper>
            <TitleBlock breadCrumbsList={breadCrumbsList} img={someDogBGImg}>
                Мы&nbsp;сотрудничаем только с&nbsp;проверенными заводчиками
            </TitleBlock>
            <СomparisonMainSection/>
            <Footer />
        </MainWrapper>
    )
}
const breadCrumbsList = [
    {
        text: 'Главная',
        href: '/',
    },
    {
        text: 'Сравнение щенков',
        href: false,
    },
];