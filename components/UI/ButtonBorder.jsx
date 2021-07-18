export const ButtonBorder = ({ children, addСlasses }) => {
    return (
        <button
            className={
                'button button_type_border button_color_main text text_type_main ' +
                addСlasses
            }
        >
            {children}
        </button>
    );
};
