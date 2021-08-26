import { Footer } from "../components/general/Footer";
import { MainWrapper } from "../components/general/MainWrapper";
import { MedicalCardImgSection } from "../components/sections/MedicalCardImgSection";
import { MedicalCardFirstSection } from "../components/sections/MedicalCardFirstSection";
import { MedicalCardSecondSection } from "../components/sections/MedicalCardSecondSection";
import { TitleBlock } from "../components/sections/TitleBlock";

import tagImg from "../media/medical-card/tags.jpg";
import categoryImg from "../media/medical-card/category.jpg";
import mainImg from "../media/medical-card/main.jpg";

import calendarImg_1 from "../media/medical-card/calendar-1.jpg";
import calendarImg_2 from "../media/medical-card/calendar-2.jpg";
import calendarImg_3 from "../media/medical-card/calendar-3.jpg";

import measureImg_1 from "../media/medical-card/measure-1.jpg";
import measureImg_2 from "../media/medical-card/measure-2.jpg";
import measureImg_3 from "../media/medical-card/measure-3.jpg";
import { ButtonBorder } from "../components/UI/ButtonBorder";
import Link from "next/link";

export default function MedicalCard() {
  return (
    <MainWrapper>
      <TitleBlock breadCrumbsList={breadCrumbsList}>
        Здоровье питомца - забота хозяина
      </TitleBlock>
      <MedicalCardFirstSection />
      <MedicalCardSecondSection />
      <MedicalCardImgSection
        desc="Вы можете добавлять документы любого типа, в том числе фото, сделанные на ваш смартфон."
        imgs={[tagImg, categoryImg, mainImg]}
      >
        Добавляйте документы,
        <span className="text_color_main"> справки и страховки питомцев</span>
      </MedicalCardImgSection>
      <MedicalCardImgSection
        desc="Добавляйте в календарь напоминания об анализах, прививках или консультациях. 
        Наш телеграм канал сможет напомнить вам о событии, либо вы сможете получить напоминание по смс или email."
        imgs={[calendarImg_1, calendarImg_2, calendarImg_3]}
      >
        Используйте календарь, чтобы
        <span className="text_color_main"> ничего не забыть</span>
      </MedicalCardImgSection>
      <MedicalCardImgSection
        desc="Вы можете выбрать именно те параметры, которые наиболее актуальны для измерений 
        в настоящее время. Следите за динамикой с той периодичностью, которая вам необходима."
        imgs={[measureImg_1, measureImg_2, measureImg_3]}
      >
        Измеряйте ключевые параметры и
        <span className="text_color_main"> отслеживайте динамику</span>
      </MedicalCardImgSection>
      <div className="medical-card__button-wrapper">
        <Link href="https://medstory.io">
          <a target="_blank">
            <ButtonBorder>Подключить бесплатно</ButtonBorder>
          </a>
        </Link>
      </div>
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
    text: "Медкарта",
    href: false,
  },
];
