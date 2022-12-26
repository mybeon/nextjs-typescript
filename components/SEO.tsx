import React from "react";
import Head from "next/head";

type Props = {
  children?: React.ReactNode;
  title?: string;
  description?: string;
};

const SEO = ({ title, description }: Props) => {
  return (
    <Head>
      <title>NextEvents {title ? `- ${title}` : ""}</title>
      <meta name="description" content={description || "this is nextJS events blog"} />
    </Head>
  );
};

export default SEO;
