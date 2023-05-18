import React from 'react';
import Layout from '@components/Layout';
import SEO from '@components/SEO';
import { Link, PageProps, graphql } from 'gatsby';
import styled from 'styled-components';
import { GatsbyImage } from 'gatsby-plugin-image';

export default function Adopt({ data }: PageProps<Queries.AnimalsQuery>) {
  return (
    <Layout title="Adopt Animal">
      <Container>
        {data.allContentfulLovingAnimal.nodes.map((animal) => (
          <Link to={`/adopt/${animal.id}`}>
            <Item key={animal.id}>
              <GatsbyImage
                className="thumbnail"
                image={animal.image?.gatsbyImageData!}
                alt={`${animal.type}-${animal.name}`}
              />
              <div className="content">
                {animal.species} <span className="name">{animal.name}</span>
              </div>
            </Item>
          </Link>
        ))}
      </Container>
    </Layout>
  );
}

export const query = graphql`
  query Animals {
    allContentfulLovingAnimal {
      nodes {
        id
        species
        type
        image {
          gatsbyImageData(width: 200, height: 200)
        }
        name
      }
    }
  }
`;

export const Head = () => <SEO title="Adopt Animal" />;

const Container = styled.ul`
  width: 80%;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media (min-width: 901px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
  }
`;
const Item = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

  .content {
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #0984e3;
    font-style: italic;
  }
  .name {
    margin-left: 10px;
    color: black;
    font-weight: 600;
    font-style: normal;
  }

  .thumbnail {
    transition: 0.2s ease-out;
    border-radius: 10px;
  }
  &:hover .thumbnail {
    transform: scale(1.05);
  }
`;
