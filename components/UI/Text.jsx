export const Text = ({ children, addСlasses }) => {
    return <p className={'text text_type_main ' + addСlasses}>{children}</p>;
};
