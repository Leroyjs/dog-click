import Link from "next/link"
import { Location } from "./Location"
import { SocialLink } from "./SocialLink"

export const ParentCard = ({ data, isMale=false }) => {
  console.log(data)
  return (
    <div className="parent-card">
      <div className="parent-card__img" style={{ backgroundImage: `url(https://res.cloudinary.com/leninsdo/image/upload/petstory/${data.mainImageGuid})` }}>

      </div>
      <div className="parent-card__main">
        <div className="parent-card__name text text_type_name">{data.name} {isMale?'(папа)':'(мама)'}</div>
        {data.city&&<Location>{data.city}</Location>}
        {data.birthDate&&<div className="parent-card__birth text_type_desc">Дата рождения: {data.birthDate}</div>}
        {data.pedigreeUrl&&
        <Link  href={data.pedigreeUrl}>
          <a className="parent-card__pedigree text text_type_desc text_color_main" target="_blank">
            Родословная
          </a>
        </Link>}
        {data.description&&<div className="text_type_h6 text text_color_gray parent-card__regalia">
          {data.description}
        </div>}
        <ul className="parent-card__social-links">
          {data.facebookUrl&&
          <li className="parent-card__social-link">
              <SocialLink type="FB" href={data.facebookUrl}/>
          </li>}
          {data.instagram&&
          <li className="parent-card__social-link">
              <SocialLink type="IG" href={data.instagram}/>
          </li>}
          {data.telegram&&
          <li className="parent-card__social-link">
              <SocialLink type="TG" href={data.telegram}/>
          </li>}
          {data.vkUrl&&
          <li className="parent-card__social-link">
              <SocialLink type="VK" href={data.vkUrl}/>
          </li>}
          {data.whatsappPhoneNumber&&
          <li className="parent-card__social-link">
              <SocialLink type="WA" href={'https://wa.me/'+data.whatsappPhoneNumber}/>
          </li>}
          {data.youtubeUrl&&
          <li className="parent-card__social-link">
              <SocialLink type="VK" href={data.youtubeUrl}/>
          </li>}
        </ul>
      </div>
    </div>
  )
}