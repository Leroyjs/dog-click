import Image from 'next/image';
import photosDogsImg from '../../media/photos-dogs.png';
import { ButtonArrow } from '../UI/ButtonArrow';
import { Description } from '../UI/Description';
import { H2 } from '../UI/H2';
import { Text } from '../UI/Text';

export const AboutSection = () => {
    return (
        <section className="about-section main-padding">
            <div className="about-section__img-wrapper">
                <Image src={photosDogsImg} alt="photos-dogs" />
            </div>
            <div className="about-section__main">
                <H2 addСlasses="about-section__title">
                    О <span className="text_color_main">сервисе</span>
                </H2>
                <Description addСlasses="about-section__desc">
                    Коротко о нас
                </Description>
                <Text addСlasses="about-section__text">
                    DogClick — это обширная база породистых щенков от лучших
                    заводчиков по всей России. Наш сервис будет удобен как
                    будущим владельцам, которые смогут найти щенка по любым
                    заданным критериям, так и заводчикам и питомникам, желающим
                    продать животных.
                </Text>
                <div className="about-section__button">
                    <ButtonArrow>Поробнее</ButtonArrow>
                </div>
            </div>
        </section>
    );
};
