import styled from 'styled-components';

const transition = `250ms linear`;

export const LiBlock = styled.li`
  border-top: 1px solid var(--bg-color-grey);
`;

export const Div = styled.div`
  display: flex;
  padding: 16px;

`;

export const Strong = styled.strong`
  color: var(--text-color-blue);
  padding-left: 10px;
`;

export const Ul = styled.ul`
  padding: 0 16px 16px 16px;
`;

export const Li = styled.li`
  padding: 5px 0;
  // transition: color ${transition};
`;

export const Span = styled.span`
  padding-left: 10px;
  color: var(--text-color-grey1);
  // transition: color ${transition};
`;