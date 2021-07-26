export const ButtonBorder = ({ children, addСlasses, onClick }) => {
    return (
        <button
            onClick={onClick}
            className={
                'button button_type_border button_color_main text text_type_main ' +
                addСlasses
            }
        >
            {children}
        </button>
    );
};
