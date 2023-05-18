import Animal from '@components/Animal';
import Layout from '@components/Layout';
import SEO from '@components/SEO/SEO';
import { PageProps, graphql } from 'gatsby';
import React from 'react';

export default function AdoptDetail({ data }: PageProps<Queries.AnimalQuery>) {
  const {
    age,
    id,
    name,
    species,
    type,
    neutralizationStatus,
    vaccinationStatus,
    image,
  } = data.contentfulLovingAnimal!;

  const props = {
    age: age!,
    id: id!,
    name: name!,
    species: species!,
    type: type!,
    neutralizationStatus: neutralizationStatus!,
    vaccinationStatus: vaccinationStatus!,
    image: {
      gatsbyImageData: image?.gatsbyImageData!,
    },
  };

  return (
    <Layout title="">
      <Animal {...props} />
    </Layout>
  );
}

export const query = graphql`
  query Animal($id: String) {
    contentfulLovingAnimal(id: { eq: $id }) {
      age
      id
      name
      neutralizationStatus
      species
      type
      vaccinationStatus
      image {
        gatsbyImageData
      }
    }
  }
`;

export const Head = ({ data }: PageProps<Queries.AnimalQuery>) => (
  <SEO title={data?.contentfulLovingAnimal?.name!} />
);
