import styled from 'styled-components';


export const P = styled.p`
  margin: 8px auto;
`;

export const Ol = styled.ol`
  list-style-type: none;
  // margin-left: -40px;
  margin-left: -2rem;
`;

export const LiItem = styled.li`
  counter-increment: list-item;
  margin-top: 32px;
  // margin-left: 20px;
  // padding-left: 2em;
  &:before {
    content: counter(list-item);
    font-weight: bold;
  }
`;

export const Div = styled.div`
  padding-left: 2rem;
`
