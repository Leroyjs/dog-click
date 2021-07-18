import { Card } from '../common/Card';
import { Filters } from '../common/Filters';
import { Pagination } from '../UI/Pagination';

export const SearchMainSection = () => {
    return (
        <section className="search-main-section main-padding">
            <Filters></Filters>
            <div className="search-main-section__items-wrapper">
                <div className="search-main-section__count text_type_main">
                    Найдено 315 объявлений
                </div>
                <div className="search-main-section__item-wrapper">
                    <Card />
                </div>
                <div className="search-main-section__item-wrapper">
                    <Card />
                </div>
                <div className="search-main-section__item-wrapper">
                    <Card />
                </div>
                <div className="search-main-section__item-wrapper">
                    <Card />
                </div>
                <div className="search-main-section__item-wrapper">
                    <Card />
                </div>
                <div className="search-main-section__pagination-wrapper">
                    <Pagination />
                </div>
            </div>
        </section>
    );
};
