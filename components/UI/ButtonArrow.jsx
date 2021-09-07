export const ButtonArrow = ({ children, addСlasses }) => {
  return (
    <button
      className={
        "button button_type_arrow text text_type_main text_color_main " +
        addСlasses
      }
    >
      {children}
      <svg
        className="button__arrow"
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
          // strokeWinecap="round"
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
    </button>
  );
};
