export const ButtonMain = ({ children, addСlasses }) => {
    return (
        <button
            className={
                'button button_type_main button_color_main text text_type_main text_color_white ' +
                addСlasses
            }
        >
            {children}
        </button>
    );
};
