import React from 'react';

type AboutData = {
  id: string;
  node: React.ReactNode;
};

export const aboutData: AboutData[] = [
  {
    id: 'boyscout',
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
    id: 'morning',
    node: (
      <>
        <em>아침형 프로그래머</em>가 되려고 노력합니다.
      </>
    ),
  },
  {
    id: 'steamgame',
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
    id: 'yoga',
    node: (
      <>
        <em>요가</em>를 좋아합니다. 정신과 시간의 방으로!
      </>
    ),
  },
];
