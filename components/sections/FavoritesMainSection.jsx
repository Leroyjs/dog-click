import { BackButton } from '../../components/UI/BackButton';
import { Description } from '../UI/Description';
import Link from 'next/link';
import { ClearList } from '../UI/ClearList';
import { Card } from '../common/Card';
import { Pagination } from '../UI/Pagination';
import { connect } from 'react-redux';
import { addFaforiteItem, removeFavoriteItem, setFaforiteItems } from '../../redux/actions';
import { useDispatch } from 'react-redux'
import { useMemo } from 'react';

const mapStateToProps = (state) => {
    return {
        favoriteList: state.favorite,
        favoriteIdList: state.favorite.map(item=>item.id)
    };
};

export const FavoritesMainSection = connect(mapStateToProps, {setFaforiteItems, removeFavoriteItem, addFaforiteItem})(({favoriteList, favoriteIdList}) => {
    const dispatch = useDispatch()
    function handleClearAll(){
        dispatch(setFaforiteItems([]))
    }
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
                <Description>{favoriteList.length} объявлений</Description>
                <ClearList onClick={handleClearAll}>Очистить список</ClearList>
            </div>
            <div className="favorites-main-section__items-wrapper">
                {favoriteList.map(item=>(
                    <div key={item.id} className="favorites-main-section__item-wrapper">
                        <Card 
                        addFaforiteItem={()=>{dispatch(addFaforiteItem(item))}}
                        removeFavoriteItem={()=>{dispatch(removeFavoriteItem(item))}}
                        isFavorite={favoriteIdList.indexOf(item.id) != -1}
                        id={item.id}
                        breed={item.breed}
                        mainPhotoGuid={item.mainPhotoGuid}
                        city={item.city}
                        createDate={item.createDate} 
                        gender={item.gender}
                        name={item.name}
                        price={item.price}
                        monthsAge={item.monthsAge}
                        ownerFio={item.ownerFio}
                        />
                    </div>)
                )}
                {/* <div className="favorites-main-section__pagination">
                    <Pagination />
                </div> */}
            </div>
        </section>
    );
});
