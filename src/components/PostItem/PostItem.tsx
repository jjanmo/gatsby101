import { ArrayElementType } from '@components/types';
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';
import * as S from './PostItem.style';

export default function PostItem({
  excerpt,
  frontmatter,
  isEven,
}: ArrayElementType<Queries.PostsQuery['allMdx']['nodes']> & {
  isEven: boolean;
}) {
  const image = getImage(frontmatter?.image?.childImageSharp?.gatsbyImageData!);
  return (
    <S.ItemLink to={`/blog/${frontmatter?.slug}`}>
      <S.Container>
        <S.ImageWrapper $isEven={isEven}>
          <GatsbyImage
            image={image!}
            alt={frontmatter?.title!}
            objectFit="contain"
          />
        </S.ImageWrapper>

        <S.Content $isEven={isEven}>
          <h3>{frontmatter?.title}</h3>
          <p>{excerpt}</p>
        </S.Content>
      </S.Container>
    </S.ItemLink>
  );
}
