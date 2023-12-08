import styled from "styled-components";

export const Overlay = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: rgba(18, 20, 23, 0.5);
  z-index: 50;
`;
  
export const Modal = styled.div`
  position: relative;
  padding: 40px;
  max-height: 90vh;
  border-radius: 24px;
  overflow-y: auto;
  background-color: #FFF;

  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }  
`;
  
export const CloseBtn = styled.button`
  position: absolute;
  display: flex;
  top: 16px;
  right: 16px;
  margin: 0;
  padding: 0;
  align-items: center;
  justify-content: center;
  border: none;
  background: transparent;
  transition: transform 250ms linear;

  :hover {
    transform: scale(1.2);
  }
`;

// export const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 24px;
// `;

export const Img = styled.img`
margin-bottom: 14px;
  width: 460px;
  height: 248px;
  object-fit: cover;
  border-radius: 14px;
`;

// export const Title = styled.p`
//   margin-bottom: 8px;
//   color: var(--text-color-primary-black);
//   font-size: 16px;
//   font-weight: 500;
//   line-height: 1.5;
// `;

// export const Span = styled.span`
//   color: var(--text-color-blue);
//   margin-left: 4px;
// `;

// export const Year = styled.span`
//   margin-left: 4px;
// `;

// export const Price = styled.span`
//   margin-left: auto;
// `;

// export const Ul = styled.ul`
//   display: flex;
//   margin-bottom: 4px;
//   align-items: center;
//   gap: 6px;
//   width: 460px;
// `;

// export const Li = styled.li`
//   color: var(--text-color-secondary-black);
//   font-size: 12px;
//   line-height: 1.5;
//   border-right: 1px solid rgba(18, 20, 23, 0.1);
//   padding-right: 6px;

//   &:last-child {
//     border-right: none;
//     padding: 0;    
//   }
// `;

// export const Description = styled.p`
//   width: 460px;
//   color: var(--text-color-primary-black);
//   font-size: 14px;
//   line-height: 1.43;
// `;

// export const SubTitle = styled.p`
//   margin-bottom: 8px;
//   width: 460px;
//   color: var(--text-color-primary-black);
//   font-size: 14px;
//   font-weight: 500;
//   line-height: 1.43;
// `;

// export const ConditionsUl = styled.ul`
//   display: flex;
//   align-items: center;
//   flex-wrap: wrap;
//   gap: 8px;
//   width: 460px;
// `;

// export const ConditionLi = styled.li`
//   padding: 7px 14px;
//   color: var(--text-color-grey);
//   font-size: 12px;
//   line-height: 1.5;
// `;

// export const A = styled.a`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   width: 168px;
//   height: 44px;
//   background-color: var(--bg-button-color);
//   color: #fff;
//   font-family: inherit;
//   font-size: 14px;
//   font-weight: 600;
//   line-height: 1.43;
//   border: none;
//   border-radius: 12px;
//   transition: background-color 250ms linear;

//   :hover {
//     background-color: var(--dark-blue);
//   }
// `;
