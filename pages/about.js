import { Footer } from "../components/general/Footer";
import { MainWrapper } from "../components/general/MainWrapper";
import { AboutBreedersSection } from "../components/sections/AboutBreedersSection";
import { AboutBuyersSection } from "../components/sections/AboutBuyersSection";
import { AboutFirstSection } from "../components/sections/AboutFirstSection";
import { AboutSecondSection } from "../components/sections/AboutSecondSection";
import { TitleBlock } from "../components/sections/TitleBlock";
import someDogBGImg from "../media/some-dog-bg.jpg";

export default function About() {
  return (
    <MainWrapper>
      <TitleBlock breadCrumbsList={breadCrumbsList} img={someDogBGImg}>
        Самое полезное и интересное о питомцах в этом разделе
      </TitleBlock>
      <AboutFirstSection />
      <AboutSecondSection />
      <AboutBreedersSection />
      <AboutBuyersSection />
      <Footer />
    </MainWrapper>
  );
}
const breadCrumbsList = [
  {
    text: "Главная",
    href: "/",
  },
  {
    text: "О нас",
    href: false,
  },
];
