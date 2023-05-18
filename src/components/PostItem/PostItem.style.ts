import { Link } from 'gatsby';
import styled from 'styled-components';

export const ItemLink = styled(Link)`
  border-radius: 10px;
  & + & {
    margin-top: 20px;
  }
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }

  @media (min-width: 901px) {
    & + & {
      margin-top: 0;
    }
  }
`;

export const Container = styled.article`
  width: 100%;
  display: flex;
  align-items: center;
`;
export const ImageWrapper = styled.div<{ $isEven: boolean }>`
  flex: 1;
  order: ${({ $isEven }) => ($isEven ? 1 : 2)};

  @media (min-width: 901px) {
    order: 1;
  }
`;
export const Content = styled.div<{ $isEven: boolean }>`
  padding: 10px 20px;
  flex: 1;
  align-self: flex-start;
  order: ${({ $isEven }) => ($isEven ? 2 : 1)};

  h3 {
    margin: 0;
    font-size: 24px;
  }

  @media (min-width: 901px) {
    order: 2;
  }
`;
