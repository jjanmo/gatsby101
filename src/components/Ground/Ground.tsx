import React, { useState } from 'react';
import { GatsbyImage, StaticImage, getImage } from 'gatsby-plugin-image';
import * as S from './Ground.style';
import { graphql, useStaticQuery } from 'gatsby';
import { aboutData } from '@constants/about';

type Key = 'boyscout' | 'morning' | 'steamgame' | 'yoga';
type Ons = Record<Key | string, boolean>;

export default function Ground() {
  const data = useStaticQuery<Queries.IconsQuery>(graphql`
    query Icons {
      allMdx {
        edges {
          node {
            frontmatter {
              images {
                childImageSharp {
                  gatsbyImageData(placeholder: NONE)
                }
              }
            }
          }
        }
      }
    }
  `);

  const icons = data.allMdx.edges.filter((edge) =>
    Boolean(edge.node.frontmatter?.images)
  )[0].node.frontmatter?.images;

  const [ons, setOns] = useState<Ons>({
    boyscout: false,
    morning: false,
    steamgame: false,
    yoga: false,
  });

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    const id = (e.currentTarget as HTMLDivElement).id;

    setOns({
      ...ons,
      [id]: !ons[id],
    });
  };

  return (
    <S.Container>
      {aboutData.map((data, index) => {
        const image = getImage(
          icons?.[index]?.childImageSharp?.gatsbyImageData!
        )!;

        return (
          <S.Item key={data.id}>
            <S.ImageWrapper
              id={data.id}
              onClick={handleClick}
              $on={ons[data.id]}
            >
              <GatsbyImage image={image} alt={data.id} />
            </S.ImageWrapper>
            <div>{aboutData[index].node}</div>
          </S.Item>
        );
      })}
    </S.Container>
  );
}
