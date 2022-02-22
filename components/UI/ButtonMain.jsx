export const ButtonMain = ({
  children,
  addСlasses,
  onClick = false,
  isDisabled = false,
}) => {
  function handleOnClick(e) {
    onClick && onClick(e);
  }
  return (
    <button
      onClick={(e) => handleOnClick(e)}
      className={
        "button button_type_main button_color_main text text_type_main text_color_white " +
        addСlasses +
        (isDisabled ? " button_disabled" : "")
      }
      disabled={isDisabled}
    >
      {children}
    </button>
  );
};
