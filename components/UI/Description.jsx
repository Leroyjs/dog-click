export const Description = ({ children, addСlasses }) => {
    return (
        <span className={'text text_type_desc text_color_gray ' + addСlasses}>
            {children}
        </span>
    );
};
