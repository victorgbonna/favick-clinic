import Head from "next/head";
import { useRouter } from "next/router";

const SITE_NAME = "Favick Skin Clinic";
const SITE_URL = "https://favickskinclinic.co.uk";
const SOCIAL_IMAGE = "https://res.cloudinary.com/greyhairedgallery/image/upload/v1785808542/favick-logo2_uxpcxh.png";

export default function PageMeta({ title, description, path, ogTitle, ogDescription }) {
  const router = useRouter();
  const fullTitle = title ? `${title} | Favick Skin Clinic` : "Favick Skin Clinic";
  const pagePath = path || router.asPath?.split("?")[0] || "/";
  const canonicalUrl = `${SITE_URL}${pagePath === "/" ? "" : pagePath}`;
  const socialTitle = ogTitle || fullTitle;
  const socialDescription = ogDescription || description;

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="application-name" content={SITE_NAME} />
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={socialTitle} />
      <meta property="og:description" content={socialDescription} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={SOCIAL_IMAGE} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={socialTitle} />
      <meta name="twitter:description" content={socialDescription} />
      <meta name="twitter:image" content={SOCIAL_IMAGE} />
    </Head>
  );
}
