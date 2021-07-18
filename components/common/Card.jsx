import Link from 'next/link';
import { useState } from 'react';
import { ComparisonIcon } from '../UI/ComparisonIcon';
import { FavoriteIcon } from '../UI/FavoriteIcon';
import { DogName } from './DogName';

export const Card = () => {
    const [isFavorite, setFavorite] = useState(false);
    const [isComparison, setComparison] = useState(false);
    function handleFavorite() {
        const newState = !isFavorite;
        setFavorite(newState);
    }
    function handleComparison() {
        const newState = !isComparison;
        setComparison(newState);
    }
    return (
        <Link href="/detail-card">
            <a className="card">
                <div className="card__img">
                    <FavoriteIcon
                        isActive={isFavorite}
                        onClick={handleFavorite}
                        addСlasses="card__icon card__icon_favorite"
                    />
                    <ComparisonIcon
                        isActive={isComparison}
                        onClick={handleComparison}
                        addСlasses="card__icon card__icon_comparison"
                    />
                </div>
                <div className="card__text">
                    <DogName>Луна, 1 месяц</DogName>
                    <div className="card__breed text_color_black">Сиба-ину</div>
                    <div className="card__cost text text_type_cost text_color_main">
                        35 000 ₽
                    </div>
                    <div className="card__breeder text_color_black">
                        Заводчик: Иванов Иван Иванович
                    </div>
                    <div className="card__desc-row">
                        <div className="text text_color_gray">
                            Москва (м. Выхино)
                        </div>
                        <div className="text text_color_gray">25.05.2021</div>
                    </div>
                </div>
            </a>
        </Link>
    );
};
