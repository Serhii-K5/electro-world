import styled from 'styled-components';


export const Div = styled.div`
  background-color: var(--bg-second);
  font-size: 1.25rem;  
`;

export const Section = styled.section`
  margin: 0px auto;
  padding: 16px;
  max-width: 1440px;  
`;

export const P = styled.p`
  padding: 8px 0;  
`;

export const Ul = styled.ul`
  list-style: inside;
`;

export const Li = styled.li`
  padding: 0 16px;
`;

export const H4 = styled.h4`
  text-align: center;
  padding: 32px 0;
`;


// export const Div = styled.div`
//   position: relative;
//   padding: 0 16px;
//   width: 90%;
//   background: var(--text-color-white);
//   overflow: hidden;
  
//   &:before {
//     content: ' ';
//     display: block;
//     position: absolute;
//     left: 0;
//     top: 0;
//     width: 100%;
//     height: 100%;
//     z-index: 2;
//     opacity: 0.1;
//     background-image: url(${BgImg});
//     background-repeat: no-repeat;
//     background-position: 50% 0;
//     background-size: cover;
//   };
// `;
