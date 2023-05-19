import React, { useState } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import * as S from './Ground.style';

type AboutData = {
  image: string;
  node: React.ReactNode;
};
type Key = 'boyscout' | 'morning' | 'steamgame' | 'yoga';
type Ons = Record<Key | string, boolean>;

// TODO : image src를 props로 넘길수 있는 방법!
const aboutData: AboutData[] = [
  {
    image: 'boyscout',
    node: (
      <>
        <blockquote>
          The Boy Scout Rule : "Always leave the campground cleaner than you
          found it." <br />
          보이 스카웃 규칙 : 언제나 처음 왔을 때보다 깨끗하게 해놓고 캠프장을
          떠날 것.
        </blockquote>
        <em>보이스카웃 규칙</em>을 좋아하고 지향합니다.
      </>
    ),
  },
  {
    image: 'morning',
    node: (
      <>
        <em>아침형 프로그래머</em>가 되려고 노력합니다.
      </>
    ),
  },
  {
    image: 'steamgame',
    node: (
      <>
        <em> 스팀게임</em>을 구매하는 것을 좋아합니다,{' '}
        <del>like Garbage Collector</del>
        <br />
        게임 산업에 이바지 합니다.
      </>
    ),
  },
  {
    image: 'yoga',
    node: (
      <>
        <em>요가</em>를 좋아합니다. 정신과 시간의 방으로!
      </>
    ),
  },
];

export default function Ground() {
  const [ons, setOns] = useState<Ons>({
    boyscout: false,
    morning: false,
    steamgame: false,
    yoga: false,
  });

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    const key = (e.target as HTMLImageElement).src
      .split('/')
      .at(-1)
      ?.split('.')[0] as string;
    setOns({
      ...ons,
      [key]: !ons[key],
    });
  };

  return (
    <S.Container>
      <S.Item>
        <S.ImageWrapper onClick={handleClick} $on={ons['boyscout']}>
          <StaticImage
            src={`../../images/boyscout.png`}
            alt="boyscout"
            placeholder="none"
            width={100}
            height={100}
          />
        </S.ImageWrapper>
        <div>{aboutData[0].node}</div>
      </S.Item>
      <S.Item>
        <S.ImageWrapper onClick={handleClick} $on={ons['morning']}>
          <StaticImage
            src="../../images/morning.png"
            alt="morning"
            placeholder="none"
            width={100}
            height={100}
          />
        </S.ImageWrapper>
        <div>{aboutData[1].node}</div>
      </S.Item>
      <S.Item>
        <S.ImageWrapper onClick={handleClick} $on={ons['steamgame']}>
          <StaticImage
            src="../../images/steamgame.png"
            alt="steamgame"
            placeholder="none"
            width={100}
            height={100}
          />
        </S.ImageWrapper>
        <div>{aboutData[2].node}</div>
      </S.Item>
      <S.Item>
        <S.ImageWrapper onClick={handleClick} $on={ons['yoga']}>
          <StaticImage
            src="../../images/yoga.png"
            alt="yoga"
            placeholder="none"
            width={80}
            height={80}
          />
        </S.ImageWrapper>
        <div>{aboutData[3].node}</div>
      </S.Item>
    </S.Container>
  );
}
