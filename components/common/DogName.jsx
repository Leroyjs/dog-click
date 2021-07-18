import Image from 'next/image';
import maleImg from '../../media/male.svg';
import femaleImg from '../../media/female.svg';

export const DogName = ({ isMale = true, children }) => {
    const genderImg = isMale ? maleImg : femaleImg;
    return (
        <div className="dog-name">
            <div className="dog-name__gender">
                <Image src={genderImg} alt="gender" />
            </div>
            <div className="dog-name__name text text_type_name text_color_black">
                {children}
            </div>
        </div>
    );
};
