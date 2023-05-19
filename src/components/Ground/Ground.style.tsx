import styled, { keyframes } from 'styled-components';

const blink = keyframes`
    0% {
      border: 1px dashed black;
    }
    25% {
      border: 1px transparent black;
    }
    50% {
      border: 1px dashed black;
    }
    75% {
      border: 1px transparent black;
    }
`;

export const Container = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const Item = styled.div`
  display: flex;
  align-items: center;

  & > div {
    width: 60%;
    padding: 0 0 0 40px;
    margin: 0;
    font-size: 16px;
    font-family: var(--fontFamily-sans);
    word-break: keep-all;
    transition: 0.2s ease-out;
  }
  em {
    color: #e17055;
    font-weight: 600;
    font-style: italic;
    margin-right: 5px;
  }
  blockquote {
    font-size: 12px;
    padding: 10px 20px;
    margin-bottom: 10px;
    background-color: #f8f9fa;
  }

  @media (min-width: 901px) {
    & > div {
      width: 80%;
      padding: 10px 0 10px 60px;
      margin: 0;
      font-size: 18px;
      font-family: var(--fontFamily-sans);
      word-break: keep-all;
    }
    blockquote {
      font-size: 18px;
    }
  }
`;

export const ImageWrapper = styled.span<{ $on: boolean }>`
  width: 140px;
  height: 140px;
  padding: 10px;
  margin: 10px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: #eee;
  cursor: pointer;

  animation: ${blink} 0.8s infinite;
  animation-play-state: ${({ $on }) => $on && 'paused'};

  & + div {
    opacity: ${({ $on }) => ($on ? 1 : 0)};
  }

  @media (min-width: 901px) {
    width: 130px;
    height: 130px;
  }
`;
