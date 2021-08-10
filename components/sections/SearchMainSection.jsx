import { useState } from 'react';
import { Card } from '../common/Card';
import { Filters } from '../common/Filters';
import { ButtonBorder } from '../UI/ButtonBorder';
import { Pagination } from '../UI/Pagination';
import { config } from '../../config.example';
import { useRouter } from 'next/router'

import { connect } from 'react-redux';
import { addFaforiteItem, removeFavoriteItem, addComparisonItem, removeComparisonItem } from '../../redux/actions';
import { useDispatch } from 'react-redux'

const mapStateToProps = (state) => {
    return {
        favoriteIdList: state.favorite.map(item=>item.id),
        comparisonIdList: state.comparison.map(item=>item.id)
    };
};

export const SearchMainSection = connect(mapStateToProps, { addFaforiteItem,removeFavoriteItem, addComparisonItem, removeComparisonItem })(({ posts, options, favoriteIdList, comparisonIdList }) => {
    const dispatch = useDispatch()
    const router = useRouter()
    const [filtersIsOpen, setFiltersIsOpen] = useState(false);
    function handleOpenModal() {
        if (filtersIsOpen) {
            window.Freezer.unFreeze();
            setFiltersIsOpen(false);
        } else {
            window.Freezer.freeze();
            setFiltersIsOpen(true);
        }
    }
    function handleSelectPage(num){
        let url = '/search';
        url+='?';
        let routerQuery = Object.assign({}, router.query);
        routerQuery.pageNum=num;
        for(let query in routerQuery){
            url+=query+'='+routerQuery[query]+'&'
        }
        router.push(url)
    }
    console.log(comparisonIdList);
    return (
        <section className="search-main-section main-padding">
            <div className={"search-main-section__filters-modal main-padding"+(filtersIsOpen?' search-main-section__filters-modal_active':'')}>
                <div className="search-main-section__filters-modal-title-wrapper">
                    <div className="search-main-section__filters-modal-close" onClick={handleOpenModal}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 23L23 1" stroke="black" strokeWidth="1.5" strokeLinecap="round"/>
                            <path d="M23 23L1 1" stroke="black" strokeWidth="1.5" strokeLinecap="round"/>
                        </svg>
                    </div>
                    <div className="search-main-section__filters-modal-title text text_type_main">
                        <svg className="search-main-section__button-img" width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.0601 15.5H6.52632V7.93213L1 1.68212V0.5H16V1.67537L10.7368 7.92537V12.9571L8.0601 15.5ZM7.57895 14.5H7.62411L9.68421 12.5429V7.57463L14.7997 1.5H2.21382L7.57895 7.56787V14.5Z" fill="#000" stroke="#000" strokeWidth="0.5" strokeLinejoin="round"/>
                        </svg>
                        Фильтры
                    </div>
                </div>
                <Filters handler={handleOpenModal} options={options}/>
            </div>
            <div className="search-main-section__filters-wrapper">
                <Filters options={options}/>
            </div>
            <div className="search-main-section__items-wrapper">
                <div className="search-main-section__filters-button">
                    <ButtonBorder onClick={handleOpenModal}>
                        <svg className="search-main-section__button-img" width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.0601 15.5H6.52632V7.93213L1 1.68212V0.5H16V1.67537L10.7368 7.92537V12.9571L8.0601 15.5ZM7.57895 14.5H7.62411L9.68421 12.5429V7.57463L14.7997 1.5H2.21382L7.57895 7.56787V14.5Z" fill="#AF5B29" stroke="#AF5B29" strokeWidth="0.5" strokeLinejoin="round"/>
                        </svg>
                        Фильтры
                    </ButtonBorder>
                </div>
                <div className="search-main-section__count text_type_main">
                    Найдено {posts.total} объявлений
                </div>
                {posts.items.map(item=>(
                    <div key={item.id} className="search-main-section__item-wrapper">
                        <Card 
                            addComparisonItem={()=>{dispatch(addComparisonItem(item))}}
                            removeComparisonItem={()=>{dispatch(removeComparisonItem(item))}}
                            addFaforiteItem={()=>{dispatch(addFaforiteItem(item))}}
                            removeFavoriteItem={()=>{dispatch(removeFavoriteItem(item))}}
                            isFavorite={favoriteIdList.indexOf(item.id) != -1}
                            isComparison={comparisonIdList.indexOf(item.id) != -1}
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
                ))
                }
                {posts.total >= config.pageSize&&
                <div className="search-main-section__pagination-wrapper">
                    <Pagination total={posts.total} pageNum={posts.pageNum} handler={handleSelectPage}/>
                </div>}
            </div>
        </section>
    );
});
