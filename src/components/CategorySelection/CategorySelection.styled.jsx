import styled from 'styled-components';

export const Ul = styled.ul`
  border: 1px solid var(--primary-grey);
`;

export const Li = styled.li`
  padding: 10px 5px;
  border-bottom: 1px solid var(--second-black);

  &.parent {
    border-bottom: 0px;
    padding: 0px 5px;
  }
`;