import {Footer} from "../../components/general/Footer";
import {MainWrapper} from "../../components/general/MainWrapper";
import {RegistrationSection} from "../../components/sections/RegistrationSection";
import {TitleBlock} from "../../components/sections/TitleBlock";

export default function SignUp() {
    return (
        <MainWrapper>
            <TitleBlock>Личный кабинет</TitleBlock>
            <div className="personal-area__inner">
                <RegistrationSection/>
            </div>
            <Footer/>
        </MainWrapper>
    );
}
