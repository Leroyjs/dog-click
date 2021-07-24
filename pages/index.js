import { Footer } from '../components/general/Footer';
import { MainWrapper } from '../components/general/MainWrapper';
import { FirstSection } from '../components/sections/FirstSection';
import { NewItemsSection } from '../components/sections/NewItemsSection';

export default function Index() {
    return (
        <MainWrapper>
            <FirstSection />
            <NewItemsSection />
            <Footer />
        </MainWrapper>
    );
}
