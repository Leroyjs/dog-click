module.exports = {
  siteUrl: process.env.SITE_URL || "https://dogclick.ru/",
  generateRobotsTxt: true,
  priority: 1,
  exclude: ["/server-sitemap.xml"],
  robotsTxtOptions: {
    additionalSitemaps: ["https://dogclick.ru/server-sitemap.xml"],
  },
};
