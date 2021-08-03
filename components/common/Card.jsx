import Link from 'next/link';
import { useState } from 'react';
import { ComparisonIcon } from '../UI/ComparisonIcon';
import { FavoriteIcon } from '../UI/FavoriteIcon';
import { DogName } from './DogName';

export const Card = ({addFaforiteItem,removeFavoriteItem,isFavorite, breed, city, createDate, gender, id, mainPhotoGuid, name, price, monthsAge, ownerFio}) => {
    // const [isFavorite, setFavorite] = useState(false);
    const [isComparison, setComparison] = useState(false);
    function handleFavorite(e) {
        e.preventDefault()
        if(isFavorite){
            removeFavoriteItem()
        }else{
            addFaforiteItem()
        }
    }
    function handleComparison(e) {
        e.preventDefault()
        const newState = !isComparison;
        setComparison(newState);
    }
    const imgStyles = {
        backgroundImage: `url('https://res.cloudinary.com/leninsdo/image/upload/petstory/${mainPhotoGuid}')`
    }
    return (
        <Link href={"/detail-card/"+id}>
            <a className="card">
                <div className="card__img" style={imgStyles}>
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
                    <DogName isMale={gender}>{name}, {monthsAge} месяц</DogName>
                    <div className="card__breed text_color_black">{breed}</div>
                    <div className="card__cost text text_type_cost text_color_main">
                        {price} ₽
                    </div>
                    <div className="card__breeder text_color_black">
                        {ownerFio&&`Заводчик: ${ownerFio}`} 
                    </div>
                    <div className="card__desc-row">
                        <div className="text text_color_gray">
                            {city}
                        </div>
                        <div className="text text_color_gray">{createDate}</div>
                    </div>
                </div>
            </a>
        </Link>
    );
};
