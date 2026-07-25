import Head from "next/head";

export default function PageMeta({ title, description }) {
  const fullTitle = title ? `${title} | Favick Skin Clinic` : "Favick Skin Clinic";

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
    </Head>
  );
}
