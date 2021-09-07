export const Checkbox = ({ children, isChecked, onChange }) => {
  return (
    <label className="checkbox">
      <input
        className="checkbox__main"
        type="checkbox"
        name="scales"
        checked={Boolean(isChecked)}
        onChange={onChange}
      ></input>
      <div className="checkbox__box">
        <svg
          className="checkbox__inner"
          width="13"
          height="12"
          viewBox="0 0 13 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.59998 6.80005L5.59998 11.2L12 0.800049"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className="checkbox__text text text_type_h6">{children}</div>
    </label>
  );
};
