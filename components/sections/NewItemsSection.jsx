import { Card } from '../common/Card';
import { Description } from '../UI/Description';
import { H2 } from '../UI/H2';
import { ButtonBorder } from '../UI/ButtonBorder';

export const NewItemsSection = () => {
    return (
        <section className="new-items-section main-padding">
            <H2>
                Новые <span className="text_color_main">объявления</span>
            </H2>
            <Description addСlasses="new-items-section__desc">
                Последние опубликованные предложения
            </Description>
            <div className="new-items-section__list">
                <div className="new-items-section__card-wrapper">
                    <Card></Card>
                </div>
                <div className="new-items-section__card-wrapper">
                    <Card></Card>
                </div>
                <div className="new-items-section__card-wrapper">
                    <Card></Card>
                </div>
                <div className="new-items-section__card-wrapper">
                    <Card></Card>
                </div>
                <div className="new-items-section__card-wrapper">
                    <Card></Card>
                </div>
                <div className="new-items-section__card-wrapper">
                    <Card></Card>
                </div>
                <div className="new-items-section__card-wrapper">
                    <Card></Card>
                </div>
                <div className="new-items-section__card-wrapper">
                    <Card></Card>
                </div>
            </div>
            <div className="new-items-section__button-wrapper">
                <ButtonBorder>Посмотреть всех</ButtonBorder>
            </div>
        </section>
    );
};
