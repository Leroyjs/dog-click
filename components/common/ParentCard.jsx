import Link from "next/link"
import { Location } from "./Location"
import { SocialLink } from "./SocialLink"

export const ParentCard = ({ }) => {
  return (
    <div className="parent-card">
      <div className="parent-card__img">

      </div>
      <div className="parent-card__main">
        <div className="parent-card__name text text_type_name">Мэдисон (мама)</div>
        <Location>Россия</Location>
        <div className="parent-card__birth text_type_desc">Дата рождения: 04.06.2015</div>
        <Link  href="https://www.youtube.com">
          <a className="parent-card__pedigree text text_type_desc text_color_main" target="_blank">
            Родословная
          </a>
        </Link>
        <ul className="text_type_h6 text text_color_gray parent-card__regalia">
          <li className="parent-card__regalia-item">Чемпион России</li>
          <li className="parent-card__regalia-item">Чемпион Европы</li>
        </ul>
        <ul className="parent-card__social-links">
          <li className="parent-card__social-link">
            <SocialLink type="YT"/>
          </li>
          <li className="parent-card__social-link">
            <SocialLink type="VK"/>
          </li>
        </ul>
      </div>
    </div>
  )
}