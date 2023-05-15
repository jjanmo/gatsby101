import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

interface Props {
  title: string;
}

export default function SEO({ title }: Props) {
  const data = useStaticQuery<Queries.SEODataQuery>(graphql`
    query SEOData {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <title>
      {title} | {data.site?.siteMetadata?.title}{' '}
    </title>
  );
}
