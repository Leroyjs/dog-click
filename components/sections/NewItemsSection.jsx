import { Card } from '../common/Card';
import { Description } from '../UI/Description';
import { H2 } from '../UI/H2';
import { ButtonBorder } from '../UI/ButtonBorder';
import Link from 'next/link';

export const NewItemsSection = ({posts}) => {
    return (
        <section className="new-items-section main-padding">
            <H2 addСlasses="new-items-section__title">
                Новые <span className="text_color_main">объявления</span>
            </H2>
            <Description addСlasses="new-items-section__desc">
                Последние опубликованные предложения
            </Description>
            <div className="new-items-section__list">
                {posts.map(item=>(
                    <div key={item.id} className="new-items-section__card-wrapper">
                        <Card
                            id={item.id}
                            breed={item.breed}
                            mainPhotoGuid={item.mainPhotoGuid}
                            city={item.city}
                            createDate={item.createDate} 
                            gender={item.gender}
                            name={item.name}
                            price={item.price}
                            monthsAge={item.monthsAge}
                            ownerFio={item.ownerFio}
                        />
                    </div>
                    ))}
            </div>
            <div className="new-items-section__button-wrapper">
                <Link href="/search">
                    <a>
                        <ButtonBorder>Посмотреть всех</ButtonBorder>
                    </a>
                </Link>
            </div>
        </section>
    );
};
