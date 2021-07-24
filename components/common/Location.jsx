import Image from 'next/image'
import locationImg from '../../media/location.svg'

export const Location = ({ children}) => {
  return (
    <div className="location">
      <div className="location__img-wrapper">
        <Image src={locationImg} alt="location" />
      </div>
      <div className="location__text text text_type_desc">
        {children}
      </div>
    </div>
  )
}