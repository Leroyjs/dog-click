import { Description } from "../UI/Description";
import { ClearList } from "../UI/ClearList";
import { Card } from "../common/Card";
import { connect } from "react-redux";
import {
  addFaforiteItem,
  removeFavoriteItem,
  setFaforiteItems,
  removeComparisonItem,
  addComparisonItem,
} from "../../redux/actions";

const mapStateToProps = (state) => {
  return {
    favoriteList: state.favorite,
    favoriteIdList: state.favorite.map((item) => item.id),
    comparisonIdList: state.comparison.map((item) => item.id),
  };
};

export const PersonalAreaSection = connect(mapStateToProps, {
  setFaforiteItems,
  removeFavoriteItem,
  addFaforiteItem,
  removeComparisonItem,
  addComparisonItem,
})(({ pets = [], handleClearAll, favoriteIdList, comparisonIdList }) => {
  return (
    <section className="favorites-main-section main-padding">
      <h2 className="favorites-main-section__title text_type_h4">
        Мои объявления
      </h2>
      <div className="favorites-main-section__row">
        <Description>{pets.length} объявлений</Description>
        {<ClearList onClick={handleClearAll}>Удалить все мои данные</ClearList>}
      </div>
      <div className="favorites-main-section__items-wrapper">
        {pets.map((item) => (
          <div key={item.id} className="favorites-main-section__item-wrapper">
            <Card
              addFaforiteItem={() => {
                dispatch(addFaforiteItem(item));
              }}
              removeFavoriteItem={() => {
                dispatch(removeFavoriteItem(item));
              }}
              isFavorite={favoriteIdList.indexOf(item.id) != -1}
              isComparison={comparisonIdList.indexOf(item.id) != -1}
              removeComparisonItem={() => dispatch(removeComparisonItem(item))}
              addComparisonItem={() => dispatch(addComparisonItem(item))}
              id={item.id}
              breed={item.breed}
              mainPhotoGuid={item.mainImageGuid}
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
    </section>
  );
});
