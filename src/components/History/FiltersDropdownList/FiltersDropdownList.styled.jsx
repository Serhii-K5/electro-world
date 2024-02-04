import styled from 'styled-components';

export const Ul = styled.ul`
  border: 1px solid var(--text-color-grey);
`;

export const Li = styled.li`
  padding: 10px 5px;
  border-bottom: 1px solid var(--bg-overlay);

  &.parent {
    border-bottom: 0px;
    // font-size: 16px;
    padding: 0px 5px;
  }
`;