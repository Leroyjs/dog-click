import { Header } from './Header';

export const MainWrapper = ({ children }) => {
    return (
        <>
            <Header />
            <main className="main">{children}</main>
        </>
    );
};
