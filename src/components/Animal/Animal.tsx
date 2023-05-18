import { GatsbyImage, IGatsbyImageData, getImage } from 'gatsby-plugin-image';
import React from 'react';
import * as S from './Animal.style';

interface Props {
  age: string;
  id: string;
  name: string;
  species: string;
  type: string;
  neutralizationStatus: boolean;
  vaccinationStatus: boolean;
  image: { gatsbyImageData: IGatsbyImageData };
}

export default function Animal({
  age,
  name,
  neutralizationStatus,
  species,
  type,
  vaccinationStatus,
  image,
}: Props) {
  const imageData = getImage(image.gatsbyImageData!);

  return (
    <S.Container>
      <S.Title>보호동물정보</S.Title>
      <S.Table>
        <tbody>
          <tr>
            <td className="label">이름</td>
            <td className="value">{name}</td>
            <td className="label">나이</td>
            <td className="value">{age}</td>
          </tr>
          <tr>
            <td className="label">분류</td>
            <td className="value">{type === 'cat' ? '고양이' : '개'}</td>
            <td className="label">묘종/견종</td>
            <td className="value">{species}</td>
          </tr>
          <tr>
            <td className="label">중성화유무</td>
            <td className="value">
              {neutralizationStatus ? '완료' : '미완료'}
            </td>
            <td className="label">접종유무</td>
            <td className="value">{vaccinationStatus ? '완료' : '미완료'}</td>
          </tr>
        </tbody>
      </S.Table>

      <GatsbyImage image={imageData!} alt={name} />
    </S.Container>
  );
}
