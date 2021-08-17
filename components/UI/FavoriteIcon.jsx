export const FavoriteIcon = ({
  addСlasses = "",
  isActive = false,
  onClick = false,
}) => {
  function handleClick(e) {
    e.stopPropagation();
    onClick && onClick(e);
  }
  return (
    <button
      className={"icon " + addСlasses + (isActive ? " icon_active" : "")}
      onClick={handleClick}
      title="Избранное"
    >
      <svg
        className="icon__img icon__img_favorite"
        width="28"
        height="24"
        viewBox="0 0 28 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M26.0699 3.72517L26.0702 3.72574C27.5156 6.57887 26.9899 9.86834 24.1478 13.6361L24.1464 13.6379C21.8957 16.6411 18.6467 19.6596 13.8852 23.2237L13.884 23.2247C13.8642 23.2395 13.8362 23.25 13.8041 23.25C13.7721 23.25 13.744 23.2395 13.7243 23.2247L13.7232 23.2239C8.95561 19.6534 5.71243 16.6085 3.45951 13.6348C0.60953 9.86752 0.0842099 6.57848 1.52945 3.72574L1.52974 3.72517C2.51421 1.77779 5.45927 0.058217 9.0188 1.04141C10.7115 1.51286 12.1828 2.52208 13.1959 3.898L13.7998 4.71825L14.4038 3.898C15.417 2.5219 16.8885 1.51259 18.5815 1.04122L18.5834 1.04069C22.1297 0.0433931 25.0841 1.7752 26.0699 3.72517Z"
          stroke="#AF5B29"
          strokeWidth="1.5"
        />
      </svg>
    </button>
  );
};
