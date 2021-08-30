export const Search = ({}) => {
  function handleSubmit(e) {
    e.preventDefault();
    console.log("rgfrf");
  }
  return (
    <form onSubmit={handleSubmit} className="search">
      <input
        type="text"
        className="search__input"
        placeholder="Поиск по статьям и советам.."
      />
      <button className="search__button">{searchImg()}</button>
    </form>
  );
};
const searchImg = () => (
  <svg
    width="17"
    height="17"
    viewBox="0 0 17 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.5 10.5L16 16"
      stroke="black"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <ellipse
      rx="5.5"
      ry="5.5"
      transform="matrix(1 -8.74228e-08 -8.74228e-08 -1 6.5 6.5)"
      stroke="black"
      strokeWidth="1.5"
    />
  </svg>
);
