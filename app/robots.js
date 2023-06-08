export default function robots() {
    return {
      rules: {
        userAgent: '*',
        allow: '/',
        disallow: '/private/',
      },
      sitemap: 'http://127.0.0.1:3000/sitemap.xml',
    };
  }