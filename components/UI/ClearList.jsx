export const ClearList = ({ children, onClick, addСlasses = "" }) => {
  return (
    <a className={"clear-list " + addСlasses} onClick={onClick}>
      <svg
        width="12"
        height="16"
        viewBox="0 0 18 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line
          x1="7.75"
          y1="9.75"
          x2="7.75"
          y2="17.25"
          stroke="#AF5B29"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <line
          x1="0.75"
          y1="-0.75"
          x2="8.25"
          y2="-0.75"
          transform="matrix(3.82474e-08 1 1 -4.99558e-08 11 9)"
          stroke="#AF5B29"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M3.13333 6.5H2C1.44772 6.5 1 6.05228 1 5.5V4.7027C1 4.15042 1.44772 3.7027 2 3.7027H6.33333M3.13333 6.5V20C3.13333 20.5523 3.58105 21 4.13333 21H13.8667C14.419 21 14.8667 20.5523 14.8667 20V6.5M3.13333 6.5H9H14.8667M14.8667 6.5H16C16.5523 6.5 17 6.05228 17 5.5V4.7027C17 4.15042 16.5523 3.7027 16 3.7027H11.6667M6.33333 3.7027V2C6.33333 1.44771 6.78105 1 7.33333 1H10.6667C11.219 1 11.6667 1.44772 11.6667 2V3.7027M6.33333 3.7027H11.6667"
          stroke="#AF5B29"
          strokeWidth="1.5"
        />
      </svg>

      <span className="clear-list__text text text_type_h6 text_color_main">
        {children}
      </span>
    </a>
  );
};
