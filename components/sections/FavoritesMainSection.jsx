import { BackButton } from '../../components/UI/BackButton';
import { Description } from '../UI/Description';
import Link from 'next/link';
import { ClearList } from '../UI/ClearList';
import { Card } from '../common/Card';
import { Pagination } from '../UI/Pagination';

export const FavoritesMainSection = () => {
    return (
        <section className="favorites-main-section main-padding">
            <Link href="/">
                <a>
                    <BackButton>Назад к предыдущей странице</BackButton>
                </a>
            </Link>
            <h2 className="favorites-main-section__title text_type_h4">
                Избранное
            </h2>
            <div className="favorites-main-section__row">
                <Description>15 объявлений</Description>
                <ClearList>Очистить список</ClearList>
            </div>
            <div className="favorites-main-section__items-wrapper">
                <div className="favorites-main-section__item-wrapper">
                    <Card />
                </div>
                <div className="favorites-main-section__item-wrapper">
                    <Card />
                </div>
                <div className="favorites-main-section__item-wrapper">
                    <Card />
                </div>
                <div className="favorites-main-section__item-wrapper">
                    <Card />
                </div>
                <div className="favorites-main-section__item-wrapper">
                    <Card />
                </div>
                <div className="favorites-main-section__item-wrapper">
                    <Card />
                </div>
                <div className="favorites-main-section__item-wrapper">
                    <Card />
                </div>
                <div className="favorites-main-section__item-wrapper">
                    <Card />
                </div>
                <div className="favorites-main-section__pagination">
                    <Pagination />
                </div>
            </div>
        </section>
    );
};
