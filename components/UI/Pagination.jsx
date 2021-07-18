export const Pagination = () => {
    return (
        <div className="pagination">
            <div className="pagination__arrow-wrapper">
                <svg
                    className="pagination__arrow pagination__arrow_left"
                    width="8"
                    height="14"
                    viewBox="0 0 8 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M7 13L1 7L7 1"
                        stroke="#AF5B29"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </div>
            <div className="pagination__main">
                <div className="pagination__item text_type_main">1</div>
                <div className="pagination__item pagination__item_active text_type_main">
                    2
                </div>
                <div className="pagination__item text_type_main">3</div>
                <div className="pagination__item text_type_main">4</div>
                <div className="pagination__more-item text_type_main">...</div>
                <div className="pagination__item text_type_main">5</div>
            </div>
            <div className="pagination__arrow-wrapper">
                <svg
                    className="pagination__arrow pagination__arrow_right"
                    width="8"
                    height="14"
                    viewBox="0 0 8 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M0.999999 1L7 7L1 13"
                        stroke="#AF5B29"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </div>
        </div>
    );
};
