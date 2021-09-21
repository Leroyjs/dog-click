import Link from "next/link";
import { useDispatch } from "react-redux";
import { setModals } from "../../redux/actions";

export const HeaderSubLink = ({
  href,
  count = 0,
  text,
  children,
  onClick,
  modalText,
  modalActive,
}) => {
  const dispatch = useDispatch();
  function handleClose() {
    dispatch(
      setModals({
        comparison: false,
        favorite: false,
      })
    );
  }
  return (
    <div className="header-sub-link__wrapper">
      <div
        className={
          "header-sub-link__modal" +
          (modalActive ? " header-sub-link__modal_active" : "")
        }
      >
        <div className="header-sub-link__close" onClick={handleClose}>
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 9L9 1"
              stroke="#AF5B29"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M9 9L1 1"
              stroke="#AF5B29"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <svg
          className="header-sub-link__polygon"
          width="18"
          height="9"
          viewBox="0 0 18 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9 0L17.6603 8.25H0.339746L9 0Z" fill="white" />
        </svg>
        <div className="header-sub-link__modal-icon">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="12"
              cy="12"
              r="11.25"
              stroke="#AF5B29"
              strokeWidth="1.5"
            />
            <path
              d="M7 12.7692L10.8462 17L17 7"
              stroke="#AF5B29"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="text text_color_black text_type_main">
          Питомец добавлен в {modalText} <br />
          <div className="header-sub-link__modal-link">
            <Link href={href}>
              <a className="text text_color_main">
                Перейти в {modalText}
                <svg
                  className="header-sub-link__modal-arrow"
                  width="18"
                  height="10"
                  viewBox="0 0 18 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17 5C10.7516 5 1 5 1 5"
                    stroke="#AF5B29"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M13 1L17 5L13 9"
                    stroke="#AF5B29"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </Link>
          </div>
        </div>
      </div>

      <Link href={href}>
        <a className="header-sub-link" onClick={onClick}>
          <div className="header-sub-link__img-wrapper">
            {count !== 0 && (
              <div className="header-sub-link__count">{count}</div>
            )}
            {children}
          </div>
          {text && (
            <div
              className={
                "header-sub-link__text text text_type_nav text_color_black" +
                (count ? " header-sub-link__text_margin-left" : "")
              }
            >
              {text}
            </div>
          )}
        </a>
      </Link>
    </div>
  );
};
