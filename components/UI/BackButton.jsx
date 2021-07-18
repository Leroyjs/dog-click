export const BackButton = ({ children, addСlasses }) => {
    return (
        <div className="back-button">
            <svg
                className="back-button__arrow"
                width="9"
                height="14"
                viewBox="0 0 9 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M8 13L2 7L8 1"
                    stroke="#AF5B29"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                />
            </svg>
            <span className="back-button__text text text_type_h6 text_color_main">
                Назад к предыдущей странице
            </span>
        </div>
    );
};
