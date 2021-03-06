import Link from "next/link";
import { ComparisonIcon } from "../UI/ComparisonIcon";
import { DeleteIcon } from "../UI/DeleteIcon";
import { FavoriteIcon } from "../UI/FavoriteIcon";
import { declOfNum } from "../../declOfNum";
import { makeMoney } from "../../makeMoney";

import { DogName } from "./DogName";
import { useMemo } from "react";
import { config } from "../../config";
import { useDispatch } from "react-redux";
import { setModals } from "../../redux/actions";

export const Card = ({
  breed,
  city,
  createDate,
  gender,
  id,
  mainPhotoGuid,
  name,
  price,
  monthsAge,
  isFavorite,
  addFaforiteItem,
  removeFavoriteItem,
  isComparison,
  addComparisonItem,
  removeComparisonItem,
  deleteHandler,
}) => {
  console.log(mainPhotoGuid);
  const dispatch = useDispatch();
  function handleFavorite(e) {
    e.preventDefault();
    ym(config.metrikaId, "reachGoal", "click-favorites");
    if (isFavorite) {
      removeFavoriteItem();
    } else {
      dispatch(
        setModals({
          comparison: false,
          favorite: true,
        })
      );
      setTimeout(() => {
        dispatch(
          setModals({
            comparison: false,
            favorite: false,
          })
        );
      }, 5000);
      addFaforiteItem();
    }
  }

  function handleComparison(e) {
    e.preventDefault();
    ym(config.metrikaId, "reachGoal", "click-compare");
    if (isComparison) {
      removeComparisonItem();
    } else {
      dispatch(
        setModals({
          comparison: true,
          favorite: false,
        })
      );
      setTimeout(() => {
        dispatch(
          setModals({
            comparison: false,
            favorite: false,
          })
        );
      }, 5000);
      addComparisonItem();
    }
  }
  function handleDelete(e) {
    e.preventDefault();
    deleteHandler();
  }
  const imgStyles = {
    backgroundImage: `url('https://res.cloudinary.com/leninsdo/image/upload/${config.imgID}/petstory/${mainPhotoGuid}')`,
  };
  const ageObj = useMemo(() => {
    const year = Math.floor(monthsAge / 12);
    const month = monthsAge % 12;
    return {
      year,
      month,
    };
  }, [monthsAge]);
  return (
    <Link href={"/detail-card/" + id}>
      <a className="card">
        <div className="card__img" style={imgStyles}>
          {deleteHandler ? (
            <DeleteIcon
              onClick={handleDelete}
              add??lasses="card__icon card__icon_delete"
            />
          ) : (
            <>
              <FavoriteIcon
                isActive={isFavorite}
                onClick={handleFavorite}
                add??lasses="card__icon card__icon_favorite"
              />
              <ComparisonIcon
                isActive={isComparison}
                onClick={handleComparison}
                add??lasses="card__icon card__icon_comparison"
              />
            </>
          )}
        </div>
        <div className="card__text">
          <div className="card__name">
            <DogName isMale={gender}>{name}</DogName>
          </div>
          <span className="card__age text text_type_nav text_color_gray">
            {ageObj.year !== 0 &&
              `${ageObj.year} ${declOfNum(ageObj.year, [
                "??????",
                "????????",
                "??????",
              ])} `}
            {ageObj.month !== 0 &&
              `${ageObj.month} ${declOfNum(ageObj.month, [
                "??????????",
                "????????????",
                "??????????????",
              ])}`}
          </span>
          <div className="card__breed text_color_black">{breed}</div>
          <div className="card__cost text text_type_cost text_color_main">
            {makeMoney(price) !== "0" ? makeMoney(price) + "  ???" : "??????????????????"}
          </div>
          <div className="card__desc-row">
            <div className="text text_color_gray">{city}</div>
            <div className="text text_color_gray">{createDate}</div>
          </div>
        </div>
      </a>
    </Link>
  );
};
