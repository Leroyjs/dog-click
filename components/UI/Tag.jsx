export const Tag = ({ color, text, onClick, isActive }) => {
  return (
    <div
      onClick={onClick}
      style={color ? { backgroundColor: "#" + color } : {}}
      className={
        "tag text text_color_white text_type_desc" +
        (onClick ? " tag_clickable" : "") +
        (isActive ? " tag_active" : "")
      }
    >
      {text || "Другое"}
    </div>
  );
};
