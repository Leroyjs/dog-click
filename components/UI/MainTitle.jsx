export const MainTitle = ({ children, addСlasses }) => {
    return (
        <h1 className={'text text_type_main-title ' + addСlasses}>
            {children}
        </h1>
    );
};
