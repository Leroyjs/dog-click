import { getServerSideSitemap } from 'next-sitemap'
import { GetServerSideProps } from 'next'
import { config } from '../../config';

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const response = await fetch(config.domain+"/api/public/sitemap")
  const urls = await response.json()
  const fields = []
  urls.forEach( item=>{
    fields.push({
      loc:`${config.domain}/detail-card/${item.id}`,
      priority:1,
      changefreq:'daily',
      lastmod:item.lastModified
    })
  })
  return  getServerSideSitemap(ctx, fields)
}

export default () => {}