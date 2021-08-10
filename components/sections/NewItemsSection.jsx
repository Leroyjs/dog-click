import { Card } from '../common/Card';
import { Description } from '../UI/Description';
import { H2 } from '../UI/H2';
import { ButtonBorder } from '../UI/ButtonBorder';
import Link from 'next/link';

import { connect } from 'react-redux';
import { addFaforiteItem, removeFavoriteItem, addComparisonItem, removeComparisonItem } from '../../redux/actions';
import { useDispatch } from 'react-redux'

const mapStateToProps = (state) => {
    return {
        favoriteIdList: state.favorite.map(item=>item.id),
        comparisonIdList: state.comparison.map(item=>item.id)
    };
};


export const NewItemsSection = connect(mapStateToProps, { addFaforiteItem,removeFavoriteItem, addComparisonItem, removeComparisonItem })(({posts=[], favoriteIdList, comparisonIdList}) => {
    const dispatch = useDispatch()
    return (
        <section className="new-items-section main-padding">
            <H2 addСlasses="new-items-section__title">
                Новые <span className="text_color_main">объявления</span>
            </H2>
            <Description addСlasses="new-items-section__desc">
                Последние опубликованные предложения
            </Description>
            <div className="new-items-section__list">
                {posts.map(item=>(
                    <div key={item.id} className="new-items-section__card-wrapper">
                        <Card
                            addComparisonItem={()=>{dispatch(addComparisonItem(item))}}
                            removeComparisonItem={()=>{dispatch(removeComparisonItem(item))}}
                            isComparison={comparisonIdList.indexOf(item.id) != -1}
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
                    </div>
                    ))}
            </div>
            <div className="new-items-section__button-wrapper">
                <Link href="/search">
                    <a>
                        <ButtonBorder>Посмотреть всех</ButtonBorder>
                    </a>
                </Link>
            </div>
        </section>
    );
});
