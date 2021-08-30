import { Footer } from "../components/general/Footer";
import { MainWrapper } from "../components/general/MainWrapper";
import { BlogMainSection } from "../components/sections/BlogMainSection";
import { TitleBlock } from "../components/sections/TitleBlock";
import someDogBGImg from "../media/some-dog-bg.jpg";

export default function Blog() {
  return (
    <MainWrapper>
      <TitleBlock breadCrumbsList={breadCrumbsList} img={someDogBGImg}>
        Самое полезное и интересное о питомцах в этом разделе
      </TitleBlock>
      <BlogMainSection />
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
    text: "Блог",
    href: false,
  },
];
