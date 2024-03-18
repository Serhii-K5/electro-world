import styled from 'styled-components';


export const Container = styled.div`
  position: relative;
  padding: 0px 10px;
`;

export const DropdownDiv = styled.div`
  width: 180px;
`;

export const Ul = styled.ul`
  position: absolute;
  top: 30px;
  left: -115px;
  zindex: 5;
  background-color: var(--primary-white);
  width: 150%;
  box-shadow: 0 0 5px 5px var(--primary-grey);
`;

export const Li = styled.li`
  border-bottom: solid 1px var(--primary-grey);
`;

export const Div = styled.div`
  padding: 10px 10px;
`;

